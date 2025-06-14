import Card from './Card'
import cardsData from './cardsData.js'

export default function Home(){
    return (
        <div className='grid grid-cols-5 gap-[50px]'>
            {cardsData.map(el => (
                <Card key={el.id} name={el.name} age={el.age} city={el.city} email={el.email} phone={el.phone}/>
            ))}
        </div>
    );
}