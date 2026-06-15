// @ts-check
import { spawn } from "node:child_process";
import os from "node:os";
import path from "node:path";

const env = { ...process.env };

if (process.platform === "linux" && hasWindowsTempPath(env)) {
  env.TMPDIR = "/tmp";
  env.TMP = "/tmp";
  env.TEMP = "/tmp";
}

const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";
const outputDirectory = env.PLAYWRIGHT_OUTPUT_DIR || path.join(env.TMPDIR || os.tmpdir(), "tabpack-playwright-results");
const child = spawn(npxCommand, ["--no-install", "playwright", "test", "tests/e2e", `--output=${outputDirectory}`], {
  env,
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exitCode = code ?? 1;
});

child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});

function hasWindowsTempPath(environment) {
  return [environment.TMPDIR, environment.TMP, environment.TEMP].some((value) => {
    return typeof value === "string" && value.toLowerCase().startsWith("/mnt/c/");
  });
}
