import { FENParserConfig } from "./shared/types";
import { ChessValidators } from "./shared/chess-validators";
import { DataValidator } from "./shared/data-validator";

export class FENParser {
    private fen: string = "";
    private config: FENParserConfig = null;

    constructor(fen: string, config: FENParserConfig) {
        this.fen = fen;
        this.config = config;
    }

    public isValid(): boolean {
        // Do validations
        const fields = ChessValidators.isFenStringValid(this.fen);

        if(! DataValidator.isNonEmptyArray(fields)) {
            return false;
        }

        const fieldsArray: string[] = fields as string[];

        const ranks = ChessValidators.isPiecePlacementValid(fieldsArray[0]);

        if(! DataValidator.isNonEmptyArray(ranks)) {
            return false;
        }

        return true;
    }

    public parse() {
        if(!this.isValid()) {
            return false;
        } else {
            // Do stuff
        }
    }
}