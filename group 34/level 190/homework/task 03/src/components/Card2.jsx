export default function Card2(){
    return (
        <div className="flex justify-center items-start flex-col bg-[#006970ff] p-[50px] gap-[50px]">
            <img src="./src/assets/icon-suvs.svg" className="w-[80px]" />
            <div className="flex justify-center flex-col">
                <p className="text-[30px] font-[600] text-[#f2f2f2ff]">SUVs</p>
                <p className="text-[17px] w-[219px] text-[#ffffffbf] mt-[25px]">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            </div>
            <button className="bg-[#f2f2f2ff] text-[#006970ff] border-2 border-[#f2f2f2ff] rounded-[30px] px-[30px] py-[10px] font-[500] cursor-pointer hover:bg-[#006970ff] hover:text-[#f2f2f2ff] transition duration-200">Learn More</button>
        </div>
    )
}