export default function Iknow(){
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-[50px] border-2 p-[30px] rounded-[54px] w-[912px]">
                <p className="text-[30px] font-[600]">I Know</p>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center gap-[10px]">
                        <p className="text-[#366994] text-[20px]"><i class="fa-brands fa-python"></i></p>
                        <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                            <div className="w-[260px] h-[21px] bg-[#366994]"></div>
                            <p className="font-[500] mr-[5px]">65%</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <p className="text-[#dd7831] text-[20px] mr-[2px]"><i class="fa-brands fa-html5"></i></p>
                        <div className="flex justify-between items-center w-[400px] h-[25px] border-2 relative">
                            <div className="w-[400px] h-[21px] bg-[#dd7831]"></div>
                            <p className="font-[500] absolute right-[5px]">100%</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <p className="text-[#519aba] text-[20px] mr-[2px]"><i class="fa-brands fa-css3-alt"></i></p>
                        <div className="flex justify-between items-center w-[400px] h-[25px] border-2 relative">
                            <div className="w-[280px] h-[21px] bg-[#519aba]"></div>
                            <p className="font-[500] mr-[5px]">70%</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <p className="text-[#cbcb41] text-[20px]"><i class="fa-brands fa-square-js"></i></p>
                        <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                            <div className="w-[320px] h-[21px] bg-[#cbcb41]"></div>
                            <p className="font-[500] mr-[5px]">80%</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-[10px]">
                        <p className="text-[#4187b1] text-[20px] mr-[-2px]"><i class="fa-brands fa-react"></i></p>
                        <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                            <div className="w-[40px] h-[21px] bg-[#4187b1]"></div>
                            <p className="font-[500] mr-[5px]">10%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}