// Task 01
import UserProvider from "./context/UserProvider"
import UserProfile from "./components/UserProfile"
// Task 02
import CartProvider from "./context/CartProvider"
import AddToCart from "./components/AddToCart"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[100px] py-[50px]">
        {/* Task 01 */}
        <UserProvider>
          <UserProfile />
        </UserProvider>
        {/* Task 02 */}
        <CartProvider>
          <div className="flex justify-center items-center gap-[100px]">
            <AddToCart />
            <Cart />
          </div>
        </CartProvider>
      </div>
    </>
  )
}
export default App


//* useContext React-ში არის Hook, რომელიც საშუალებას გაძლევს წვდომა იქონიო Context API-ს მონაცემებზე, ზედმეტი props-ების გადაცემის გარეშე.
//* ამის გამოყენებით შეგიძლია „გლობალურად“ გააზიარო ინფორმაცია კომპონენტებს შორის
//? createContext() – ქმნის „გლობალურ საცავს“.
//? Provider – გადასცემს მნიშვნელობას ყველა შიგნით მყოფ კომპონენტს.
//? useContext(Context) – პირდაპირ იღებს მნიშვნელობას, ისე რომ props-ების გადაცემა აღარ არის საჭირო.
//! ასე თავიდან ვიცილებთ props drilling-ს, როცა ერთსა და იმავე მონაცემს უნდა გავატაროთ მრავალი კომპონენტის გავლით.