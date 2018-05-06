module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/role/:id', controller.sysRole.fetch_role);
}
