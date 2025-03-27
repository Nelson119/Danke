<template>
  <div>
    <!-- 頁面頂部導航欄 -->
    <Header />

    <!-- 主要內容區域 -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- 頁面底部 -->
    <Footer theme="light" />
  </div>
</template>

<script setup></script>
