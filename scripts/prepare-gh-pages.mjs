
import { copyFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("dist/client");
const shellFile = resolve(outputDir, "_shell.html");
const faviconSource = resolve("public/favicon.ico");

try {
  await access(shellFile);

  await copyFile(shellFile, resolve(outputDir, "index.html"));
  await copyFile(shellFile, resolve(outputDir, "404.html"));

  await access(faviconSource);
  await copyFile(faviconSource, resolve(outputDir, "favicon.ico"));

  console.log("Arquivos preparados para GitHub Pages.");
} catch (error) {
  console.error("Erro ao preparar GitHub Pages:", error.message);
  process.exit(1);
}