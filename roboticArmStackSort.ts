/**
 * Sorts a package into the correct stack according to its volume and mass.
 * 
 * Rules:
 * - Bulky: Volume >= 1,000,000 cm cubed OR any dimension >= 150 cm.
 * - Heavy: Mass >= 20 kg.
 *
 * Categories:
 * - REJECTED: Both Bulky AND Heavy.
 * - SPECIAL: Either Bulky OR Heavy.
 * - STANDARD: Neither Bulky nor Heavy.
 * 
 * @param width - Width in cm
 * @param height - Height in cm
 * @param length - Length in cm
 * @param mass - Mass in kg
 */
export function roboticArmStackSort(
  width: number,
  height: number,
  length: number,
  mass: number,
): string {
    // Initialize stack variable to hold the result
    let stack: string = "";
    
    // Calculate volume in cubic centimeters
    const volume = width * height * length;

    // Determine if the package is bulky or heavy
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    // Determine the stack based on the bulky and heavy conditions using the specified rules
    if (isBulky && isHeavy) {
        stack = "REJECTED";
    } else if (isBulky || isHeavy) {
        stack = "SPECIAL";
    } else {
        stack = "STANDARD";
    }

    // Return the determined stack for the package
    return stack;
}

// Example usage matches the logic:
console.log(roboticArmStackSort(50, 50, 50, 10));    // "STANDARD"
console.log(roboticArmStackSort(100, 100, 100, 10)); // "SPECIAL" (Volume is exactly 1,000,000)
console.log(roboticArmStackSort(150, 150, 150, 25)); // "REJECTED" (Bulky and Heavy)