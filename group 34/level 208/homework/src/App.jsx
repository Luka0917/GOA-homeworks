{/* Task 01 */}
import Task01 from "./components/Task01"
import Task01ErrorBoundary from "./errorBoundaries/Task01ErrorBoundary"

{/* Task 02 */}
import Task02A from "./components/Task02A"
import Task02B from "./components/Task02B"
import Task02ErrorBoundaryA from "./errorBoundaries/Task02ErrorBoundaryA"
import Task02ErrorBoundaryB from "./errorBoundaries/Task02ErrorBoundaryB"

{/* Task 03 */}
import Task03 from "./components/Task03"
import Task03ErrorBoundary from "./errorBoundaries/Task03ErrorBoundary"

{/* Task 04 */}
import Task04 from "./components/Task04"
import Task04ErrorBoundary from "./errorBoundaries/Task04ErrorBoundary"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[100px] pt-[50px]">
        {/* Task 01 */}
        <Task01ErrorBoundary>
          <Task01 />
        </Task01ErrorBoundary>

        {/* Task 02 */}
        <Task02ErrorBoundaryA>
          <Task02A/>
        </Task02ErrorBoundaryA>

        <Task02ErrorBoundaryB>
          <Task02B/>
        </Task02ErrorBoundaryB>

        {/* Task 03 */}
        <Task03ErrorBoundary>
          <Task03/>
        </Task03ErrorBoundary>

        {/* Task 04 */}
        <Task04ErrorBoundary>
          <Task04 />
        </Task04ErrorBoundary>
      </div>
    </>
  )
}
export default App