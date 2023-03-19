<template>
  <div>
    <div class="course-container">
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
        <div class="d-flex statistic-container">
          <div class="d-flex statistic-badge">
            <div class="icon-item">
              <b-icon icon="card-text" scale="1.5"></b-icon>
            </div>
            <div>
              <p>Lessons</p>
              <p>{{ unlockedLessonCount }}</p>
            </div>
          </div>
          <div class="d-flex statistic-badge">
            <div class="icon-item">
              <b-icon icon="clock-fill" scale="1.5"></b-icon>
            </div>
            <div>
              <p>Duration</p>
              <p>{{ (courseData.duration / 60).toFixed(1) }}h</p>
            </div>
          </div>
          <div class="d-flex statistic-badge">
            <div class="icon-item">
              <b-icon icon="star-fill" scale="1.5"></b-icon>
            </div>
            <div>
              <p>Rating</p>
              <p>{{ courseData.rating }}</p>
            </div>
          </div>
        </div>
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
        <div class="video-container">
          <lesson-video
            :lessonData="lessonDataForVideo || lessonDataForVideoDeafault"
          ></lesson-video>
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
      return this.courseData?.lessons.find(
        (lesson) => lesson.status === "unlocked"
      );
    },
    unlockedLessonCount() {
      return this.courseData?.lessons.filter(
        (lesson) => lesson.status === "unlocked"
      ).length;
    },
  },
  methods: {
    ...mapActions(["fetchCourseDataById"]),
    getLesson(lesson) {
      if (lesson.status === "unlocked") {
        this.lessonDataForVideo = lesson;
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
  padding-left: 25px;
  background-color: #20aabf;
  transform: translateX(12px);
}

.sidebar-open-button {
  background-color: #117180;
  left: -18px;
  top: 60px;
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

::v-deep #allCoursesSidebar .b-sidebar-body {
  padding-left: 30px;
  padding-right: 15px;
}

.statistic-container {
  width: 640px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #17a2b8;
}

.statistic-container .statistic-badge {
  margin: 10px;
  align-items: center;
  justify-content: space-around;
  color: white;
}

.statistic-container .statistic-badge p {
  font-weight: 800;
  margin: 0;
}

.statistic-container .statistic-badge .icon-item {
  margin-right: 10px;
  padding: 15px;
  background-color: #49b7c8;
  border-radius: 10px;
  opacity: 0.8;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .course-container {
    margin-top: 8rem;
  }
}

@media (min-width: 480px) and (max-width: 767px) {
  .course-container {
    margin-top: 8rem;
  }

  .statistic-container {
    width: 100%;
  }
  .course-title {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  * {
    font-size: 0.8rem;
  }

  .ribbon-link {
    font-size: 0.9rem;
  }

  ::v-deep #allCoursesSidebar .b-sidebar-header {
    font-size: 1rem;
  }

  #allCoursesSidebar .lessons-list p {
    font-size: 1rem;
  }
  .statistic-container .statistic-badge .icon-item[data-v-3de07dd2] {
    margin-right: 0.7rem;
    padding: 0.8rem;
  }

  .course-container {
    margin-top: 8rem;
  }

  .statistic-container {
    width: 100%;
  }
}
</style>
