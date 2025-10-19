import { useState, useTransition } from "react";

export default function Task03(){
  const [comments, setComments] = useState(() => {
    const arr = [];
    for(let i = 0; i < 500; i++){
      arr.push({ id: i, text: `Comment #${i}` });
    }
    return arr;
  });
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState(null);

  function handleDelete(id){
    setDeletingId(id);
    startTransition(() => {
        setComments((prev) => prev.filter((x) => x.id !== id));
        setDeletingId(null);
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
        <p className="text-[30px] font-[600]">Comments:</p>
        {isPending && <p className="text-[20px] font-[500]">მუშაობს...</p>}
        <div className="flex justify-center items-center flex-col gap-[20px] mt-[15px]">
            {comments.map((el) => (
                <div key={el.id} className="flex justify-center items-center gap-[10px]">
                    {deletingId === el.id && isPending ? (<p className="text-[20px] font-[500]">Deleting...</p>) : (<>{el.text} <button onClick={() => handleDelete(el.id)} className="border border-black rounded-[5px] px-[15px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Delete</button></>)}
                </div>
            ))}
        </div>
    </div>
  );
}