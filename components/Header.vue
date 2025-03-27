<template>
  <div class="header border-b-8px border-b-solid border-b-color-#E8615D rounded-r-4 rounded-l-4">
    <div class="header-left">
      <!-- Logo -->
      <img src="~/public/images/logo/logo_black_bold.png" alt="SugarClub Logo" class="logo" />

      <!-- 主要導航選單 -->
      <nav class="main-nav">
        <ul class="nav-list">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item px-6" :class="[active == index ? 'active' : '']" @click="active = index">
            <a href="#">
              <template v-if="item.isClub">
                <img width="84px" height="25px" src="~/public/images/logo/club_black.png" alt="Club" />
              </template>
              <template v-else>
                {{ item.text }}
              </template>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="header-right">
      <!-- 搜尋區域 -->
      <div class="search-group">
        <div class="search-item">
          <select class="search-select">
            <option value="">區域</option>
          </select>
        </div>
        <div class="search-item">
          <select class="search-select">
            <option value="">年齡</option>
          </select>
        </div>
        <div class="search-item">
          <input type="text" class="search-input" placeholder="進階篩選" />
        </div>
      </div>

      <!-- 登出按鈕 -->
      <ElButton class="logout-btn" @click="auth.logout()">登出</ElButton>
    </div>
  </div>
</template>

<script setup>
  const auth = useAuthStore();
  const active = ref(false);
  const navItems = [
    { id: 0, text: '找尋', isActive: true, isClub: false },
    { id: 1, text: '訊息', isActive: false, isClub: false },
    { id: 2, text: '動態牆', isActive: false, isClub: false },
    { id: 3, text: '個人資訊', isActive: false, isClub: false },
    { id: 5, isClub: true },
  ];
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: white;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .logo {
    height: 25px;
  }

  .nav-list {
    display: flex;
    margin: 0;
    padding: 0 24px;
    list-style: none;
  }

  .nav-item {
    position: relative;
    height: 55px;
    font-weight: 700;
    white-space: nowrap;

    a {
      color: #2f2f2f;
      line-height: 55px;
      text-decoration: none;
    }
  }

  .nav-item.active {
    padding-left: 52px;

    a {
      color: #ff6b6b;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 44px;
      height: 44px;
      transform: translateY(-50%);
      background-image: url('~/public/images/icons/header_active.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .search-group {
    display: flex;
    gap: 1rem;
  }

  .search-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .search-label {
    color: #666;
  }

  .search-select,
  .search-input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f5f5f5;
  }

  .search-input {
    position: relative;
    padding-right: 2rem;
  }

  .search-icon {
    position: absolute;
    right: 0.5rem;
  }

  .logout-btn {
    width: 150px;
    height: 40px;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: white;
    line-height: 40px;
    cursor: pointer;
  }

  .logout-btn:hover {
    background-color: #444;
  }
</style>
