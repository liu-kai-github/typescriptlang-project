/*! *************************************************************************

************************************************************************* */
import Dispatcher from '../methods';
import {IJsonRPCRequest, IJsonRPCResponse} from './IJsonRPC';
import responseError from './responseError';

interface IJsonRPC {
    getResponseBody: () => object;
}

class JsonRPC implements IJsonRPC {

    private requestBody: any;

    constructor(requestBody: IJsonRPCRequest) {
        this.requestBody = requestBody;
    }

    public async getResponseBody(): Promise<IJsonRPCResponse> {
        // console.log(this.ctx, 'ctx');
        const {method, params, id} = this.requestBody;
        const dispatcher: Dispatcher = new Dispatcher(method, params);
        const [errorCode, result]: [string, string] = await dispatcher.getResult();
        return {
            jsonrpc: '2.0',
            error: errorCode ? responseError[errorCode] : undefined,
            result: result ? result : undefined,
            id,
        };
    }
}

export default JsonRPC;
