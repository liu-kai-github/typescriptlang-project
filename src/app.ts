import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
// import JsonRPC from './jsonrpc/JsonRPC';
import jsonrpcHandler from './jsonrpc';
// import querysql from './querysql';

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx: Koa.Context): Promise<void> => {
    // const {results} = await querysql('SELECT * FROM user WHERE id = ?', ['5']);
    // console.table(results);
    ctx.body = await jsonrpcHandler(ctx);
});

app.listen(8080);
