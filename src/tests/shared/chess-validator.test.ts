import { ChessValidators } from "../../shared/chess-validators";
import { correctFENStrings, inCorrectFENStrings, inCorrectPiecePlacements } from "./test-constants";

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