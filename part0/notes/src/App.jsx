import { useState } from "react";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
    console.log("Button clicked", event.target);
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold py-2 px-4">Notes</h1>

          <button
            className="border rounded-lg px-4 py-2 hover:shadow-lg transition duration-200"
            onClick={() => setShowAll(!showAll)}
          >
            show {showAll ? "important" : "all"}
          </button>
        </div>

        <ul className="divide-y divide-gray-200">
          {notesToShow.map((note) => (
            <li
              key={note.id}
              className="px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
            >
              {note.content}
            </li>
          ))}
        </ul>
        <form onSubmit={addNote} className="px-4 pt-4 flex gap-2">
          <input
            type="text"
            value={newNote}
            onChange={handleNoteChange}
            className="flex-1 border rounded-lg px-3 py-2 focus:shadow-lg focus:outline-none transition duration-200"
            placeholder="Write your note here..."
          />
          <button
            type="submit"
            className="border rounded-lg px-4 py-2 hover:shadow-lg transition duration-200"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
