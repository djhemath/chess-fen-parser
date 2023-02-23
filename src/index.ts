import { FENParserConfig } from "./shared/types";

export class FENParser {
    private fen: string = "";
    private config: FENParserConfig = null;

    constructor(fen: string, config: FENParserConfig) {
        this.fen = fen;
        this.config = config;
    }

    public isValid(): boolean {
        // Do validations
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