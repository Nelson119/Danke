// unocss-configs/shortcuts/components.ts
import { signShortcuts } from './components/pages/sign';
import { heroShortcuts } from './components/pages/hero';
import { elOverride } from './components/element-plus-override';

export const componentShortcuts = {
  // 全局字型
  'font-noto': 'font-["Noto_Sans_TC"]',
  'font-Senty': 'font-["SentyCaramel"]',
  // 按鈕樣式
  'primary-btn': `bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-secondary rounded-[31px] px-6 py-4 w-[150px] h-[40px] border-1 border-secondary hover:brightness-90`,
  'secondary-btn':
    'bg-gray text-secondary rounded-[31px] px-6 py-4 w-[150px] h-[40px] md:w-[120px] md:h-[36px] border-1 border-secondary hover:brightness-90',

  icon: 'inline-block h-1.1em w-1.1em bg-contain bg-no-repeat bg-center',
  'icon-account': `
    bg-[url(~/public/images/sign/account.svg)]
  `,
  'icon-eye': `
    bg-[url(~/public/images/sign/eye.svg)]
  `,
  'icon-key': `
    bg-[url(~/public/images/sign/key.svg)]
  `,

  // 巢狀引入 element-plus-override 的 shortcuts
  ...elOverride,

  // 巢狀引入 pages/hero 的 shortcuts
  ...heroShortcuts,

  // 巢狀引入 pages/sign 的 shortcuts
  ...signShortcuts,

  // RWD 相關快捷方式
  'hide-sm': 'hidden sm:block',
  'hide-md': 'hidden md:block',
  'hide-lg': 'hidden lg:block',
  'hide-xl': 'hidden xl:block',

  'show-sm': 'block sm:hidden',
  'show-md': 'block md:hidden',
  'show-lg': 'block lg:hidden',
  'show-xl': 'block xl:hidden',

  'flex-col-sm': 'flex-col sm:flex-row',
  'flex-col-md': 'flex-col md:flex-row',
  'flex-col-lg': 'flex-col lg:flex-row',

  'grid-cols-1-sm': 'grid-cols-1 sm:grid-cols-2',
  'grid-cols-1-md': 'grid-cols-1 md:grid-cols-3',
  'grid-cols-1-lg': 'grid-cols-1 lg:grid-cols-4',
};
