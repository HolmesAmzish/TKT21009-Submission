import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Total from "./components/Total.jsx";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="shadow-lg rounded-lg p-4 mt-16 space-y-4">
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    </div>
  );
};

export default App;
