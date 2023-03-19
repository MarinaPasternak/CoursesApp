<template>
  <div>
    <h1 class="courses-titlte">COURSES</h1>
    <div v-if="areCoursesLoading">
      <LoadingSpinner />
    </div>
    <div v-else-if="errorMessage">
      <error-message :errorMessage="errorMessage"></error-message>
    </div>
    <div v-else-if="allCourses">
      <b-pagination
        class="custom-pagination"
        :total-rows="totalRows"
        :per-page="perPage"
        v-model="currentPage"
        @input="fetchCourses"
      ></b-pagination>
      <div class="d-flex courses-container">
        <course-card
          v-for="course in filteredCourses"
          :course="course"
          :key="course.id"
        ></course-card>
      </div>
      <b-pagination
        class="custom-pagination"
        :total-rows="totalRows"
        :per-page="perPage"
        v-model="currentPage"
        @input="fetchCourses"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import CourseCard from "./components/CourseCard.vue";
export default {
  components: {
    CourseCard,
    ErrorMessage,
    LoadingSpinner,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
    };
  },
  computed: {
    ...mapState({
      allCourses: (state) => state.courses.courses,
      areCoursesLoading: (state) => state.courses.coursesLoading,
      errorMessage: (state) => state.courses.coursesError,
    }),
    filteredCourses() {
      this.countAllRFilterdRecords();

      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;

      return this.allCourses.slice(startIndex, endIndex);
    },
  },
  methods: {
    ...mapActions(["fetchCourses"]),
    countAllRFilterdRecords() {
      this.totalRows = this.allCourses.length;
    },
  },
  mounted() {
    this.fetchCourses();
  },
};
</script>

<style scoped>
.courses-titlte {
  margin-top: 3rem;
}

.courses-container,
.loading-container,
.error-message-container {
  margin-top: 3rem;
}

.courses-container {
  flex-wrap: wrap;
  justify-content: center;
}

.custom-pagination {
  margin: 3rem;
}

::v-deep .custom-pagination .page-link {
  font-weight: 800;
  background: white;
  color: #17a2b8;
  border: #17a2b8 1px solid;
}

::v-deep .custom-pagination .active button {
  background: #17a2b8;
  color: white;
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* CSS styles for tablets */
}

@media (max-width: 480px) {
  /* CSS styles for mobile devices */
}
</style>
