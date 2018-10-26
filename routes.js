var koaRouter = require('koa-router');
const router = new koaRouter();
var db = require('./models/index')
router.get('/hello', async(ctx) => {
  ctx.body = "hello world again"
})
const policies = require('./controller/policies.controller.js');
// policies routes
router.get('/policies', async(ctx) => {
   var policies = await db.policy.findAll();
   ctx.body = policies
})
router.post('/policy', async(ctx) => {
  user  = db.policy.create({
    name: ctx.request.body.name,
    document_type: ctx.request.body.document_type,
    author_id: ctx.request.body.author_id,
    is_active: ctx.request.body.is_active,
    createdAt: new Date(),
    updatedAt: new Date(),
    values: ctx.request.body.data
  })
  ctx.body = "Successfully created policy"
})
module.exports = router;