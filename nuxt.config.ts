import { defineNuxtConfig } from 'nuxt/config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import fs from 'fs';

import { storeImports } from './stores';

export default defineNuxtConfig({
  // false: 禁用伺服器端渲染，生成純靜態網站
  ssr: process.env.IS_GITHUB_PAGES === 'true' ? false : true,
  app: {
    // 動態設置 baseURL
    baseURL:
      process.env.IS_GITHUB_PAGES === 'true'
        ? `/${process.env.REPO_NAME || 'sugar-club-frontend'}/` // GitHub Pages 需要倉庫名稱作為路徑
        : '/', // 本地或其他環境使用根路徑
  },
  modules: ['@nuxt/devtools', '@pinia/nuxt', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/test-utils', '@unocss/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '~': process.cwd(),
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            from: 'vue',
            imports: ['ref', 'reactive', 'computed', 'watch', 'onMounted', 'onUnmounted', 'defineComponent', 'provide', 'inject'],
          },
          {
            from: '#imports',
            imports: ['definePageMeta'],
          },
          {
            from: '#app', // 添加 #app 模組的自動導入
            imports: ['useRuntimeConfig', 'useRouter', 'useRoute', 'useNuxtApp'], // 明確指定 useRuntimeConfig
          },
          {
            from: 'pinia',
            imports: ['defineStore', 'acceptHMRUpdate'],
          },
          {
            from: '~/utils', // 從 ~/utils 導入（~ 是專案根目錄）
            imports: ['resolveUrl'], // 自動導入 resolveUrl 函數
          },
          {
            from: 'element-plus', // 從 ~/utils 導入（~ 是專案根目錄）
            imports: ['ElMessage'], // 自動導入 resolveUrl 函數
          },
          // 新增 useMeta 的自動引入
          {
            from: '~/hooks/useMeta',
            imports: ['useMeta'],
          },
          ...storeImports,
        ],
        dts: 'types/auto-imports.d.ts', // 指定 auto-imports.d.ts 生成到 ./types 目錄
        vueTemplate: true,
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: false, // 禁止自動載入 Element Plus 樣式
          }),
        ],
        dts: 'types/components.d.ts', // 指定 components.d.ts 生成到 ./types 目錄
      }),
      {
        name: 'unocss-hmr',

        handleHotUpdate({ file, server }) {
          if (file.includes('unocss-configs/')) {
            // 取得 uno.config.ts 的完整路徑
            const unoConfigPath = server.config.root + '/uno.config.ts';
            // 更新檔案的修改時間，強制觸發 Vite 重新載入
            const now = new Date();
            fs.utimesSync(unoConfigPath, now, now);
          }
        },
      },
    ],
    server: {
      watch: {
        // 監聽 UnoCSS 設定檔變更
        include: ['unocss-configs/**/*.ts'],
      } as any,
    },
    optimizeDeps: {
      include: ['element-plus'], // 確保 Vite 預編譯 element-plus
    },
    resolve: {
      dedupe: ['element-plus'], // 避免模組重複解析
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  hooks: {
    //   'pages:extend'(pages) {
    //     console.log(
    //       'Generated Routes:',
    //       pages.map((page) => page.path)
    //     );
    //   },// 添加 app:error 鉤子來處理 404 錯誤
  },
  plugins: [{ src: '~/plugins/pinia-persist.client.ts', mode: 'client' }],
});
