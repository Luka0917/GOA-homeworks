import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store"; 

export default function Task02(){
    const { count, inc, dec, res } = useStore(
        useShallow(s => ({
            count: s.count,
            inc: s.inc,
            dec: s.dec,
            res: s.res
        }))
    )

    return (
        <div className="flex justify-center items-center flex-col gap-5 border rounded-[17px] p-5">
            <p className="text-[40px] font-semibold">{count}</p>
            <div className="flex justify-center items-center gap-5">
                <button onClick={inc} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Increase</button>
                <button onClick={res} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Reset</button>
                <button onClick={dec} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Decrease</button>
            </div>
        </div>
    )
}   