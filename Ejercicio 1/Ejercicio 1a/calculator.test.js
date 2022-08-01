const calculator = require("./calculator");

describe("calculator", () => {
    test('Operacion suma', () => {
        const expected = 152;
        const result = calculator("88+64");
        expect(expected).toBe(result);
    });
    test('Operacion resta', () => {
        const expected = 22;
        const result = calculator("105-83");
        expect(expected).toBe(result);
    });
    test('Operacion multiplicación', () => {
        const expected = 72;
        const result = calculator("8*9");
        expect(expected).toBe(result);
    });
    test('Operacion división', () => {
        const expected = 15;
        const result = calculator("195/13");
        expect(expected).toBe(result);
    });
    test('Operacion potencia', () => {
        const expected = 8;
        const result = calculator("2^3");
        expect(expected).toBe(result);
    });
    test('Operacion división', () => {
        const expected = 5;
        const result = calculator("V25");
        expect(expected).toBe(result);
    });
    test('Operaciones multiples', () => {
        const expected = 2018;
        const result = calculator("23-14+123/3*49");
        expect(expected).toBe(result);
    });
    test('Maximos caracteres 30', () => {
        const expected = "La cadena ingresada es mayor a 30";
        const result = calculator("23-14+123/3*49+55*25-63/45-35-96");
        expect(expected).toBe(result);
    });
})