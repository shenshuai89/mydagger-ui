import MyButton from './index.vue';
// 给组件设置install方法，这样在main中才可以使用use，或者在引入组件时，可以使用use调用组件
MyButton.install = function (app) {
  app.component(MyButton.name, MyButton);
};
export { MyButton };
