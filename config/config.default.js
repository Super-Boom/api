exports.keys = 'xzg248369';

exports.mysql = {
  clients: {
    // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
    sys: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'egg_clone_qhdata_sys',
    },
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
}
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  }
}

/* exports.cors = {
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  credentials: true,
  origin: () => '*'
} */
