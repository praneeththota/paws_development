var koaRouter = require('koa-router');
const router = new koaRouter();
var db = require('./models/index')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/paws_development');
router.get('/hello', async(ctx) => {
  ctx.body = "hello world again"
})
// policies routes
router.get("/", async ctx => {
  ctx.body = {
    data: "Sending some JSON"
  };
});

router.get('/policies', async(ctx) => {
   var policies = await db.policy.findAll();
   ctx.body = policies
})
router.post('/user_create', async(ctx) => {
  db.User.create({
    firstName: ctx.request.body.firstName
  })
  ctx.body = "Successfully create user"
})

router.get('/settings', async(ctx) => {
  var settings =  await db.settings.findAll()
  ctx.body = "hello settings"
})
router.get('/policy/:id', async(ctx) => {
  const id = ctx.params.id
  if(!isNaN(ctx.params.id)) {
    console.log("query on id")
    return ctx.body = await db.policy.findById(id)
  }
  ctx.body = "hello world"
})
router.put('/update_policy', async(ctx) =>{
  policy = await db.policy.findById(1)
  policy_update = await policy.update({name: "helllo world again"},{user_id: 1})
  ctx.body = policy_update
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
  },{
  user_id: 1
})
  ctx.body = "Successfully created policy"
})
router.get('/revisions', async(ctx) => {
  rev = await sequelize.query('select * from "Revisions"')
  ctx.body = JSON.parse(JSON.stringify(rev));
})
module.exports = router;