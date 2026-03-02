# Smarter Technologies – Robotic Arm Package Sorting

This repository contains a TypeScript implementation of the `roboticArmStackSort` function. The system categorizes packages into **STANDARD**, **SPECIAL**, or **REJECTED** stacks based on their physical dimensions (volume) and mass, adhering to the Smarter Technologies technical screening requirements.

---

## Sorting Logic Rules

A package is categorized based on two primary criteria:

1.  **Bulky**: Volume $\ge 1,000,000$ cm³ OR any dimension $\ge 150$ cm.
2.  **Heavy**: Mass $\ge 20$ kg.

### Stacking Categories:
* **STANDARD**: Not bulky AND not heavy.
* **SPECIAL**: Either bulky OR heavy (but not both).
* **REJECTED**: Both bulky AND heavy.



---

## Quick Start

### 1. Installation
Clone the repository and install the development dependencies:

```bash
git clone https://github.com/cfrome77/Smarter-Technology-Core-Engineering-Technical-Screen.git

cd Smarter-Technology-Core-Engineering-Technical-Screen

npm install
```

### 2. Running the Script

Since this project uses modern ES Modules (ESM), we use tsx to run the TypeScript files directly without a manual build step.

#### Via NPM Script:

```bash
npm start
```
#### Via NPX (Direct):

```bash
npx tsx roboticArmStackSort.ts
```
### 3. Running Tests

The project uses Jest with ts-jest to validate all sorting edge cases. Because the project is set to "type": "module", tests are executed with the experimental VM modules flag enabled.

```bash
npm test
```

### Test Suite Overview

The roboticArmStackSort.test.ts file performs comprehensive validation across three main scenarios:

- STANDARD packages: Verifies packages with volume <1,000,000 cm³, dimensions <150 cm, and mass <20 kg.
- SPECIAL packages: Validates logic when a package is bulky (large volume or dimension) OR heavy, ensuring they don't fall into the rejected stack.
- REJECTED packages: Ensures packages meeting both bulky and heavy criteria are correctly flagged for rejection.

### Tech Stack

- TypeScript: Type-safe logic implementation.
- tsx: Fast, zero-config TypeScript execution for Node.js.
- Jest & ts-jest: Unit testing framework configured for ES Modules.
- Node.js: v18.x or higher recommended.

### Notes for Reviewers

- The implementation uses strictly defined constants for volume (1,000,000 cm³) and mass (20 kg) limits.
- The setup is designed to be "plug-and-play"—simply running npm install and npm test will verify the entire solution.
