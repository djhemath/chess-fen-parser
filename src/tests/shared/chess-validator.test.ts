import { ChessValidators } from "../../shared/chess-validators";
import { correctFENStrings, inCorrectFENStrings } from "./test-constants";

describe("isFenStringValid", () => {
    test("should be valid", () => {
        correctFENStrings.forEach(fen => {
            const actual = ChessValidators.isFenStringValid(fen);
            const expected = fen.split(" ");
        
            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });

    });

    test("should be invalid", () => {
        inCorrectFENStrings.forEach(fen => {
            const actual = ChessValidators.isFenStringValid(fen as any);
            const expected = false;

            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

    });
});

describe("isPiecePlacementValid", () => {
    test("should be valid", () => {
        correctFENStrings.forEach(fen => {
            const piecePlacementField = fen.split(" ")[0];
            const actual = ChessValidators.isPiecePlacementValid(piecePlacementField);
            const expected = fen.split(" ")[0].split("/");

            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });

    });

    test("should be invalid", () => {
        [
            "r6r/1b2k1bq/8/8/7B/8/R3K2R",
            "r6r/1b2k1bq/8/8/7B/8/8/RR2K2R",
            "r6r/1b2k1bq/8/8/7B/8/8/R3Q2R",
            "rr5r/1b2k1bq/8/8/7B/8/8/R3K2R",
            "r6r/1b2n1bq/8/8/7B/8/8/R3K2R",
            "r6r/1b2k1bq/8/8/7B/9/8/R3K2R",
            "r6r/1b2k1bq/8/8/7B/8/8/R4K2R",
            "",
            "///////",
            false,
            true,
            undefined,
            null,
        ].forEach(fen => {
            const actual = ChessValidators.isPiecePlacementValid(fen as any);
            const expected = false;

            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

    });
});