import { useEffect, useState } from "react";
import personService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        personService.getAll().then(data => {
            setPersons(data);
            console.log("Persons loaded from backend");
        });
    }, []);

    const handleFilterChange = (event) => setFilter(event.target.value);
    const handleNameChange = (event) => setNewName(event.target.value);
    const handleNumberChange = (event) => setNewNumber(event.target.value);

    const addNewPerson = (event) => {
        event.preventDefault();

        const existingPerson = persons.find(person => person.name === newName);

        if (existingPerson) {
            const confirmUpdate = window.confirm(
                `${newName} is already added to the phonebook, replace the old number with a new one?`
            );

            if (confirmUpdate) {
                const updatedPerson = { ...existingPerson, number: newNumber };

                personService.update(existingPerson.id, updatedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p =>
                            p.id !== existingPerson.id ? p : returnedPerson
                        ));
                        setNewName("");
                        setNewNumber("");
                    })
                    .catch(error => {
                        alert(`The person '${newName}' was already removed from server`);
                        setPersons(persons.filter(p => p.id !== existingPerson.id));
                    });
            }

            return;
        }

        // New person logic
        const personObject = { name: newName, number: newNumber };

        personService.create(personObject).then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewNumber("");
        });
    };

    const handleDeletePerson = (id, name) => {
        const confirmDelete = window.confirm(`Delete ${name}?`);
        if (!confirmDelete) return;

        personService.remove(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id));
            })
            .catch(() => {
                alert(`The person '${name}' was already removed from server`);
                setPersons(persons.filter(person => person.id !== id));
            });
    };

    const personsToShow = filter
        ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        : persons;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="shadow-lg p-4 mt-16 w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Phonebook</h1>

                <h2 className="text-xl font-bold">Search</h2>
                <input
                    className="border w-full px-2 py-1 rounded"
                    placeholder="Search by name"
                    value={filter}
                    onChange={handleFilterChange}
                />

                <h2 className="text-xl font-bold mt-4">Add a new</h2>
                <form onSubmit={addNewPerson} className="flex justify-between space-x-2">
                    <div className="w-full">
                        <label>Name:</label>
                        <input
                            className="border w-full px-2 py-1 rounded"
                            value={newName}
                            onChange={handleNameChange}
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full">
                        <label>Number:</label>
                        <input
                            className="border w-full px-2 py-1 rounded"
                            value={newNumber}
                            onChange={handleNumberChange}
                            placeholder="Number"
                        />
                    </div>
                    <button className="border px-4 py-1 mt-6 rounded" type="submit">
                        Add
                    </button>
                </form>

                <h2 className="text-xl font-bold mt-6">Numbers</h2>
                <ul className="mt-2 space-y-1">
                    {personsToShow.map(person => (
                        <li key={person.id} className="flex justify-between items-center border-b pb-1">
                            <span>{person.name} - {person.number}</span>
                            <button
                                className="text-red-500 hover:text-red-700 font-bold"
                                onClick={() => handleDeletePerson(person.id, person.name)}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
