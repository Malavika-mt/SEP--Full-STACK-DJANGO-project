import React from 'react';
import CourseCard from '../components';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';
import TitleUpdater from '../components/TitleUpdater';
import { Counter } from '../components/Counter';

function CoursePage() {
  return (
    <div className="course-page px-6 py-8 max-w-4xl mx-auto text-left">
      <h2 className="text-center">Course Catalog</h2>

      <section className="mb-8">
        <h3>Search Courses</h3>
        <div className="max-w-md">
          <SearchBar />
        </div>
      </section>

      <section className="mb-8">
        <h3>Featured Courses</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <CourseCard title="Intro to Computer Science" code="CS101" credits={3} />
          <CourseCard title="Calculus I" code="MATH101" credits={4} />
          <CourseCard title="World Literature" code="ENG201" credits={2} />
          <CourseCard title="Physics I" code="PHYS101" credits={4} />
          <CourseCard title="Art History" code="ART301" credits={3} />
        </div>
      </section>

      <section className="mb-8">
        <h3>Course List</h3>
        <div className="prose max-w-none">
          <CourseList />
        </div>
      </section>

      <section className="mb-8">
        <h3>Attendance</h3>
        <Counter />
      </section>

      <section className="mb-8">
        <h3>Course Tools</h3>
        <TitleUpdater />
      </section>
    </div>
  );
}

export default CoursePage;
