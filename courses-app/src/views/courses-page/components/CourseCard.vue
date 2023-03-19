<template>
  <div>
    <div
      class="card-container"
      @click="goToCoursePage(course.id)"
      @mouseover="playVideo"
      @mouseleave="pauseVideo"
    >
      <h3>{{ course.title }}</h3>
      <div class="video-preview-container">
        <img :src="course.previewImageLink + '/cover.webp'" />
        <video
          ref="videoPreviewPlayer"
          muted
          preload="metadata"
          @ended="resetVideo"
          @pause="resetVideo"
        ></video>
      </div>
      <div class="d-flex statistic-container">
        <div class="d-flex statistic-badge">
          <div class="icon-item">
            <b-icon icon="card-text" scale="1.5"></b-icon>
          </div>
          <div>
            <p>Lessons</p>
            <p>{{ course.lessonsCount }}</p>
          </div>
        </div>
        <div class="d-flex statistic-badge">
          <div class="icon-item">
            <b-icon icon="clock-fill" scale="1.5"></b-icon>
          </div>
          <div>
            <p>Duration</p>
            <p>{{ (course.duration / 60).toFixed(1) }}h</p>
          </div>
        </div>
        <div class="d-flex statistic-badge">
          <div class="icon-item">
            <b-icon icon="star-fill" scale="1.5"></b-icon>
          </div>
          <div>
            <p>Rating</p>
            <p>{{ course.rating }}</p>
          </div>
        </div>
      </div>
      <p class="course-description-text">{{ course.description }}</p>
      <div class="badge-container">
        <b-badge pill v-for="(skill, index) in course.meta.skills" :key="index">
          {{ skill }}
        </b-badge>
      </div>
      <router-link :to="'/course/' + course.id">
        <b-button class="see-course-button">See The Course</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
export default {
  name: "CourseCard",
  props: ["course"],
  methods: {
    goToCoursePage(courseId) {
      this.$router.push({ name: "course", params: { courseId } });
    },
    playVideo() {
      const video = this.$refs.videoPreviewPlayer;
      const hls = new Hls();

      hls.loadSource(`${this.course.meta.courseVideoPreview.link}`);
      hls.attachMedia(video);
      video.currentTime = 0;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.addEventListener("canplay", () => {
          video.play();
        });
      });
    },
    pauseVideo() {
      const video = this.$refs.videoPreviewPlayer;
      video.pause();
      this.resetVideo();
    },
    resetVideo() {
      const video = this.$refs.videoPreviewPlayer;
      video.currentTime = 0;
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  width: 450px;
  min-height: 615px;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: #17a2b8;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
}

.card-container:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.card-container img {
  width: 300px;
  height: 150px;
}

.card-container .badge {
  margin: 3px;
  background-color: #17a2b8;
  font-size: 0.9rem;
  color: white;
}

.card-container .statistic-container {
  margin: 10px 0;
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

.card-container .course-description-text {
  text-align: left;
  font-weight: 800;
}

.card-container .see-course-button {
  width: 70%;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.6rem;
  border-color: #17a2b8;
  font-weight: 800;
  background-color: white;
  color: #17a2b8;
}

.card-container .see-course-button:hover {
  background-color: #17a2b8;
  color: white;
}

.video-preview-container video {
  display: none;
  width: 300px;
  height: 150px;
  margin: auto;
  object-fit: cover;
}
.card-container:hover .video-preview-container video {
  display: block;
}

.card-container:hover .video-preview-container img {
  display: none;
}
</style>
