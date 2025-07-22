import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes]; // copy the votes array
    newVotes[selected] += 1; // increment vote count for selected anecdote
    setVotes(newVotes); // update state with new array
  };

  const maxVotes = Math.max(...votes);
  const topIndex = votes.indexOf(maxVotes);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md text-center p-6">
        <div className="py-2 text-lg font-medium">{anecdotes[selected]}</div>
        <div className="py-2 text-sm text-gray-600">
          Vote: {votes[selected]}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="px-4 py-2 rounded hover:shadow-xl transition-shadow duration-300"
            onClick={handleVote}
          >
            Vote
          </button>
          <button
            className="px-4 py-2 rounded hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelected((selected + 1) % anecdotes.length)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer with most voted anecdote */}
      <div className="mt-8 w-full max-w-md text-center border-t pt-4 text-sm text-gray-700">
        <h2 className="font-semibold mb-1">Anecdote with most votes</h2>
        {maxVotes > 0 ? (
          <>
            <p className="italic">"{anecdotes[topIndex]}"</p>
            <p>has {maxVotes} votes</p>
          </>
        ) : (
          <p className="text-gray-400 italic">No votes yet</p>
        )}
      </div>
    </div>
  );
};

export default App;
