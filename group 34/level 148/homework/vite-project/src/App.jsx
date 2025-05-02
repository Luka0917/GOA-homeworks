import ProfileCard from "./ProfileCard"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ProfileCard name='Luka' lastname='Tatuashvili' img='./public/me.jpg' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore vero exercitationem perspiciatis hic neque, itaque quas, magnam deserunt molestiae dignissimos explicabo animi sint consectetur ut quasi similique ipsum dolorum!' />
      </div>
    </>
  )
}
export default App