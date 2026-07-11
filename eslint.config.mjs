import { defineConfig, globalIgnores } from "eslint/config";
import { flatConfig } from "@next/eslint-plugin-next";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  flatConfig.coreWebVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
