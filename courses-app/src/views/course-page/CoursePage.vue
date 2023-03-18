<template>
  <div>
    <div>
      <router-link :to="'/courses/'">
        <b-button class="ribbon-link" size="lg">See All Courses</b-button>
      </router-link>
      <h1 class="course-title">LESSONS TITLE</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePage",
  props: ["courseId"],
  computed: {
    courseDescription() {
      return `This is the description of course ${this.courseId}`;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.course-title {
  margin-top: 3rem;
}
.ribbon-link {
  width: 200px;
  position: fixed;
  top: 1rem;
  left: -13px;
  padding: 0 0.5em;
  line-height: 1.875em;
  color: white;
  font-weight: 800;
  border-radius: 0 0.156em 0.156em 0;
  border: none;
  background: #17a2b8;
  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
}

.ribbon-link:hover {
  background-color: #20aabf;
  padding-left: 20px;
  transform: translateX(12px);
}
</style>
