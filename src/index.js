const Koa = require('koa');
const koaBody = require('koa-bodyparser');

const { initRouter } = require('./routing');
const db = require('./models');

const PORT = 5000;

const app = new Koa();

app.context.db = db;
app.use(koaBody());

const router = initRouter(app.context);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);
console.log('Application started on port:', PORT); // eslint-disable-line no-console
