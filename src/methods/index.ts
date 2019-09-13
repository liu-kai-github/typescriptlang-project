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

    public async getResult(): Promise<[number | null, any?]> {
        if (!methods.hasOwnProperty(this.target)) {
            return [-32601];
        }

        try {
            const result = await methods[this.target][this.method](this.params);
            return [null, result];
        } catch (e) {
            if (Number.isInteger(e)) {
                return [e];
            }
            if (e instanceof TypeError) {
                return [-32601];
            }
            console.error(e);
            return [-32603];
        }
    }
}

export default Dispatcher;
