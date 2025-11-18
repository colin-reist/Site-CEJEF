<template>
  <UApp>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<script setup>
const { $directus } = useNuxtApp();
console.log($directus);
</script>
