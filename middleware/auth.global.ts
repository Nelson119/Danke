import { navigateTo, useRequestHeaders } from 'nuxt/app';

import { defineNuxtRouteMiddleware } from 'nuxt/app';

const crawlerMap = new Map<string, { pattern: string; use: boolean }>([
  // 社群媒體爬蟲
  ['facebook', { pattern: 'facebookexternalhit', use: true }],
  ['twitter', { pattern: 'twitterbot', use: true }],
  ['linkedin', { pattern: 'linkedinbot', use: true }],
  ['whatsapp', { pattern: 'whatsapp', use: true }],
  ['pinterest', { pattern: 'pinterest', use: true }],
  ['instagram', { pattern: 'instagram', use: true }],
  ['line', { pattern: 'line', use: true }],
  ['telegram', { pattern: 'telegrambot', use: true }],
  ['reddit', { pattern: 'redditbot', use: true }],
  ['discord', { pattern: 'discordbot', use: true }],
  // 搜尋引擎爬蟲
  ['google', { pattern: 'googlebot', use: true }],
  ['bing', { pattern: 'bingbot', use: true }],
  ['yahoo', { pattern: 'yahoobot|slurp', use: true }],
  ['baidu', { pattern: 'baiduspider', use: true }],
  ['duckduckgo', { pattern: 'duckduckbot', use: true }],
  ['yandex', { pattern: 'yandexbot', use: true }],
  // 其他爬蟲
  ['apple', { pattern: 'applebot', use: true }],
  ['slack', { pattern: 'slackbot', use: true }],
  ['general', { pattern: 'bot|crawler|spider', use: true }],
]);

// 篩選出 use: true 的爬蟲，並生成正則表達式
const enabledCrawlers = Array.from(crawlerMap.entries())
  .filter(([_, config]) => config.use)
  .map(([_, config]) => config.pattern);
const crawlerPattern = enabledCrawlers.join('|');
const crawlerRegex = new RegExp(crawlerPattern, 'i');

export default defineNuxtRouteMiddleware((to, from) => {
  // 檢查是不是伺服器端
  const isServer = process.server;
  let userAgent = '';

  // 伺服器端：從 req 拿 User-Agent
  if (isServer) {
    const req = useRequestHeaders();
    userAgent = req['user-agent'] || '';
  } else {
    // 前端：從 navigator 拿 User-Agent
    userAgent = navigator.userAgent;
  }
  // 檢查是不是社群媒體爬蟲
  const isBot = crawlerRegex.test(userAgent);

  // 如果是爬蟲，跳過登入檢查，直接讓它看到首頁
  if (isBot) {
    return;
  }
  // 只在客戶端執行
  if (isServer) {
    return; // 伺服器端不執行
  }
  const auth = useAuthStore(); // 從 Pinia 獲取認證狀態
  const exclusive = ['landing', 'sign-action'];

  // 如果用戶未登入，且目標路由不是登入頁面，則重定向到登入頁面
  if (!auth.isAuthenticated) {
    if (!exclusive.includes(to.name as string)) {
      return navigateTo('/landing');
    } else if (to.name == 'sign-action') {
      return;
    }
  }
  // 如果用戶已登入，但嘗試訪問登入頁面，可以選擇重定向到首頁
  else if (auth.isAuthenticated && to.name === 'sign-action') {
    return navigateTo('/');
  } else {
  }
});
