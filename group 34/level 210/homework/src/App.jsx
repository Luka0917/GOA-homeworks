import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import ErrorBoundary from "./ErrorBoundary"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-[50px] gap-[20px]">
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentA />
          <ComponentB />
        </ErrorBoundary>

        <p className="text-center text-[20px] font-[500] px-[200px]">An Error Boundary is a special React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire application. Error Boundaries only catch errors that happen during rendering, in lifecycle methods, and in constructors of their child components. They do not catch errors inside event handlers or asynchronous code.</p>
      </div>
    </>
  )
}
export default App