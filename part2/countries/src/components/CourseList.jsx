import Course from "./Course.jsx";

const Courses = ({ courses }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
