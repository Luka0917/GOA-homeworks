import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
export default App