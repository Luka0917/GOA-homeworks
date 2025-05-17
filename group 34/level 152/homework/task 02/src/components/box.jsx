export default function Box(props){
    return (
        <>
            <div key={props.key} className={`text-[25px] font-[500] w-[75px] h-[75px] flex justify-center items-center rounded-[7px] ${props.bg}`}>{props.num}</div>
        </>
    )
};