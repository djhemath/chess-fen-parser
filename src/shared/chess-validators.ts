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
}