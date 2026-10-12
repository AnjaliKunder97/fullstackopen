
const Persons = ({personsToShow, deletePerson}) => {
    if (personsToShow.length === 0) {
        return <p>No matches found</p>
    }
    return (
        <>
            {personsToShow.map(person =>
                <p key={person.id}>
                    {person.name} {person.number} 
                    <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
                </p>
            )}
        </>
    )
}

export default Persons