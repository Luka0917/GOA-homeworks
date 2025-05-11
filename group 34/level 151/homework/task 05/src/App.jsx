import StudentList from "./components/StudentList"
import StudentCard from "./components/StudentCard"

function App() {
  const studentList = StudentList()
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <StudentCard arr={studentList} />
      </div>
    </>
  )
}
export default App