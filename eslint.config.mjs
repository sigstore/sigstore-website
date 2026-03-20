import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    ignores: ["public/swagger/**"],
  },
];

export default config;
