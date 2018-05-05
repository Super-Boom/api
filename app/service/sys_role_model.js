/* const Service = require('egg').Service;
class Sys_role_model extends Service{
  constructor(){
    super();
    const db = app.mysql.get('meta');
    console.log('db',db);
  }
} */

const qhModel = require('../core/qhModel')

class Sys_role_model extends qhModel{
  constructor(){
    super();
    const db = app.mysql.get('meta');
    console.log('db',db);
  }
}