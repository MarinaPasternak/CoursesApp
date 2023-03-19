<template>
  <div>
    <div class="not-found">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/courses/">
        <b-button class="see-course-button" size="lg">See All Course</b-button>
      </router-link>
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

.not-found .see-course-button {
  background-color: white;
  border-color: #17a2b8;
  color: #17a2b8;
}

.not-found .see-course-button:hover {
  background-color: #17a2b8;
  color: white;
}
</style>
