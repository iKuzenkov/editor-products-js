import { generateRandomId } from "../../../src/js/modules/interaction-helpers/random-id";

describe("Generating a random ID", () => {
  const testCases = [
    {
      case_id: 1,
      length: 8,
      radix: 16,
    },
    {
      case_id: 2,
      length: 1,
      radix: 16,
    },
  ];
  testCases.forEach((test) => {
    const { case_id, length, radix } = test;

    it(`id: ${case_id}, should be valid`, () => {
      const randomID = generateRandomId(length, radix);
      const [randomPart, timePart] = randomID.split("-");
      expect(randomID).toEqual(expect.any(String));
      expect(randomID).toMatch(/^[a-z0-9]+-\w+$/);
      expect(randomPart).toHaveLength(length);
      expect(parseInt(timePart, radix)).toBeGreaterThan(0);
    });
  });
});

describe("Invalid length", () => {
  const testCases = [{ case_id: 1, length: -1, radix: 16 }];
  testCases.forEach((test) => {
    const { case_id, length, radix } = test;
    it(`id: ${case_id}, should be invalid length`, () => {
      expect(() => generateRandomId(length, radix)).toThrow(
        "length should be a positive integer"
      );
    });
  });
});

describe("Invalid radix", () => {
  const testCases = [{ case_id: 1, length: 8, radix: 33 }];
  testCases.forEach((test) => {
    const { case_id, length, radix } = test;
    it(`id: ${case_id}, should be invalid radix`, () => {
      expect(() => generateRandomId(length, radix)).toThrow(
        "radix should be 16 or 36"
      );
    });
  });
});
