import { useState } from "react"

export default function Task05(){
    const [hover, setHover] = useState(false);

    return (
        <div style={{width: '200px', height: '200px', cursor: 'pointer', transition: '0.3s', backgroundColor: hover ? 'purple' : 'black'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
    )
}