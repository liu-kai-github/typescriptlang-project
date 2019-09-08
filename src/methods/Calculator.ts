interface ICalculator {
    add: (params: { x: number, y: number }) => Promise<number>;
    subtract: (params: { x: number, y: number }) => Promise<number>;
}

class Calculator implements ICalculator {
    public async add(params: { x: number, y: number }) {
        const {x, y} = params;
        return x + y;
    }

    public async subtract(params: { x: number, y: number }) {
        const {x, y} = params;
        return x - y;
    }
}

export default Calculator;
