import { correctFENStrings, inCorrectFENStrings } from "./shared/test-constants";
import { FENParser } from "../index";

describe("FENParser", () => {
    test("isValid should return true on correct FEN strings", () => {
        correctFENStrings.forEach(fen => {
            const parser = new FENParser(fen, {});

            const actual = parser.isValid();
            const expected = true;

            expect(actual).toBe(expected);
        });
    });

    test("isValid should return false on incorrect FEN strings", () => {
        inCorrectFENStrings.forEach(fen => {
            const parser = new FENParser(fen as any, {});

            const actual = parser.isValid();
            const expected = false;

            expect(actual).toBe(expected);
        });
    });
});