export default function History({history}){
    return (
        <>
            <p className="text-[20px] mt-[20px]"><b>History:</b> {history.slice(0, 5).map(el => `${el}, `)}</p>
        </>
    )
}