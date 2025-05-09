import ProfileCard from './components/ProfileCard';
import Name from './components/Name'
import Description from './components/Description'
import Avatar from './components/Avatar'

function App() {
  const name = Name();
  const description = Description();
  const avatar = Avatar();
  const people = [
    {
      name: name[0],
      description: description[0],
      avatar: avatar[0]
    },
    {
      name: name[1],
      description: description[1],
      avatar: avatar[1]
    },
    {
      name: name[2],
      description: description[2],
      avatar: avatar[2]
    }
  ];
  return (
    <>
      <div className='flex justify-center items-center h-screen gap-[50px]'>
        <ProfileCard arr={people} />
      </div>
    </>
  )
}
export default App