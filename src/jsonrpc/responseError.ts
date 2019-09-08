/*! *************************************************************************************

-32000 to -32099	Server error	Reserved for implementation-defined server-errors.
************************************************************************************** */

const responseError: any = {
    '-32700': {
        code: -32700,
        message: 'Parse error',
        data: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
    },
    '-32600': {
        code: -32600,
        message: 'Invalid Request',
        data: 'The JSON sent is not a valid Request object.'
    },
    '-32601': {
        code: -32601,
        message: 'Method not found',
        data: 'The method does not exist / is not available.'
    },
    '-32602': {
        code: -32602,
        message: 'Invalid params',
        data: 'Invalid method parameter(s).'
    },
    '-32603': {
        code: -32603,
        message: 'Internal JSON-RPC error.',
        data: 'Invalid method parameter(s).'
    },
};

export default responseError;
