const Course = ({ course }) => {
  // Calculate the total number of exercises
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md-4 w-1/3">
      <h1 className="text-2xl py-4">{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id} className="text-lg">
            {part.name}, Exercises: {part.exercises}
          </li>
        ))}
      </ul>
      <p className="font-bold pt-4">Total of {totalExercises} exercises</p>
    </div>
  );
};

export default Course;
