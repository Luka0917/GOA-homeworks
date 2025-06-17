import { useState } from 'react';
import ExpenseDiv from './components/ExpenseDiv';

function App() {
  const dateNow = new Date();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  function handleForm(e){
    e.preventDefault();
    const newExpense = {
      title: title,
      price: price,
      date: date
    };
    setExpenses(prev => [...prev, newExpense]);
    setTotal(prev => prev + Number(price));
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col mt-[50px]'>
        <p className='text-[30px] font-[500]'>Personal Expense Tracker</p>
        <form onSubmit={handleForm} className='flex justify-center flex-col border px-[20px] py-[40px] mt-[20px] rounded-[24px]'>
          <label htmlFor="title" className='text-[20px]'>Title</label>
          <input type="text" id='title' value={title} onChange={e => setTitle(e.target.value)} required className='border rounded-[5px] pl-[5px] py-[2px] focus:outline-none'/>

          <label htmlFor="price" className='text-[20px] mt-[10px]'>Price</label>
          <input type="number" id='price' value={price} onChange={e => setPrice(e.target.value)} required className='border rounded-[5px] pl-[5px] py-[2px] focus:outline-none'/>

          <label htmlFor="date" className='text-[20px] mt-[10px]'>Date</label>
          <input type="date" id='date' value={date} onChange={e => setDate(e.target.value)} required className='border rounded-[5px] pl-[5px] py-[2px] focus:outline-none' />

          <button className='text-[20px] mt-[20px] border rounded-[5px] cursor-pointer hover:bg-black hover:text-gray-200 hover:border-black transition duration-300'>Submit</button>
        </form>
        <p className='text-[30px] font-[500]'>Total: <b className='text-green-500'>{total}$</b></p>
        <div className='mt-[20px] flex justify-center items-center flex-col gap-[10px]'>
          {expenses.map((el, i) => <ExpenseDiv key={i} title={el.title} price={el.price} date={el.date}/>)}
        </div>
      </div>
    </>
  )
}
export default App