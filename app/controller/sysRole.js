// const qhController = require('../core/qhController');

const Controller = require("egg").Controller;
class RoleController extends Controller {
  
  async fetch_role(){
    const ctx = this.ctx;
    const id = ctx.params.id;
    const roleInfo = await ctx.service.sysRoleModel.fetch(id);
    console.log('roleInfo',roleInfo);
    ctx.body = roleInfo;
  }
}
module.exports = RoleController;