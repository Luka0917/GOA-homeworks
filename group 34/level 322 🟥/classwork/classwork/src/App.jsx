import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  scales
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  scales
)

function App() {
  const data = {
    labels: [ 'January', 'February', 'March' ],
    datasets: [
      {
        label: 'Income',
        data: [ 100, 200, 150 ],
        backgroundColor: 'lightblue',
        borderRadius: 10
      },
      {
        label: 'Loss',
        data: [ 50, 100, 200 ],
        backgroundColor: 'lightgreen',
        borderRadius: 10
      }
    ]
  };

  const option = {
    scales: {
      x: { ticks: { color: 'black' } },
      y: { ticks: { color: 'black' } }
    }
  };

  return (
    <>
      <Bar data={data} options={option} />
    </>
  )
}
export default App