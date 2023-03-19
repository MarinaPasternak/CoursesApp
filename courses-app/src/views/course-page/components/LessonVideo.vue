<template>
  <div>
    <h2 class="lesson-title">{{ lessonData?.title }}</h2>
    <div>
      <video ref="videoPlayer" controls class="video-player"></video>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
export default {
  props: ["lessonData"],
  watch: {
    "lessonData.link"(newLink, oldLink) {
      if (newLink !== oldLink) {
        this.loadVideo();
      }
    },
  },
  methods: {
    loadVideo() {
      const video = this.$refs.videoPlayer;
      const hls = new Hls();
      const savedTime = localStorage.getItem(this.lessonData.id);

      hls.loadSource(`${this.lessonData.link}`);
      hls.attachMedia(video);

      if (savedTime !== null) {
        video.currentTime = parseFloat(savedTime);
      }

      video.addEventListener("timeupdate", () => {
        localStorage.setItem(this.lessonData.id, video.currentTime.toString());
      });
    },
  },
  mounted() {
    this.loadVideo();
  },
};
</script>

<style scoped>
.video-player {
  width: 640px;
  height: 360px;
}

.lesson-title {
  margin-top: 25px;
  color: #17a2b8;
}
</style>
