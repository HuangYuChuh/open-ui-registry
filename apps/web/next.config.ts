import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@open-ui-registry/registry"],
};

export default nextConfig;
