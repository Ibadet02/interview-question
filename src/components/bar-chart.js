import React, { useCallback } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

export const BarChart = ({ data }) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  }

  const _data = () => ({
    labels: data.map((data) => new Date(data.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Satış sayı',
        borderColor: '#FE9832',
        backgroundColor: '#FE9832',
        data: data.map((data) => data.amount)
      }
    ]
  })

  const findMostPopular = () => {
    const greatestNum = Math.max(...data.map((d) => d.amount))
    const product = data.find((d) => d.amount === greatestNum)
    return {
      name: product?.product[0]?.name,
      date: new Date(product?.date).toLocaleDateString(),
    }
  }

  return (
    <div className='border p-3 rounded'>
      <h2>Statistika (Son 1 ay)</h2>
      <i>Ən çox satılan məhsul: {findMostPopular().name}</i>
      <br />
      <i>Ən çox satış olan gün: {findMostPopular().date}</i>
      <Line options={config} data={_data()} />
    </div>
  )
}
