const Service = require('egg').Service;
class SysRoleModel extends Service {
  constructor(ctx) {
    super(ctx)
  }
  async fetch(id) {
    const sys_role = this.app.mysql.get('sys');
    let role = await sys_role.select('sys_role', {
      where: { id: id }
    });
    console.log('role', role);
    return { role };
  }

  async add(data) {
    const sys_role = this.app.mysql.get('sys');
    let res = await sys_role.insert('sys_role', data);
    console.log('res',res);
    return {res}
  }
}
module.exports = SysRoleModel