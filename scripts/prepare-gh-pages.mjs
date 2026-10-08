
import { copyFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("dist/client");
const shellFile = resolve(outputDir, "_shell.html");
const indexFile = resolve(outputDir, "index.html");
const notFoundFile = resolve(outputDir, "404.html");

try {
  await access(shellFile);

  await copyFile(shellFile, indexFile);
  await copyFile(shellFile, notFoundFile);

  console.log("GitHub Pages preparado com sucesso!");
  console.log("- index.html criado");
  console.log("- 404.html criado");
} catch {
  console.error(
    "Arquivo dist/client/_shell.html não encontrado. " +
      "Execute npm run build e confira a pasta dist/client.",
  );

  process.exit(1);
}