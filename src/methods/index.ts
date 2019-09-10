/*! *************************************************************************

************************************************************************* */
import Calculator from './Calculator';
import User from './User';

const methods: any = {
    calculator: new Calculator(),
    user: new User(),
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
