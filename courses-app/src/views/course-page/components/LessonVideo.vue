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
  mounted() {
    const video = this.$refs.videoPlayer;
    const hls = new Hls();

    if (Hls.isSupported()) {
      console.log(this.lessonData.link);
      hls.loadSource(`${this.lessonData.link}`);
      hls.attachMedia(video);
    } // else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    //   video.src = "http://example.com/my-video.m3u8";
    //   video.addEventListener("loadedmetadata", () => {
    //     video.play();
    //   });
    // }
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
