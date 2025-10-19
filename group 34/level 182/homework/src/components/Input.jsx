import { useReducer } from "react"

function reducer(state, action){
    switch(action.type){
        case 'submit':
            return action.payload
        case 'undo':
            return ''
        default:
            return state
    };
};

export default function Input(){
    const [input, dispatch] = useReducer(reducer, '');

    function handleform(e){
        e.preventDefault();
        const formdata = new FormData(e.target);
        const value = formdata.get('input');
        if(value.trim()){
            dispatch({type: 'submit', payload: value});
            e.target.reset();
        };
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <form onSubmit={handleform}>
                <input type="text" name="input" placeholder="Enter Text" required className="border rounded-[5px] px-[20px] py-[3px]"/>
                <button className="border rounded-[5px] px-[20px] py-[3px] font-[500] ml-[10px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Submit</button>
            </form>
            <div className="flex justify-center items-center mt-[10px]">
                <p className="text-[20px]"><b>Input:</b> {input}</p>
                {input != '' && <button onClick={() => dispatch({type: 'undo'})} className="border rounded-[5px] px-[20px] py-[3px] font-[500] ml-[10px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Undo</button>}
            </div>
        </div>
    )
}