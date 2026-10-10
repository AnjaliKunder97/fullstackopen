import Header from './Header'
import Content from './Content'

const Course = (props) => {
const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
        <Header course={props.course} />
        <Content parts={props.course.parts}/>
        <p>total of {total} exercises</p>
    </>
  )
}

export default Course