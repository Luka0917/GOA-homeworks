import Box2 from './Box2'

export default function Box1(){
    return (
        <div className="flex justify-center items-center flex-col w-[600px] h-[600px] bg-red-500">
            <p className="text-[20px] font-[500]">Box 2</p>
            <Box2 />
        </div>
    )
}