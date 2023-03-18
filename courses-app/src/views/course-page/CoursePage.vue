<template>
  <div>
    <div>
      <p>{{ courseDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePage",
  props: ["courseId"],
  computed: {
    courseDescription() {
      return `This is the description of course ${this.courseId}`;
    },
  },
};
</script>

<style scoped></style>
