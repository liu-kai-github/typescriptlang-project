/*! *************************************************************************

************************************************************************* */
import Calculator from './Calculator';

const methods: any = {
    calculator: new Calculator(),
};

class Dispatcher {
    private target: string;
    private method: string;
    private params: object;

    constructor(method: string, params: object) {
        [this.target, this.method] = method.split('_');
        this.params = params;
    }

    public async getResult(): Promise<any> {
        if (!methods.hasOwnProperty(this.target) || methods[this.target].hasOwnProperty(this.method)) {
            return ['-32601', null];
        }

        return [null, await methods[this.target][this.method](this.params)];
    }
}

export default Dispatcher;
