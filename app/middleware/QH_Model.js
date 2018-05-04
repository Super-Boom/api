const Service = require('egg').Service;
module.exports = (options, app) => {
  class QH_Model extends Service {
    async add(ctx, next) {
      // ctx为前段传递过来的值
      let body = ctx.body;
      // 如果不存在则返回
      if (!body) return
      console.log('body', body);
      await next()
    }
  }
}
