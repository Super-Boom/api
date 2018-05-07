// const qhController = require('../core/qhController');

const Controller = require("egg").Controller;
class RoleController extends Controller {
  /* constructor(ctx){
    super(ctx)
    this.ctx = ctx; 
  } */
  async fetch_role(){
    const ctx = this.ctx;
    ctx.body = `${JSON.stringify(ctx.query)}`;
    let id =  JSON.parse(ctx.body).id;
    const roleInfo = await ctx.service.sysRoleModel.fetch(id);
    ctx.body = roleInfo;
  }
  async add_role(){
    const ctx = this.ctx;
    ctx.body = ctx.request.body;
    let reqData = ctx.body;
    let res = await ctx.service.sysRoleModel.add(reqData);
    ctx.body = res;
    /* const reqData = await ctx.curl('http://localhost:7001/add_role',{
      method: 'POST',
      dataType:'json',
      contentType:'json',
      data:{
        role_name:'xzg'
      }
    })
    let req = reqData.data;
    let res = await ctx.service.sysRoleModel.addRole(req);
    console.log(res); */
  }
}
module.exports = RoleController;