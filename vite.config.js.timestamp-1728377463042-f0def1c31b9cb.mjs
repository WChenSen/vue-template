// vite.config.js
import vue from "file:///D:/Desktop/vue-template/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_vue@3.5.11/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Desktop/vue-template/node_modules/.pnpm/unplugin-auto-import@0.18.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Desktop/vue-template/node_modules/.pnpm/unplugin-vue-components@0.27.4_vue@3.5.11/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/Desktop/vue-template/node_modules/.pnpm/@vant+auto-import-resolver@1.2.1/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
var vite_config_default = {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXHZ1ZS10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFx2dWUtdGVtcGxhdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvdnVlLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ0B2YW50L2F1dG8taW1wb3J0LXJlc29sdmVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoKSxcbiAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXG4gICAgICAgIH0pLFxuICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICAgICAgfSksXG4gICAgXSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsT0FBTyxTQUFTO0FBQzdRLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVE7QUFBQSxFQUNYLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNQLFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM5QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDUCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0w7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
