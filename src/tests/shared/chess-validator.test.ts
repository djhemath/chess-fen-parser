import { ChessValidators } from "../../shared/chess-validators";
import { correctFENStrings, inCorrectActiveColors, inCorrectFENStrings, inCorrectPiecePlacements } from "./test-constants";

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
        inCorrectPiecePlacements.forEach(piecePlacementField => {
            const actual = ChessValidators.isPiecePlacementValid(piecePlacementField as any);
            const expected = false;

            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

    });
});

describe("isActiveColorValid", () => {
    test("should return true on valid active colors", () => {
        [
            "w",
            "b"
        ].forEach(activeColor => {
            const actual = ChessValidators.isActiveColorValid(activeColor);
            const expected = true;

            expect(actual).toBe(expected);
        });
    });

    test("should return false on invalid active colors", () => {
        inCorrectActiveColors.forEach(activeColor => {
            const actual = ChessValidators.isActiveColorValid(activeColor as any);
            const expected = false;

            expect(actual).toBe(expected);
        });
    });
});