<template>
  <div class="error-message-container">
    <h2>Oops, somthing went wrong...</h2>
    <div class="icons-container">
      <b-icon scale="1.5" icon="emoji-frown"></b-icon>
      <b-icon scale="1.5" icon="emoji-frown"></b-icon>
      <b-icon scale="1.5" icon="emoji-frown"></b-icon>
    </div>
    <h3>{{ errorMessage }}</h3>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ["errorMessage"],
};
</script>

<style scoped>
.error-message-container .icons-container svg {
  margin: 10px;
}
.error-message-container h3 {
  color: rgb(255, 86, 86);
}
</style>
