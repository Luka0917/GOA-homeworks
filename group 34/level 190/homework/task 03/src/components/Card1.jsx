export default function Card1(){
    return (
        <div className="flex justify-center items-start flex-col bg-[#e38826ff] p-[50px] gap-[50px]">
            <img src="./src/assets/icon-sedans.svg" className="w-[80px]" />
            <div className="flex justify-center flex-col">
                <p className="text-[30px] font-[600] text-[#f2f2f2ff]">Sedans</p>
                <p className="text-[17px] w-[219px] text-[#ffffffbf] mt-[25px]">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            </div>
            <button className="bg-[#f2f2f2ff] text-[#e38826ff] border-2 border-[#f2f2f2ff] rounded-[30px] px-[30px] py-[10px] font-[500] cursor-pointer hover:bg-[#e38826ff] hover:text-[#f2f2f2ff] transition duration-200">Learn More</button>
        </div>
    )
}