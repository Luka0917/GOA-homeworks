export default function Card3(){
    return (
        <div className="flex justify-center items-start flex-col bg-[#004241ff] p-[50px] gap-[50px]">
            <img src="./src/assets/icon-luxury.svg" className="w-[80px]" />
            <div className="flex justify-center flex-col">
                <p className="text-[30px] font-[600] text-[#f2f2f2ff]">Luxury</p>
                <p className="text-[17px] w-[219px] text-[#ffffffbf] mt-[25px]">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
            </div>
            <button className="bg-[#f2f2f2ff] text-[#004241ff] border-2 border-[#f2f2f2ff] rounded-[30px] px-[30px] py-[10px] font-[500] cursor-pointer hover:bg-[#004241ff] hover:text-[#f2f2f2ff] transition duration-200">Learn More</button>
        </div>
    )
}