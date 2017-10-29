const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const koaViews = require('koa-views');
const serveStatic = require('koa-static');

const { initRouter } = require('./routing');
const db = require('./models');

const PORT = 5000;

const app = new Koa();

app.context.db = db;
app.use(koaBody());
const router = initRouter(app.context);

app.use(koaViews(path.join(__dirname, '/templates'), { extension: 'pug' }));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serveStatic('static'));

app.listen(PORT);
console.log('Application started on port:', PORT); // eslint-disable-line no-console
