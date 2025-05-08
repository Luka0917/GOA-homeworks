import { useState } from 'react';
import Task1 from './components/Task-01'
import Task2 from './components/Task-02'
import Task3 from './components/Task-03'

function App() {
  const people = [
    {
      name: 'Luka',
      img: 'https://via.placeholder.com/150?text=Luka',
      description: 'Frontend Developer from Tbilisi.'
    },
    {
      name: 'Giorgi',
      img: 'https://via.placeholder.com/150?text=Giorgi',
      description: 'Backend Developer who loves Node.js.'
    },
    {
      name: 'Nino',
      img: 'https://via.placeholder.com/150?text=Nino',
      description: 'UI/UX Designer passionate about user experience.'
    }
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index) => (index + 1) % people.length);
  };
  return (
    <>
      <div>
        <Task1 />
        <Task2 />
        <Task3 obj={people[index]} func={handleNext} />
      </div>
    </>
  )
}
export default App