# CoursesApp
This is a web application for viewing courses. 
It has two pages: "Courses List" and "Course Data". The application has routing implemented with Vue Router, and in case of an invalid route, it redirects to a "Not Found" page.

The "All Courses" page displays a list of all the available courses with pagination (10 cards per page). Each course is represented by a card.
Each card consist of:
- Title
- Image and preview video plays on card hover
- Statistic of the course: duration, rating, count of unlocked lessons
- Skills 

The "Course Data" page displays the details of a selected course, including a list of its lessons. The sidebar displays all the lessons, and the user cannot see the videos for locked lessons. For unlocked lessons, the user can see the videos, but an error message is displayed for lessons without a video. Also the progress of video is saved in the localhost storage

## Technologies Used
- Vue.js
- Vue Router
- Vuex
- Axios
- BootstrapVue

### Install the dependencies.
```
npm install
```

### Start the development server.
```
npm run serve
```
