
class Calculator{
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
