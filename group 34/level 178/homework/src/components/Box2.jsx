import Box3 from './Box3'

export default function Box2(){
    return (
        <div className="flex justify-center items-center flex-col w-[500px] h-[500px] bg-green-500">
            <p className="text-[20px] font-[500]">Box 3</p>
            <Box3 />
        </div>
    )
}