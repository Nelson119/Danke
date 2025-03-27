<template></template>

<script setup>
  const router = useRouter();

  const signIn = () => {
    router.push('/sign/in');
  };
  const signUp = () => {
    router.push('/sign/up');
  };

  // definePageMeta({
  //   layout: 'default',
  // });
</script>
