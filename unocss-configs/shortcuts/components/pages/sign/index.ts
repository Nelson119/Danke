// unocss-configs/shortcuts/components/pages/sign.ts
export const signShortcuts = {
  // 整體容器
  'sign-container': 'flex h-screen',

  // 左側背景圖片
  'sign-bg':
    'bg-[url("~/public/images/sign/signInBg.png")] bg-cover bg-center h-screen w-[calc(1172_/_1920_*_100vw)] [&.sign-up]:bg-[url(~/public/images/sign/signUpBg.png)]  hidden md:block',

  // 右側表單容器
  'sign-form-container': `md:min-w-748px sm:min-w-screen xs:w-screen h-full bg-background py-60px sm:py-20px xs:py-20px flex flex-col md:max-h-[calc(100%_-_120px)]`,
  'sign-form-placeholder': `
    flex-grow relative
  `,
  'sign-form-placeholder-fix': `
    flex justify-center absolute overflow-auto w-full h-full
    xs:overflow-hidden
  `,
  'sign-form-containe-inner': `items-center justify-center flex flex-col
      md:w-492px sm:w-[calc(492_/_748_*_100vw)] xs:w-90vw
      gap-32px [&_.el-form]:gap-32px sm:[&_.el-form]:gap-32px xs:[&_.el-form]:gap-20px
      [&_.el-form]:flex [&_.el-form]:flex-col [&_.el-form]:w-full [&_.el-form]:self-stretch [&_.el-form]:items-center`,

  // 標題
  'sign-title': 'm-0 text-center [&_img]:w-164px [&_img]:h-auto',
  'sign-hr': `text-gray-100 w-full block relative flex justify-center after:relative after:px-10px after:bg-background after:content-[attr(rel-content)] before:bg-gray-100 before:h-1px before:content-[''] before:w-full before:top-50% before:absolute before:w-full`,

  // 登入/註冊切換 Tabs
  'sign-tabs': `
  w-460px h-32px flex items-stretch justify-stretch items-center [&>*]:flex-grow [&>*]:h-full text-lg sm:text-sm [&>*]:no-underline [&>*]:flex [&>*]:text-lightgray [&>*]:items-center [&>*]:justify-center relative after:content-[''] after:absolute after:bottom-[-4px] after:w-50% after:h-4px after:bg-primary after:rounded-10px after:left-0 after:duration-300 before:content-[''] before:absolute before:bottom-[-4px] before:w-100% before:h-4px before:bg-lightgray before:rounded-10px justify-self-center
  `,

  // Google 按鈕
  'sign-google-btn': 'bg-[#333] text-white rounded-lg lg:w-[300px] md:w-[300px] w-full h-[40px] flex items-center justify-center',
  'sign-google-icon-wrapper': 'mr-2',
  'sign-google-icon': 'w-[20px] h-[20px]',

  // 驗證碼圖
  'sign-captcha-container': 'flex items-center w-full [&_.el-input]:flex-grow gap-16px [&_.el-button]:p-0',
  'captcha-image': ` min-w-125px rounded-16px overflow-hidden lg:h-form-item-lg md:h-form-item-md sm:h-form-item-sm justify-center flex [&_img]:object-cover [&_img]:h-full`,
};
