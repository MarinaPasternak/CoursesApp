<template>
  <div>
    <div>
      <router-link to="/courses/">
        <b-button class="ribbon-link" size="lg">See All Courses</b-button>
      </router-link>
      <h1 class="course-title">LESSONS TITLE</h1>
      <div v-if="isCourseLoading">
        <loading-spinner></loading-spinner>
      </div>
      <div v-else-if="errorMessage">
        <error-message :errorMessage="errorMessage"></error-message>
      </div>
      <div v-else>
        {{ courseData.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "CoursePage",
  props: ["courseId"],
  components: {
    ErrorMessage,
    LoadingSpinner,
  },
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
