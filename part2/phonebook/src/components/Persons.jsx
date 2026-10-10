const Persons = ({personsToShow}) => {
    if (personsToShow.length === 0) {
        return <p>No matches found</p>
    }
    return (
        <>
            {personsToShow.map(person =><p key={person.id}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Persons