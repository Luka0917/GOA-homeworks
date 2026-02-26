import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [sales, setSales] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try{
        const result = await axios.get('http://localhost:1717/sales');
        setSales(result.data);
      }catch(err){
        console.error(err);
      }
    }
    fetchSales();
  }, []);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try{
        const result = await axios.get('http://localhost:1717/analytics/full');
        setAnalytics(result.data);
      }catch(err){
        console.error(err);
      }
    }
    fetchAnalytics();
  }, []);

  console.log(analytics);
  console.log(analytics.totalRevenue)

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
      </div>
    </>
  )
}
export default App