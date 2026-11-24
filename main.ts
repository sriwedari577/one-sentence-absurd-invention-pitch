import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: a miniature butler on roller skates lives in the toaster,
// catches each slice mid-pop and butters it before it can land
// butter-side down. The laugh comes from the invention itself — a
// tiny servant doing a heroic rescue inside a kitchen appliance —
// and the fix is silly yet weirdly plausible: catch the toast
// before gravity and the floor get their say. It names the
// annoyance, the invention and its mechanism in one tight sentence.
// Output is a fixed string: deterministic, 194 characters plus newline.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, "entry.txt"),
  "The Toast Butler is a miniature butler on tiny roller skates who lives inside your toaster and catches each slice mid-pop, buttering it before it can land butter-side down on your kitchen floor.\n",
  "utf8",
);
