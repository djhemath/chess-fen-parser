export class ChessValidators {
    static isFenStringValid(fen: string): (boolean | string[]) {
        // Shouldn't be undefined, null, empty string
        if(!Boolean(fen)) return false;

        // Should be a string
        if(typeof fen !== "string") return false;

        // FEN fields
        const fields = fen.split(' ');

        // Should have 6 fields
        if(fields.length !== 6) return false;

        // Each 6 fields shouldn't empty string
        const areAllFildsValid = fields.every(field => Boolean(field));

        if(!areAllFildsValid) return false;

        return fields;
    }

    static isPiecePlacementValid(piecePlacementField: string): (boolean | string[])  {
        // Shouldn't be undefined, null, empty string
        if(!Boolean(piecePlacementField)) return false;

        if(typeof piecePlacementField !== "string") return false;

        const concatenatedRanks = piecePlacementField;
        const ranks = concatenatedRanks.split('/');

        // should have 8 ranks sperated by '/'
        if(ranks.length !== 8) return false;

        // Number of maximum pieces as following
        // R - 2, N - 2, B - 2, Q - 1, K - 1, P - 8
        // r - 2, n - 2, b - 2, q - 1, k - 1, p - 8]
        const piecesCountMap: any = {};

        for(let i=0; i<concatenatedRanks.length; i++) {
            const character = concatenatedRanks[i];

            if(character !== '/') {
                if(piecesCountMap[character] === undefined) {
                    piecesCountMap[character] = 0;
                }

                piecesCountMap[character] += 1;
            }
        }

        // White
        if(piecesCountMap['R'] > 2) {
            return false;
        }

        if(piecesCountMap['N'] > 2) {
            return false;
        }

        if(piecesCountMap['B'] > 2) {
            return false;
        }

        if(piecesCountMap['Q'] > 1) {
            return false;
        }

        if(!Boolean(piecesCountMap['K']) || piecesCountMap['K'] > 1) {
            return false;
        }

        if(piecesCountMap['P'] > 8) {
            return false;
        }


        // Black
        if(piecesCountMap['r'] > 2) {
            return false;
        }

        if(piecesCountMap['n'] > 2) {
            return false;
        }

        if(piecesCountMap['b'] > 2) {
            return false;
        }

        if(piecesCountMap['q'] > 1) {
            return false;
        }

        if(!Boolean(piecesCountMap['k']) || piecesCountMap['k'] > 1) {
            return false;
        }

        if(piecesCountMap['p'] > 8) {
            return false;
        }

        // Validating each ranks
        for(let i=0; i<ranks.length; i++) {
            const rank = ranks[i];
            if(!ChessValidators.isRankValid(rank)) {
                return false;
            }
        }


        return ranks;
    }

    static isRankValid(rank: string): boolean {

        // 1. Each rank shohld only have following characters - r,n,b,q,k,p,R,N,B,Q,K,P,1,2,3,4,5,6,7,8
        const regex = /^[rnbqkpRNBQKP12345678]+$/;

        if(!regex.test(rank)) {
            return false;
        }

        // 2. If empty squares are specified, they should be correct
        const matchedNumbers = rank.match(/[1-8]/g);
        const matchedStrings = rank.match(/[rnbqkpRNBQKP]/g);

        if(matchedNumbers) {
            const numberOfEmptySquares = matchedNumbers.reduce((prev, cur) => prev + Number(cur), 0);

            if(numberOfEmptySquares > 0) {
                if(matchedStrings) {
                    if(matchedStrings.length + numberOfEmptySquares !== 8) return false;
                } else {
                    if(numberOfEmptySquares !== 8) return false;
                }
            }
        } else {
            if(rank.length !== 8) {
                return false;
            }
        }

        return true;
    }

    static isActiveColorValid(activeColor: string): boolean {
        // should be either 'w' or 'b'
        if(activeColor !== 'w' && activeColor !== 'b') {
            return false;
        }

        return true;
    }

    static isCastlingAvailabilityValid(castlingAvailability: string): boolean {
        // It should only contain following characters - K,Q,k,q,-
        const castlingAvailabilityRegex = /^[KQkq\-]+$/;
        if(!castlingAvailabilityRegex.test(castlingAvailability)) {
            return false;
        }

        // Maximum possible length is 4 and Minimum is 1
        if(castlingAvailability.length > 4 || castlingAvailability.length === 0) {
            return false;
        }

        // If '-' is present, the string should not contain any other characters
        if(castlingAvailability.includes("-") && castlingAvailability.length > 1) {
            return false;
        }

        // Characters K,Q,k,q shouldn't repeat
        if(!castlingAvailability.includes("-")) {
            const castlingSideCountMap: any = {};

            for(let i=0; i<castlingAvailability.length; i++) {
                const character = castlingAvailability[i];

                if(castlingSideCountMap[character] === undefined && castlingSideCountMap[character] !== 1) {
                    castlingSideCountMap[character] = 1;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    static isEnPassantTargetValid(enPassantTarget: string, activeColor: string): boolean {
        if(!enPassantTarget || typeof enPassantTarget !== "string" || enPassantTarget.length === 0) {
            return false;
        }

        // If '-' is present, the string should not contain any other characters
        if(enPassantTarget.includes("-")) {
            if(enPassantTarget.length > 1) {
                return false;
            }
        } else {
            // If there is actual en passant target, it should be either 3th rank for white and 6th rank for black
            const thirdRank = ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'];
            const sixthRank = ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'];

            if(activeColor === 'w' && (!sixthRank.includes(enPassantTarget))) {
                return false;
            }

            if(activeColor === 'b' && (!thirdRank.includes(enPassantTarget))) {
                return false;
            }
        }

        return true;
    }
}