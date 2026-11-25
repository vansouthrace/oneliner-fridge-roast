// Roast angle: the "smart" fridge burns hours on a firmware update
// and comes out dumber — it forgets its one core job, making ice.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My smart fridge spent three hours on a firmware update and forgot how to make ice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
