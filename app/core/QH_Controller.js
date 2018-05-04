const Controller = require('egg').Controller;

module.exports = class QH_Controller extends Controller {
  constructor(){}

  async output(data,addition_arr){
    const { ctx, service } = this;
    const res = [{data:data}]
    const res_data = [...res, ...addition_arr]
    return res_data;
  }
}