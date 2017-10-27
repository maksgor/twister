const Koa = require('koa');
const koaBody = require('koa-bodyparser');

const { initRouter } = require('./routing');
const { initDb } = require('./database');

const app = new Koa();
const PORT = 5000;

app.context.db = initDb();
app.use(koaBody());
const router = initRouter(app.context);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
