# CoursesApp
This is a web application for viewing courses. 
It has two pages: "Courses List" and "Course Data". The application has routing implemented with Vue Router, and in case of an invalid route, it redirects to a "Not Found" page.

The "All Courses" page displays a list of all the available courses with pagination (10 cards per page). Each course is represented by a card.
Each card consist of:
- Title
- Image and preview video plays on card hover
- Statistic of the course: duration, rating, count of unlocked lessons
- Skills 

The "Course Data" page displays the details of a selected course, including a list of its lessons. The sidebar displays all the lessons, and the user cannot see the videos for locked lessons. For unlocked lessons, the user can see the videos, but an error message is displayed for lessons without a video. Also the progress of video is saved in the localhost storage.

### The "Course Data"
![screencapture-localhost-8080-2023-12-24-20_43_11](https://github.com/MarinaPasternak/CoursesApp/assets/31963187/47f8e550-791f-4e09-9886-b5389d72d936)

### Courses' cards
![Знімок екрана 2023-12-24 204351](https://github.com/MarinaPasternak/CoursesApp/assets/31963187/2b25b8ec-25cb-43dd-ba86-1cfcdc3cd834)


### Course page
![Знімок екрана 2023-12-24 204438](https://github.com/MarinaPasternak/CoursesApp/assets/31963187/6286c968-dae2-4b27-8165-c5f8a1392f9a)
![Знімок екрана 2023-12-24 204457](https://github.com/MarinaPasternak/CoursesApp/assets/31963187/0343cc5d-90af-4b80-993c-a0e875317800)

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
