<template>
  <div :class="theme" class="flex flex-col justify-center items-center py-100px px-100px">
    <div class="flex flex-col justify-center gap-2">
      <div class="flex justify-center gap-160px">
        <div>
          <div>
            <img v-if="theme === 'dark'" src="~/public/images/logo/logo_light.png" alt="SugarClub" />
            <img v-else src="~/public/images/logo/logo_black.png" alt="SugarClub" />
          </div>

          <div class="flex items-center gap-4 pt-5">
            <h3 class="text-xl">Social</h3>
            <a href="#" class="h-8"><img :src="`/images/icons/media/facebook_${theme}.svg`" alt="Facebook" class="h-full" /></a>
            <a href="#" class="h-8"><img :src="`/images/icons/media/instagram_${theme}.svg`" alt="Instagram" class="h-full" /></a>
          </div>
        </div>

        <div class="flex flex-col gap-5 mb-7">
          <div class="flex gap-15">
            <div class="flex flex-col gap-3">
              <h3 class="text-xl">Phone</h3>
              <p class="text-sm">1234.456.7890</p>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="text-xl">Email</h3>
              <p class="text-sm">service@sugarclub.com</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-y-3 gap-x-22">
            <p class="text-s">常見問題</p>
            <p class="text-s">聯繫客服</p>
            <p class="text-s">關於我們</p>
            <p class="text-s">服務條款</p>
            <p class="text-s">隱私政策</p>
            <p class="text-s">建立帳號</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <p class="mb-2">© 2025 SugarClub.com.tw by .</p>
        <p>免責聲明：SugarClub 反對任何違反法律之行為，違反者將停止帳號使用權利。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    theme?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'dark',
  });
</script>

<style scoped>
  .dark {
    background-color: #000;
    color: #fff;
  }

  .light {
    background-color: #dbdbdb;
    color: #2f2f2f;
  }
</style>
