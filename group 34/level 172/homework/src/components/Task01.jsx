import { useState } from "react";

export default function Task01(){
    return (
        <div className="text-center">
            <p className="text-[30px] font-[600]">Event Object</p>
            <p className="text-[20px]">
                In JavaScript, the event object is automatically passed to event handler functions when an event occurs, such 
                as a click, keypress, or form submission. This object contains useful information about the event, like the type 
                of event (event.type), the element that triggered it (event.target), and more. 

                You can also control the behavior of the event using methods like event.preventDefault() to stop default 
                actions (e.g., stopping a form from submitting) and event.stopPropagation() to prevent the event from 
                bubbling up to parent elements.
            </p>
        </div>
    )
}