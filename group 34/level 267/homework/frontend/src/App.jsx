import { useEffect, useState, useId } from 'react';
import axios from 'axios';

function App() {
  const [sales, setSales] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const productNameId = useId();
  const categoryId = useId();
  const priceId = useId();
  const quantityId = useId();

  const fetchSales = async () => {
    try{
      const result = await axios.get('http://localhost:1717/sales');
      setSales(result.data);
    }catch(err){
      console.error(err);
    }
  };

  const fetchAnalytics = async () => {
    try{
      const result = await axios.get('http://localhost:1717/analytics/full');
      setAnalytics(result.data);
    }catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSales();
      fetchAnalytics();
  }, [])

  const submitForm = async e => {
    e.preventDefault();
    try{
      const formData = new FormData(e.target);

      const data = {
        product_name: formData.get('productName'),
        category: formData.get('category'),
        price: formData.get('price'),
        quantity: formData.get('quantity')
      };

      const result = await axios.post('http://localhost:1717/sales', data);
      console.log(`Product added: ${result.data}`);

      e.target.reset();

      await fetchSales();
      await fetchAnalytics();
    }catch(err){
      console.error(err);
    }
  };

  return (
    <>
      <div className="py-20 px-15 min-h-screen flex justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">Sales Table</h2>

          <table className="w-200 bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-10">ID</th>
                <th className="w-50">Product name</th>
                <th className="w-50">Category</th>
                <th className="w-50">Price</th>
                <th className="w-50">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((el, i) => (
                <tr key={el.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="text-center">{el.id}</td>
                  <td className="text-left pl-11 py-0.5">{el.product_name}</td>
                  <td className="text-left pl-15 py-0.5">{el.category}</td>
                  <td className="text-left pl-18 py-0.5">${el.price}</td>
                  <td className="text-center">{el.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>          
        </div>

        <div className='flex justify-between items-center flex-col'>
          <div>
            <h2 className="text-3xl font-bold mb-4">Analytics</h2>
            <table className="w-200 bg-white border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-50">Category</th>
                  <th className="w-50">Total sales</th>
                  <th className="w-50">Total revenue</th>
                  <th className="w-50">Avg price</th>
                  <th className="w-50">Min price</th>
                  <th className="w-50">Max price</th>
                </tr>
              </thead>
              <tbody>
                {analytics.categoryStats?.map((el, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <td className="text-left pl-9 py-0.5">{el.category}</td>
                    <td className="text-left pl-11 py-0.5">{el.total_sales}</td>
                    <td className="text-left pl-11 py-0.5">${el.total_revenue}</td>
                    <td className="text-left pl-11 py-0.5">${el.avg_price.toFixed(2)}</td>
                    <td className="text-left pl-11 py-0.5">${el.min_price}</td>
                    <td className="text-left pl-11 py-0.5">${el.max_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='mt-4 text-xl font-medium'>Total revenue: ${analytics.totalRevenue}</p>
          </div>

          <form onSubmit={submitForm} className='flex justify-center flex-col mb-50'>
            <label htmlFor={productNameId} className='font-medium'>Product name</label>
            <input type="text" id={productNameId} name='productName' required className='border rounded w-60 px-1 py-0.5' />

            <label htmlFor={categoryId} className='mt-2 font-medium'>Category</label>
            <input type="text" id={categoryId} name='category' required className='border rounded w-60 px-1 py-0.5' />

            <label htmlFor={priceId} className='mt-2 font-medium'>Price</label>
            <input type="number" id={priceId} name='price' min={0} required className='border rounded w-60 px-1 py-0.5' />

            <label htmlFor={quantityId} className='mt-2 font-medium'>Quantity</label>
            <input type="number" id={quantityId} name='quantity' min={0} required className='border rounded w-60 px-1 py-0.5' />

            <button className='border border-black rounded-lg bg-black text-white mt-5 py-1 cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default App