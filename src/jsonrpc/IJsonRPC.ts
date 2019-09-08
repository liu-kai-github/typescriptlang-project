interface IJsonRPCRequest {
    jsonrpc: '2.0';
    method: string;
    params?: object;
    id?: string | number | null;
}

interface IResponseError {
    code: number;
    message: string;
    data?: any;
}

interface IJsonRPCResponse {
    jsonrpc: '2.0';
    result?: any;
    error?: IResponseError;
    id: string | number | null;
}

export {
    IJsonRPCRequest,
    IJsonRPCResponse,
};

