import _Button from "./src/button.vue";

export function withInstall(comp) {
  comp.install = function (app) {
    const { name } = comp;
    app.component(name, comp); //注册全局组件
  };
  return comp;
}
const Button = withInstall(_Button);

export default Button;
