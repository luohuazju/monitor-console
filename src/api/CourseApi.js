import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


class CourseApi {
    static getAllCourses() {
        return axios.get('/courses');
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        const json = "{\n" +
            "    \"id\": \"react-flux-building-applications\",\n" +
            "    \"title\": \"Building Applications in React and Flux\",\n" +
            "    \"watchHref\": \"http://www.pluralsight.com/courses/react-flux-building-applications\",\n" +
            "    \"authorId\": \"cory-house\",\n" +
            "    \"length\": \"5:08\",\n" +
            "    \"category\": \"JavaScript\"\n" +
            "}";
        return axios.post('/courses', json);
    }

    static deleteCourse(courseId) {
        const query = "react-flux-building-applications";
        return axios.delete('/courses/' + query);
    }


    static getCourse(courseId) {
        const query = "react-flux-building-applications";
        return axios.get('/courses/' + query);
    }

}

export default CourseApi;
