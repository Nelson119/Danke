<template>
  <NuxtLayout>
    <div></div>
  </NuxtLayout>
</template>

<script setup>
  definePageMeta({
    layout: 'default',
  });
  // 設定 SEO 和社群分享的 meta 標籤
  useMeta({
    title: '標題',
    description: '',
    url: '',
    image: '',
    imageAlt: '',
  });

  const router = useRouter();

  const signIn = () => {
    router.push('/sign/in');
  };
  const signUp = () => {
    router.push('/sign/up');
  };

  onMounted(() => {});
</script>
