/* const Service = require('egg').Service;
class Sys_role_model extends Service{
  constructor(){
    super();
    const db = app.mysql.get('meta');
    console.log('db',db);
  }
} */

const QH_Model = require('../core/QH_Model')

class Sys_role_model extends QH_Model{
  constructor(){
    super();
    const db = app.mysql.get('meta');
    console.log('db',db);
  }
}