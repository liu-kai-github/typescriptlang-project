import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
// import JsonRPC from './jsonrpc/JsonRPC';
import jsonrpcHandler from './jsonrpc';

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx: Koa.Context): Promise<void> => {
    ctx.body = await jsonrpcHandler(ctx);
});

app.listen(8080);
