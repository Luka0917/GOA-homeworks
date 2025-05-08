export default function Task3({obj, func}){
    return (
        <>
            <div>
                <p>{obj.name}</p>
                <img src={obj.img}/>
                <p>{obj.description}</p>
                <button onClick={func}>Next</button>
            </div>
        </>
    )
}