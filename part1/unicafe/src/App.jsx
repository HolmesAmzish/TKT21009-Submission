import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-green-200 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4 transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Give feedback</h2>
            <p className="text-sm text-gray-500">Statics</p>
          </div>
        </div>

        <div className="flex-col space-y-4">
          <div className="flex space-x-2 items-center">
            <button 
              onClick={handleGoodClick}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors duration-200"
            >
              Good
            </button>
            <p className="text-lg font-medium text-green-600">{good}</p>
            <button 
              onClick={handleNeutralClick}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-colors duration-200"
            >
              Neutral
            </button>
            <p className="text-lg font-medium text-gray-600">{neutral}</p>
            <button 
              onClick={handleBadClick}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition-colors duration-200"
            >
              Bad
            </button>
            <p className="text-lg font-medium text-red-600">{bad}</p>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-gray-700 font-medium">Total: <span className="font-bold">{total}</span></p>
            <p className="text-gray-700 font-medium">Average: <span className="font-bold">{average.toFixed(2)}</span></p>
            <p className="text-gray-700 font-medium">
              Positive Feedback: <span className="font-bold">{total ? ((good / total) * 100).toFixed(2) : 0}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
