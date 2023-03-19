<template>
  <div>
    <!-- <video
      controls
      src="https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8"
      type="video/mp4"
    ></video> -->
    <div v-if="!lessonData">
      <loading-spinner></loading-spinner>
    </div>
    <div v-else>
      <h2 class="lesson-title">{{ lessonData?.title }}</h2>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
export default {
  props: ["lessonData"],
  components: {
    LoadingSpinner,
  },
};
</script>

<style scoped>
.lesson-title {
  color: #17a2b8;
}
</style>
