import '../App.css'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <p className="success">{message}</p>
    )
}

export default Notification