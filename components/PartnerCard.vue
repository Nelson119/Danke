<template>
  <div class="partner-card">
    <div class="card-container">
      <img :src="partner.image" :alt="partner.name" class="profile-image" />
      <div class="vip-badge">VIP</div>
      <div class="info-container">
        <div class="name-container">
          <h3>{{ partner.name }}</h3>
          <img v-if="partner.isVerified" src="/images/icons/verified_red.svg" alt="verified" class="verified-icon" />
        </div>
        <p class="location">{{ partner.age }}，{{ partner.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Partner {
    image: string;
    name: string;
    age: number;
    location: string;
    isVerified: boolean;
  }

  defineProps<{
    partner: Partner;
  }>();
</script>

<style scoped>
  .partner-card {
    width: 240px;
    overflow: hidden;
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  }

  .card-container {
    position: relative;
  }

  .profile-image {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .vip-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #ff6b6b;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }

  .info-container {
    padding: 12px;
  }

  .name-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .name-container h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .verified-icon {
    width: 16px;
    height: 16px;
  }

  .location {
    margin: 4px 0 0;
    color: #666;
    font-size: 14px;
  }
</style>
