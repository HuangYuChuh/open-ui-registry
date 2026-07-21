# Deployment

The foundation site is a static Next.js export served by Nginx in Docker.

## Current production target

- Provider: Tencent Cloud Lighthouse
- Region: Hong Kong
- Public URL: `https://ui.kelin.center/`
- Registry URL: `https://ui.kelin.center/r/registry.json`
- Ingress: Cloudflare Tunnel `kelin-newsletter-hk`
- Origin: `http://127.0.0.1:8088`
- Container: `open-ui-registry`
- Public firewall rule: not required; port `8088` is loopback-only

## Why static export

The initial gallery and Registry endpoint do not need a server-side application runtime. Static export keeps memory use low on the 1 GB Tencent Lighthouse instance and avoids installing Node.js on the host.

## Server deployment

```bash
git clone https://github.com/HuangYuChuh/open-ui-registry.git
cd open-ui-registry
sh deploy/server-deploy.sh
```

Defaults:

- public port: `8088`;
- candidate validation port: `18088`, bound only to localhost;
- runtime memory limit: `96m`;
- container name: `open-ui-registry`.

The script builds an image tagged with the Git revision, validates it on the candidate port, promotes it to the public port, and restores the previous image if the final health check fails.

Override the public port when needed:

```bash
PUBLIC_PORT=8089 sh deploy/server-deploy.sh
```
