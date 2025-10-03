<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  padding-top: 56px; /* Adjust for fixed navbar */
}

section {
  scroll-margin-top: 56px; /* Adjust for fixed navbar */
}
</style>
