import { roboticArmStackSort } from "./roboticArmStackSort.js";

/**
 * @description
 * This test suite verifies the functionality of the roboticArmStackSort function, 
 * which categorizes packages into "STANDARD", "SPECIAL", or "REJECTED" stacks 
 * based on their volume and mass.
 */
describe("roboticArmStackSort", () => {
  /**
   * STANDARD: Volume < 1,000,000 AND all dimensions < 150 AND mass < 20.
   */
  test("STANDARD packages", () => {
    expect(roboticArmStackSort(50, 50, 50, 10)).toBe("STANDARD");
    expect(roboticArmStackSort(99, 100, 100, 15)).toBe("STANDARD");
    expect(roboticArmStackSort(90, 90, 90, 10)).toBe("STANDARD");
    expect(roboticArmStackSort(149, 10, 10, 19)).toBe("STANDARD");
  });

  /**
   * SPECIAL: Bulky (Volume >= 1,000,000 OR Dim >= 150) OR Heavy (Mass >= 20), but not both.
   */
  test("SPECIAL packages due to bulky or heavy", () => {
    expect(roboticArmStackSort(100, 100, 100, 10)).toBe("SPECIAL");
    expect(roboticArmStackSort(150, 50, 50, 10)).toBe("SPECIAL");
    expect(roboticArmStackSort(50, 50, 50, 20)).toBe("SPECIAL");
    expect(roboticArmStackSort(200, 10, 10, 10)).toBe("SPECIAL");
  });

  /**
   * REJECTED: Both Bulky AND Heavy.
   */
  test("REJECTED packages (both bulky & heavy)", () => {
    expect(roboticArmStackSort(100, 100, 100, 25)).toBe("REJECTED");
    expect(roboticArmStackSort(150, 150, 150, 25)).toBe("REJECTED");
    expect(roboticArmStackSort(100, 100, 100, 20)).toBe("REJECTED");
    expect(roboticArmStackSort(200, 200, 200, 30)).toBe("REJECTED");
  });
});