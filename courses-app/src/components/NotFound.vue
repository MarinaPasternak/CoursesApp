<template>
  <div>
    <div class="not-found">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  color: #444;
}
</style>
