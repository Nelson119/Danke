// hooks/useMeta.ts

import { useHead } from 'nuxt/app';

interface MetaOptions {
  title?: string; // 共用標題（用於 <title>、og:title、twitter:title）
  description?: string; // 共用描述（用於 meta description、og:description、twitter:description）
  url?: string; // 頁面 URL（用於 og:url）
  image?: string; // 圖片 URL（用於 og:image、twitter:image）
  imageAlt?: string; // 圖片替代文字（用於 og:image:alt、twitter:image:alt）
  keywords?: string; // SEO 關鍵字
  author?: string; // 作者
  robots?: string; // 搜尋引擎指示（例如 'index, follow'）
  type?: string; // og:type（例如 'website'）
  locale?: string; // og:locale（例如 'zh_TW'）
  siteName?: string; // og:site_name
  twitterCard?: string; // twitter:card（例如 'summary_large_image'）
}

export const useMeta = ({
  title = 'Sugar Club - 認識新朋友的最佳平台',
  description = 'Sugar Club 是一個讓你認識新朋友的平台，立即加入，與來自台北的 Jinney 等會員互動！',
  url = 'https://你的網站/',
  image = 'https://你的網站/images/girl.png',
  imageAlt = 'Jinney 的個人照片',
  keywords = '交友平台, 認識新朋友, 台北交友, Sugar Club, 社交網站',
  author = 'Sugar Club 團隊',
  robots = 'index, follow',
  type = 'website',
  locale = 'zh_TW',
  siteName = 'Sugar Club',
  twitterCard = 'summary_large_image',
}: MetaOptions = {}) => {
  useHead({
    // 基本 meta 標籤
    title,
    meta: [
      // 編碼和語言
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // SEO 相關
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: robots },
      { name: 'author', content: author },
      // Open Graph 標籤（給 Facebook、LinkedIn、WhatsApp 等）
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:locale', content: locale },
      { property: 'og:site_name', content: siteName },
      // Twitter Card 標籤（給 Twitter）
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: imageAlt },
    ],
    // 額外的 HTML 屬性
    htmlAttrs: {
      lang: 'zh-TW', // 設定頁面語言為繁體中文
    },
  });
};
