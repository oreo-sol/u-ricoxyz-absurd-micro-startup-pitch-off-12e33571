import { mkdirSync, writeFileSync } from "node:fs";
const A = "We hire humans to click 'I'm not a robot' for AI agents that keep failing CAPTCHAs — ";
const B = "$0.10 a click, agents never lift a finger.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", A + B);
