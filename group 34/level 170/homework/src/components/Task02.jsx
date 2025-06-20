import { useState, useEffect } from "react";

export default function Task02(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="border rounded-[12px] p-[20px] text-[20px] font-[500]">Window Width: {width}px</div>
    )
}