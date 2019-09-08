import {Context} from 'koa';
import JsonRPC from './JsonRPC';
import {IJsonRPCRequest, IJsonRPCResponse} from './IJsonRPC';

/**
 * 根据 jsonrpc 处理函数，根据上下文数据，返回对应的响应
 * @param ctx
 */
async function jsonrpcHandler(ctx: Context): Promise<IJsonRPCResponse | IJsonRPCResponse[]> {
    const requestBody: IJsonRPCRequest | IJsonRPCRequest[] = ctx.request.body;
    if (!Array.isArray(requestBody)) {
        const jsonrpc: JsonRPC = new JsonRPC(requestBody);
        return await jsonrpc.getResponseBody();
    }

    // TODO 如果是批量请求
    return [];
}

export default jsonrpcHandler;
