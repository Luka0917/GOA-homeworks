import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4) // შევქმენით count-ის useState-ი
  const [theme, setTheme] = useState('blue') // შევქმენით theme-ის useState-ი

  function decrementCount(){ // შევქმენით შემცირების ფუნქცია
    setCount(prevCount => prevCount - 1) // ერთით ვამცირებთ useState-ის წინა ცვლადს(რიცხვს)
  }

  function incrementCount(){ // შევქმენით მომატების ფუნქცია
    setCount(prevCount => prevCount + 1) // ერთით ვზრდით useState-ის წინა ცვლადს(რიცხვს)
    setTheme('red') // ვცვლით theme-ის value-ს
  }

  return (
    <>
      <button onClick={decrementCount}>-</button> {/* ყოველ ღილაკზე დაჭერისას ვიძახებთ შემცირების ფუნქციას */}
      <span>{count}</span> {/* გამოგვაქვს count ცვლადი */}
      <span>{theme}</span> {/* გამოგვაქვს theme ცვლადი */}
      <button onClick={incrementCount}>+</button> {/* ყოველ ღილაკზე დაჭერისას ვიძახებთ მომატების ფუნქციას */}
    </>
  )
}

export default App