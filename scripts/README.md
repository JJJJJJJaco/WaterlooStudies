### These are self-running scripts
- `v2/` (deprecated)
    - `getCoursePrereq.js`: This script fetches all the courses prereqs and puts it into same format as `CoursePrereq.js`
    - `getCourses.js`: This script fetches all the courses data and puts it into the same format as `Courses.js`
    - `getUniqueSubjectName.js`: This script runs after `getCourses.js` because it finds unique subjects in list of courses
    - `v2/appendToCourse.js`: appends data to `Courses.js` and save as file `AppendedCourses.js`