const QH_Controller = require('../core/QH_controller');

class Sys_role extends QH_Controller {
  constructor(){
    super()
  }

  async fetch_role(){
    const {ctx,service} = this;
    super.output();
  }
}