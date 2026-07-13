export function required(value: string): boolean {

    return value.trim().length > 0;

}

export function minLength(value: string, min: number): boolean {

    return value.trim().length >= min;

}

export function maxLength(value: string, max: number): boolean {

    return value.trim().length <= max;

}