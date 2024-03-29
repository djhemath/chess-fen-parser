import { ChessValidators } from "../../shared/chess-validators";
import { STARTING_POSITION } from "../../shared/constants";
import { correctFENStrings, inCorrectActiveColors, incorrectCastlingAvailability, incorrectEnPassantTargets, incorrectEnPassantTargetsForBlack, incorrectEnPassantTargetsForWhite, inCorrectFENStrings, incorrectFullMoveClocks, incorrectFullMoveClocksInStartingPosition, incorrectHalfMoveClocks, incorrectHalfMoveClocksInStartingPosition, inCorrectPiecePlacements } from "./test-constants";

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

describe("isCastlingAvailabilityValid", () => {
    test('should be valid', () => {
        correctFENStrings.forEach(fen => {
            const actual = ChessValidators.isCastlingAvailabilityValid(fen.split(" ")[2]);
            const expected = true;
        
            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });
    });

    test('should be invalid', () => {
        incorrectCastlingAvailability.forEach(castlingAvailability => {
            const actual = ChessValidators.isCastlingAvailabilityValid(castlingAvailability as any);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });
    });
});

describe("isEnPassantTargetValid", () => {
    test('should be valid', () => {
        correctFENStrings.forEach(fen => {
            const activeColor = fen.split(" ")[1];
            const actual = ChessValidators.isEnPassantTargetValid(fen.split(" ")[3], activeColor);
            const expected = true;
        
            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });
    });

    test('should be invalid', () => {
        incorrectEnPassantTargets.forEach(enPassantTarget => {
            const activeColor = (Math.random() * 10) % 2 === 0 ? 'w': 'b';
            const actual = ChessValidators.isEnPassantTargetValid(enPassantTarget as any, activeColor);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

        incorrectEnPassantTargetsForBlack.forEach(enPassantTarget => {
            const activeColor = 'b';
            const actual = ChessValidators.isEnPassantTargetValid(enPassantTarget as any, activeColor);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

        incorrectEnPassantTargetsForWhite.forEach(enPassantTarget => {
            const activeColor = 'w';
            const actual = ChessValidators.isEnPassantTargetValid(enPassantTarget as any, activeColor);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });
    });
});

describe("isHalfMoveClockValid", () => {
    test('should be valid', () => {
        correctFENStrings.forEach(fen => {
            const actual = ChessValidators.isHalfMoveClockValid(fen.split(" ")[4], fen.split(" ")[0]);
            const expected = true;
        
            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });
    });

    test('should be invalid', () => {
        incorrectHalfMoveClocks.forEach(halfMoveClock => {
            const actual = ChessValidators.isHalfMoveClockValid(halfMoveClock as any, "");
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

        incorrectHalfMoveClocksInStartingPosition.forEach(halfMoveClock => {
            const actual = ChessValidators.isHalfMoveClockValid(halfMoveClock as any, STARTING_POSITION);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });
    });
});

describe("isFullMoveClockValid", () => {
    test('should be valid', () => {
        correctFENStrings.forEach(fen => {
            const actual = ChessValidators.isFullMoveClockValid(fen.split(" ")[5], fen.split(" ")[0]);
            const expected = true;
        
            expect(actual).toBeTruthy();
            expect(actual).toEqual(expected);
        });
    });

    test('should be invalid', () => {
        incorrectFullMoveClocks.forEach(fullMoveClock => {
            const actual = ChessValidators.isFullMoveClockValid(fullMoveClock as any, "");
            const expected = false;
            console.log(fullMoveClock);
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });

        incorrectFullMoveClocksInStartingPosition.forEach(fullMoveClock => {
            const actual = ChessValidators.isFullMoveClockValid(fullMoveClock as any, STARTING_POSITION);
            const expected = false;
        
            expect(actual).toBeFalsy();
            expect(actual).toEqual(expected);
        });
    });
});