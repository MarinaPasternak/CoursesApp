<template>
  <div>
    <h2 class="lesson-title">{{ lessonData?.title }}</h2>
    <div>
      <div v-if="lessonData.link">
        <video ref="videoPlayer" controls class="video-player"></video>
      </div>
      <div v-else class="error-container">
        <error-message
          :error-message="'This video unavailable for now'"
        ></error-message>
      </div>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  components: {
    ErrorMessage,
  },
  props: {
    lessonData: {
      type: Object,
      required: true,
    },
  },
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
    if (this.lessonData.link) {
      this.loadVideo();
    }
  },
};
</script>

<style scoped>
.video-player {
  width: 640px;
  height: 360px;
}

.lesson-title {
  margin-top: 2rem;
  color: #17a2b8;
}

.error-container {
  margin-top: 25px;
}

@media (min-width: 480px) and (max-width: 767px) {
  .video-player {
    width: 90%;
    height: auto;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1rem;
  }

  .video-player {
    width: 90%;
    height: auto;
  }
}
</style>
