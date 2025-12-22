import { useShallow } from "zustand/react/shallow";
import { useStore } from "./store";

function App() {
  const {theme, dark, light} = useStore(
    useShallow(s => ({
      theme: s.theme,
      dark: s.dark,
      light: s.light,
    }))
  )

  return (
    <>
      <div className={theme}>
        <button onClick={dark}>Dark</button>
        <button onClick={light}>Light</button>
      </div>
    </>
  )
}
export default App