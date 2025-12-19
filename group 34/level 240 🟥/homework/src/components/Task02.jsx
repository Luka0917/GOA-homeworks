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
        <div>
            <p>{count}</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button onClick={inc}>Increase</button>
                <button onClick={res}>Reset</button>
                <button onClick={dec}>Decrease</button>
            </div>
        </div>
    )
}   