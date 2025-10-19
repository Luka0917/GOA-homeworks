import { useState, useTransition } from "react"

export default function Task02(){
    const [tab, setTab] = useState('main');
    const [isPending, startTransition] = useTransition()

    function Products(){
        const ProductsArr = [];
        for(let i = 0; i < 500; i++){
            ProductsArr.push(<div key={i}>Product #{i}</div>)
        };
        return (
            <div className="flex justify-center items-center flex-col">
                <p className="text-[30px] font-[600]">Products:</p>
                {ProductsArr}
            </div>
        )
    };

    const handleTabChange = (newTab) => {
        startTransition(() => {
            setTab(newTab);
        });
    };
    
    return (
        <div className="flex justify-center items-center flex-col gap-[20px]">
            <div className="flex justify-center items-center gap-[20px]">
                <button onClick={() => handleTabChange('main')} className="border border-black rounded-[5px] px-[15px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Main</button>
                <button onClick={() => handleTabChange('products')} className="border border-black rounded-[5px] px-[15px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Products</button>
            </div>
            {isPending && <p className="text-[20px] font-[500]">"Loading..."</p>}
            {tab === 'main' && <p className="text-[30px] font-[600]">Main Page</p>}
            {tab === 'products' && <Products />}
        </div>
    )
}