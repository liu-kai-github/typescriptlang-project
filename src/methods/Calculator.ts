interface IParams {
    add: { x: number, y: number };
    subtract: { x: number, y: number };
}

interface IReturn {
    add: number;
    subtract: number;
}

interface ICalculator {
    add: (params: IParams['add']) => Promise<IReturn['add']>;
    subtract: (params: IParams['subtract']) => Promise<IReturn['subtract']>;
}

class Calculator implements ICalculator {
    public async add(params: IParams['add']): Promise<IReturn['add']> {
        const {x, y} = params;
        return x + y;
    }

    public async subtract(params: IParams['subtract']): Promise<IReturn['subtract']> {
        const {x, y} = params;
        return x - y;
    }
}

export default Calculator;
