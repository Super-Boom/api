const qhController = require('../core/qhController');

const Controller = require("egg").Controller;
class RoleController extends qhController {
  constructor(){
    super()
  }
  async fetch_role(){
    const { ctx } = this;
    ctx.body = 'xzg';
    const req = ctx.request;

    console.log('req',req);
  }
}
module.exports = RoleController;