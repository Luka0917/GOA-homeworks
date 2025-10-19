import NavBar from "./NavBar"

export default function Home(){
    return (
        <div className="flex justify-center items-center flex-col gap-[100px] pt-[20px]">
            <NavBar />
            <b className="text-[50px]">Home Page</b>
        </div>
    )
}