// Roasting a smart fridge: its firmware update reboots it mid-week and it treats
// the leftovers like estranged relatives it owes an apology to.
// Angle: the fridge is so busy being "smart" it can't do the one dumb job — stay cold and shut up.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My smart fridge rebooted during a firmware update and now greets my leftovers like estranged relatives.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
