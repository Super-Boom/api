const Service = require('egg').Service;
class SysRoleModel extends Service {
  constructor(ctx) {
    super(ctx)
  }
  async fetch(id) {
    const sys_role = this.app.mysql.get('sys');
    let role  = await sys_role.query('select * from sys_role');
    console.log('role', role);
    return {role};
  }
}
module.exports = SysRoleModel