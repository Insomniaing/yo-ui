import _CustomColumn from "./src/custom-column.vue";

export function withInstall(comp) {
  comp.install = function (app) {
    const { name } = comp;
    app.component(name, comp); //注册全局组件
  };
  return comp;
}
const CustomColumn = withInstall(_CustomColumn);

export default CustomColumn;
