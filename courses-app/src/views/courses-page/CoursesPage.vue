<template>
  <div>
    <div>
      <h1>COURSES</h1>
      <div>{{ allCourses }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      allCourses: (state) => state.courses.courses,
    }),
  },
  methods: mapActions(["fetchCourses"]),
  mounted() {
    this.fetchCourses();
  },
};
</script>

<style scoped></style>
