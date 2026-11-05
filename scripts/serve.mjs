import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Run the existing Vite/Vinext commands on Windows as well as Unix shells.
const root = fileURLToPath(new URL("..", import.meta.url));
const mode = process.argv[2];
if (mode !== "dev" && mode !== "start") {
  console.error("Use npm run dev or npm start.");
  process.exit(64);
}

const packageName = mode === "dev" ? "vite" : "vinext";
const packageRoot = path.join(root, "node_modules", packageName);
const manifestPath = path.join(packageRoot, "package.json");
if (!existsSync(manifestPath)) {
  console.error("The website dependencies are missing. Run npm ci in this project, then try again.");
  process.exit(69);
}
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const binPath = typeof manifest.bin === "string" ? manifest.bin : manifest.bin?.[packageName];
if (!binPath || !existsSync(path.join(packageRoot, binPath))) {
  console.error(`The ${packageName} installation is incomplete. Complete npm ci before starting the website.`);
  process.exit(69);
}

const child = spawn(process.execPath, [
  path.join(packageRoot, binPath),
  ...(mode === "start" ? ["start"] : []),
  ...process.argv.slice(3),
], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, WRANGLER_LOG_PATH: process.env.WRANGLER_LOG_PATH ?? ".wrangler/wrangler.log" },
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("error", (error) => {
  console.error(`Could not start the website: ${error.message}`);
  process.exitCode = 1;
});
child.on("exit", (code) => { process.exitCode = code ?? 1; });
