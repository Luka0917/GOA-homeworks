function About(){
    return(
        <>
            <div className="flex justify-evenly items-center flex-col border-2 rounded-[24px] w-[300px] h-[450px]">
                <p className="text-[30px] font-[600]">About</p>
                <p className="text-[20px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio similique fugit soluta necessitatibus earum voluptatibus illo dolorum itaque voluptatem laudantium!</p>
                <button className="px-[15px] py-[5px] border-2 rounded-[7px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-bg duration-300">Click me</button>
            </div>
        </>
    )
}
export default About