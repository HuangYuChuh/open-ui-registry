#!/usr/bin/env sh
set -eu

APP_NAME="open-ui-registry"
PUBLIC_PORT="${PUBLIC_PORT:-8088}"
CANDIDATE_PORT="${CANDIDATE_PORT:-18088}"
REVISION="$(git rev-parse --short=12 HEAD)"
IMAGE="${APP_NAME}:${REVISION}"
CANDIDATE_CONTAINER="${APP_NAME}-candidate"
CURRENT_CONTAINER="${APP_NAME}"

docker_cmd() {
  sudo docker "$@"
}

cleanup_candidate() {
  docker_cmd rm -f "$CANDIDATE_CONTAINER" >/dev/null 2>&1 || true
}

wait_for_http() {
  url="$1"
  attempts=20

  while [ "$attempts" -gt 0 ]; do
    if curl --fail --silent --show-error --max-time 3 "$url" >/dev/null; then
      return 0
    fi
    attempts=$((attempts - 1))
    sleep 1
  done

  return 1
}

cleanup_candidate
trap cleanup_candidate EXIT

echo "Building ${IMAGE}..."
docker_cmd build --pull --tag "$IMAGE" .

echo "Validating candidate on 127.0.0.1:${CANDIDATE_PORT}..."
docker_cmd run \
  --detach \
  --name "$CANDIDATE_CONTAINER" \
  --publish "127.0.0.1:${CANDIDATE_PORT}:80" \
  --memory "96m" \
  "$IMAGE" >/dev/null

wait_for_http "http://127.0.0.1:${CANDIDATE_PORT}/"
wait_for_http "http://127.0.0.1:${CANDIDATE_PORT}/r/registry.json"

PREVIOUS_IMAGE="$(docker_cmd inspect --format '{{.Config.Image}}' "$CURRENT_CONTAINER" 2>/dev/null || true)"

docker_cmd rm -f "$CURRENT_CONTAINER" >/dev/null 2>&1 || true

echo "Promoting ${IMAGE} to port ${PUBLIC_PORT}..."
docker_cmd run \
  --detach \
  --name "$CURRENT_CONTAINER" \
  --restart unless-stopped \
  --publish "${PUBLIC_PORT}:80" \
  --memory "96m" \
  --label "org.opencontainers.image.revision=${REVISION}" \
  "$IMAGE" >/dev/null

if ! wait_for_http "http://127.0.0.1:${PUBLIC_PORT}/"; then
  echo "New deployment failed its final health check." >&2
  docker_cmd rm -f "$CURRENT_CONTAINER" >/dev/null 2>&1 || true

  if [ -n "$PREVIOUS_IMAGE" ]; then
    echo "Restoring ${PREVIOUS_IMAGE}..." >&2
    docker_cmd run \
      --detach \
      --name "$CURRENT_CONTAINER" \
      --restart unless-stopped \
      --publish "${PUBLIC_PORT}:80" \
      --memory "96m" \
      "$PREVIOUS_IMAGE" >/dev/null
  fi

  exit 1
fi

echo "Deployment complete: http://127.0.0.1:${PUBLIC_PORT}"
