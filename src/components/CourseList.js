import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';



function CourseList() {
     const [courses, setCourses] = useState([]);

    useEffect(() => {
        const CourseList =[
            {id:101,title: "Python Basics", credits: 3},
            {id:102,title: "JavaScript Essentials", credits: 4},
            {id:103,title: "React Fundamentals", credits: 3}
        ];
        setCourses(CourseList);
    }, []);
         
     return (
    <ul>
        {courses.map(course => (
            <li key={course.id}>
                <Link to={`/courses/${course.id}`}>
                    <b>{course.title}</b> </Link>
                ID: {course.id}, Title: {course.title}, Credits: {course.credits}
            </li>
        ))}
    </ul>
    );

}

export default CourseList;