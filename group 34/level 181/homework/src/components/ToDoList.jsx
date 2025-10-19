import { useReducer } from "react"

function reducer(state, action){
    switch(action.type){
        case 'add':
            return [...state, action.payload];
        case 'remove':
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    };
};

export default function ToDoList(){
    const [toDoArr, dispatch] = useReducer(reducer, []);

    function handleForm(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const value = formData.get('todo');
        if(value.trim()){
            dispatch({type: 'add', payload: value});
            e.target.reset();
        };
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <form onSubmit={handleForm}>
                <input type="text" name="todo" id="todo" placeholder="Enter Task" className="border rounded-[5px] px-[20px] py-[3px]"/>
                <button className="border rounded-[5px] px-[20px] py-[3px] font-[500] ml-[10px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Add</button>
            </form>
            <ol>
                {toDoArr.map((el, index) => 
                    <li key={index} className="text-[18px] flex justify-center items-center gap-[10px] mt-[10px]">
                        {index + 1}.
                        {el}
                        <button onClick={() => dispatch({type: 'remove', payload: index})} className="border rounded-[5px] px-[10px] ml-[10px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Remove</button>
                    </li>)
                }
            </ol>
        </div>
    )
}