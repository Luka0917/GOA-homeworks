import { useState } from 'react';
import Task1 from './components/Task-01'
import Task2 from './components/Task-02'
import Task3 from './components/Task-03'
import Task4 from './components/Task-04'

function App() {
  const people = [
    {
      name: 'Luka',
      description: 'Frontend Developer from Tbilisi.'
    },
    {
      name: 'Giorgi',
      description: 'Backend Developer who loves Node.js.'
    },
    {
      name: 'Nino',
      description: 'UI/UX Designer passionate about user experience.'
    }
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index) => (index + 1) % people.length);
  };
  const heros = [
    {
      name: 'Spider-man',
      description: 'Witty teen with spider powers',
      powers: 'Wall-crawling, super strength, web-shooting.'
    },
    {
      name: 'Captain Marvel',
      description: 'Fearless pilot turned cosmic hero',
      powers: 'Super strength, flight, energy blasts.'
    },
    {
      name: 'Black Panther',
      description: 'Noble king with feline grace',
      powers: 'Enhanced senses, agility, vibranium suit.'
    }
  ];
  return (
    <>
      <div className='flex justify-center items-center h-screen gap-[50px]'>
        <div className='flex justify-center items-center flex-col gap-[20px]'>
          <Task1 />
          <Task2 />
        </div>
        <Task3 obj={people[index]} func={handleNext} />
        <Task4 hero1={heros[0]} hero2={heros[1]} hero3={heros[2]}/>
      </div>
    </>
  )
}
export default App