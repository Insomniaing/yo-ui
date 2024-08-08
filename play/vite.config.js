import { fileURLToPath, URL } from "node:url";
//element-ui 自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //自动导入样式
    // ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()], //自动导入element-plus
      imports: ["vue"], //自动导入vue
    }),
    Components({
      resolvers: [
        IconsResolver({
          // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
          prefix: "icon",
          // 指定collection，即指定为elementplus图标集ep
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver({ importStyle: "sass" }),
      ],
    }),
    // Icons图标自动下载
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
