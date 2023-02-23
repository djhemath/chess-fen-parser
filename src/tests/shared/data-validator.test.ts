import { DataValidator } from "../../shared/data-validator";
import { invalidArrays, validNonEmptyArrays } from "./test-constants";

describe("DataValidator", () => {
    test("isNonEmptyArray should return true in case of valid arrays", () => {
        validNonEmptyArrays.forEach(array => {
            const actual = DataValidator.isNonEmptyArray(array);
            const expected = true;

            expect(actual).toBe(expected);
        });
    });

    test("isNonEmptyArray should return false in case of invalid arrays", () => {
        invalidArrays.forEach(array => {
            const actual = DataValidator.isNonEmptyArray(array);
            const expected = false;

            expect(actual).toBe(expected);
        });
    });
});