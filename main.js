import { MyButton } from './src/components/MyButton/index.js';
import { version } from './package.json';

import './src/components/MyButton/index.scss';

const components = [MyButton];

// vue3中通过use注册组件
const install = function (app) {
  components.forEach((component) => {
    //这里可以使用use，也可以使用component。
    // use内部调用了install方法，定义的所有component组件都要实现下这个install方法
    app.use(component);
    // app.component是通过name和组件直接定义的全局组件
    // app.component(component.name, component);
  });
};

export { MyButton, install };
export default { MyButton, version, install };
