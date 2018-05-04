exports.keys = 'xzg248369';

exports.mysql = {
  clients: {
    // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
    default:{
      // host
      host: '192.168.2.199',
      // 端口号
      port: '3366',
      // 用户名
      user: 'dev_test',
      // 密码
      password: 'Dt_0408',
      // 数据库名
      database: 'qhdata_system',
    },
    meta: {
      // host
      host: '192.168.2.199',
      // 端口号
      port: '3366',
      // 用户名
      user: 'dev_test',
      // 密码
      password: 'Dt_0408',
      // 数据库名
      database: 'qhdata_system',
    },
    market:{
      // host
      host: '192.168.2.199',
      // 端口号
      port: '3366',
      // 用户名
      user: 'dev_test',
      // 密码
      password: 'Dt_0408',
      // 数据库名
      database: 'qhdata_market',
    }
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
}


/* module.exports = {
  middleware:['QH_Model'],
} */