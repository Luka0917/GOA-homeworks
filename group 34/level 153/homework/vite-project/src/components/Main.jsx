import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";

export default function Main(){
    return (
        <>
            <div className="flex justify-center items-center gap-[50px]">
                <div className="flex justify-center items-center flex-col">
                    <div className="border-3 border-purple-500 rounded-[50%] p-[50px]">
                        <img src="./public/me.jpg" alt="Photo of me" className="rounded-[50%]" />
                    </div>
                    <p className="text-[20px]">Luka Tatuashvili</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-[50px] border-2 rounded-[54px] p-[30px] h-[306px] w-[500px] mb-[30px]">
                    <p className="text-[30px] font-[600]">I Know</p>
                    <div className="flex justify-center items-center flex-col gap-[5px]">
                        <div className="flex justify-center items-center gap-[10px]">
                            <p className="text-[#366994] text-[20px]"><FaPython /></p>
                            <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                                <div className="w-[260px] h-[21px] bg-[#366994]"></div>
                                <p className="font-[500] mr-[5px]">65%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[10px]">
                            <p className="text-[#dd7831] text-[20px]"><FaHtml5 /></p>
                            <div className="flex justify-between items-center w-[400px] h-[25px] border-2 relative">
                                <div className="w-[400px] h-[21px] bg-[#dd7831]"></div>
                                <p className="font-[500] absolute right-[5px]">100%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[10px]">
                            <p className="text-[#519aba] text-[20px]"><FaCss3Alt /></p>
                            <div className="flex justify-between items-center w-[400px] h-[25px] border-2 relative">
                                <div className="w-[280px] h-[21px] bg-[#519aba]"></div>
                                <p className="font-[500] mr-[5px]">70%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[10px]">
                            <p className="text-[#cbcb41] text-[20px]"><DiJavascript /></p>
                            <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                                <div className="w-[320px] h-[21px] bg-[#cbcb41]"></div>
                                <p className="font-[500] mr-[5px]">80%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[10px]">
                            <p className="text-[#4187b1] text-[20px]"><FaReact /></p>
                            <div className="flex justify-between items-center w-[400px] h-[25px] border-2">
                                <div className="w-[40px] h-[21px] bg-[#4187b1]"></div>
                                <p className="font-[500] mr-[5px]">10%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}