import BgProvider from "./context/BgProvider"
import Task01 from "./components/Task01"

import LanguageProvider from "./context/LanguageProvider"
import Task02 from "./components/Task02"

import UserProvider from "./context/UserProvider"
import Task03 from "./components/Task03"

import CartProvider from "./context/CartProvider"
import AddToCart from "./components/Task 04/AddToCart"
import Cart from "./components/Task 04/Cart"

import AuthProvider from "./context/AuthProvider"
import Task05 from "./components/Task05"

function App() {

  return (
    <>
      <div className="flex justify-center items-center flex-col py-[50px] gap-[100px]">
        <div className="flex justify-center items-center gap-[100px]">
          <BgProvider>
            <Task01 />
          </BgProvider>

          <LanguageProvider>
            <Task02 />
          </LanguageProvider>

          <UserProvider>
            <Task03 />
          </UserProvider>

          <CartProvider>
            <AddToCart />
            <Cart />
          </CartProvider>
        </div>
        <AuthProvider>
          <Task05 />
        </AuthProvider>
      </div>
    </>
  )
}
export default App