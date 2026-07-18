import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the file-tracing root to this folder so unrelated lockfiles elsewhere on
  // the machine don't get picked up (this app deploys as its own Vercel project).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
