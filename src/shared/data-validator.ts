export class DataValidator {
    public static isNonEmptyArray(data: any) {
        return Boolean(data && Array.isArray(data) && data.length > 0);
    }
}