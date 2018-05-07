module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/role', controller.sysRole.fetch_role);
  
  router.post('/add_role',controller.sysRole.add_role)
}
