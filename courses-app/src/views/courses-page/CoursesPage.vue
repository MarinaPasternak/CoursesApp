<template>
  <!--  -->
  <div>
    <h1>COURSES</h1>
    <div v-if="areCoursesLoading" class="loading-container">
      <b-spinner class="ml-3" type="border" medium variant="dark" />
      <h3>Loading....</h3>
    </div>
    <div class="error-message-container" v-else-if="errorMessage">
      Oops, smth went wrong... {{ errorMessage }}
    </div>
    <div class="d-flex courses-container" v-else>
      <course-card
        v-for="course in allCourses"
        :course="course"
        :key="course.id"
      ></course-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CourseCard from "./components/CourseCard.vue";
export default {
  components: {
    CourseCard,
  },
  computed: {
    ...mapState({
      allCourses: (state) => state.courses.courses,
      areCoursesLoading: (state) => state.courses.coursesLoading,
      errorMessage: (state) => state.courses.coursesError,
    }),
  },
  methods: mapActions(["fetchCourses"]),
  created() {
    this.fetchCourses();
  },
};
</script>

<style scoped>
.courses-container,
.loading-container,
.error-message-container {
  margin-top: 3rem;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-container h3 {
  margin-left: 20px;
  margin-bottom: 0;
}

.courses-container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
