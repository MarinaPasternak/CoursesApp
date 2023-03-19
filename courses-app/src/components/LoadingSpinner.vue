<template>
  <div class="loading-container">
    <b-spinner class="ml-3" type="border" medium variant="dark" />
    <h3>Loading....</h3>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-container h3 {
  margin-left: 20px;
  margin-bottom: 0;
}
</style>
