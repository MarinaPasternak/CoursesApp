<template>
  <div>
    <div class="card-container">
      <h3>{{ course.title }}</h3>
      <img :src="course.previewImageLink + '/cover.webp'" />
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
      <b-badge pill v-for="(skill, index) in course.meta.skills" :key="index">
        {{ skill }}
      </b-badge>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style scoped>
.card-container {
  width: 450px;
  min-height: 550px;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: #17a2b8;
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
</style>
