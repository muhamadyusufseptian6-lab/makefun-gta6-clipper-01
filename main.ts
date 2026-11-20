// gta6-clipper-01 entry program.
//
// Copies VIDEO.json from this repository into the grader's output
// directory. That is all the program has to do: the house reads the
// video itself through the YouTube Data API, so nothing this program
// writes about the video counts toward the score.
//
// Standard library only. No network, no wall clock, no files outside
// this repository. The two runs of an entry write the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository is mounted at MAKEFUN_BOT_DIR in the grader (/bot);
// locally it is wherever this file lives, resolved from import.meta.url.
const repoDir = process.env.MAKEFUN_BOT_DIR
  ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
