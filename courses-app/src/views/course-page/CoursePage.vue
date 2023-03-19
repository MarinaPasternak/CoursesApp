<template>
  <div>
    <div>
      <router-link :to="'/courses/'">
        <b-button class="ribbon-link" size="lg">See All Courses</b-button>
      </router-link>
      <h1 class="course-title">LESSONS TITLE</h1>
      <div v-if="isCourseLoading" class="loading-container">
        <b-spinner class="ml-3" type="border" medium variant="dark" />
        <h3>Loading....</h3>
      </div>
      <div class="error-message-container" v-else-if="errorMessage">
        Oops, smth went wrong... {{ errorMessage }}
      </div>
      <div v-else>
        {{ courseData.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CoursePage",
  props: ["courseId"],
  computed: {
    ...mapState({
      courseData: (state) => state.courseData.course,
      isCourseLoading: (state) => state.courseData.courseLoading,
      errorMessage: (state) => state.courseData.courseError,
    }),
  },
  methods: {
    ...mapActions(["fetchCourseDataById"]),
  },
  mounted() {
    console.log(this.$store.state);
    this.fetchCourseDataById(this.courseId);
  },
};
</script>

<style scoped>
.course-title {
  margin-top: 3rem;
}

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
.ribbon-link {
  width: 200px;
  position: fixed;
  top: 1rem;
  left: -18px;
  padding: 0 15px;
  line-height: 1.875em;
  color: white;
  font-weight: 800;
  border: none;
  background: #17a2b8;
  transition: all 0.2s ease-out;
}

.ribbon-link:hover {
  background-color: #20aabf;
  padding-left: 25px;
  transform: translateX(12px);
}
</style>
