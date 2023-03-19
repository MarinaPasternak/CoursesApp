<template>
  <div>
    <div>
      <router-link to="/courses/">
        <b-button class="ribbon-link" size="lg">See All Courses</b-button>
      </router-link>
      <div v-if="isCourseLoading">
        <loading-spinner></loading-spinner>
      </div>
      <div v-else-if="errorMessage">
        <error-message :errorMessage="errorMessage"></error-message>
      </div>
      <div v-else-if="courseData">
        <h1 class="course-title">{{ courseData.title }}</h1>
        <div class="sidebar-container">
          <b-button
            v-b-toggle.allCoursesSidebar
            class="ribbon-link sidebar-open-button"
            size="lg"
            >See All Lessons</b-button
          >
          <b-sidebar id="allCoursesSidebar" title="All Lessons" shadow>
            <div class="lessons-list">
              <div
                v-for="lesson in courseData.lessons"
                :key="lesson.id"
                @click="getLesson(lesson)"
              >
                <p :class="lesson.status">
                  {{ lesson.title }}
                  <b-icon
                    v-if="lesson.status !== 'unlocked'"
                    icon="lock-fill"
                  ></b-icon>
                </p>
              </div>
            </div>
          </b-sidebar>
        </div>
        <div>
          <lesson-video :lessonData="lessonDataForVideoDeafault"></lesson-video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import LessonVideo from "./components/LessonVideo.vue";
export default {
  name: "CoursePage",
  props: ["courseId"],
  components: {
    ErrorMessage,
    LoadingSpinner,
    LessonVideo,
  },
  data() {
    return {
      lessonDataForVideo: null,
    };
  },
  computed: {
    ...mapState({
      courseData: (state) => state.courseData.course,
      isCourseLoading: (state) => state.courseData.courseLoading,
      errorMessage: (state) => state.courseData.courseError,
    }),
    lessonDataForVideoDeafault() {
      return this.courseData.lessons[0];
    },
  },
  methods: {
    ...mapActions(["fetchCourseDataById"]),
    getLesson(lesson) {
      if (lesson.status === "unlocked") {
        this.$refs.lessonVideo.lessonData = lesson;
      }
    },
  },
  mounted() {
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

.sidebar-open-button {
  left: -18px;
  top: auto;
}

#allCoursesSidebar .lessons-list {
  text-align: left;
}

#allCoursesSidebar .lessons-list p {
  font-size: 1.2rem;
  font-weight: 800;
  color: #17a2b8;
}

#allCoursesSidebar .lessons-list p.unlocked {
  cursor: pointer;
}
#allCoursesSidebar .lessons-list p.unlocked:hover {
  color: #20aabf;
}

#allCoursesSidebar .lessons-list p.locked {
  color: #5c5c5c;
}

::v-deep #allCoursesSidebar .close {
  border: none;
  background-color: transparent;
}

::v-deep #allCoursesSidebar .bi-x {
  width: 35px;
  height: 35px;
  color: rgb(255, 86, 86);
}

::v-deep #allCoursesSidebar .b-sidebar-header {
  margin-top: 1.3rem;
  align-items: initial;
  justify-content: center;
}
</style>
