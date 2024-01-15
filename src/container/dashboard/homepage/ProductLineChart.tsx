'use client';
import React, { useEffect, useState } from 'react';
import { CategoryScale, Chart, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

ChartJS.register(LinearScale, CategoryScale);

interface ProductLineChartProps {
 backendEndpoint: string;
}

const ProductLineChart: React.FC<ProductLineChartProps> = ({
 backendEndpoint,
}) => {
 const [productData, setProductData] = useState<
  { product_name: string; product_amount: number }[]
 >([]);
 const [timeLabels, setTimeLabels] = useState<string[]>([]);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch('http://localhost:3000/api/dashboard/product');
    const data = await response.json();

    const productAmounts = data.map(
     (item: { product_name: string; product_amount: number }) =>
      item.product_amount
    );
    const productLabels = data.map(
     (item: { product_name: string; product_amount: number }) =>
      item.product_name
    );

    setProductData(productLabels);
    setTimeLabels(productAmounts);
   } catch (error) {
    console.error('Error fetching data from backend:', error);
   }
  };

  fetchData();
 }, [backendEndpoint]);

 const chartData = {
  labels: timeLabels,
  datasets: [
   {
    label: 'Product Amount',
    data: productData,
    fill: false,
    borderColor: 'rgba(75,192,192,1)',
    tension: 0.1,
   },
  ],
 };

 const chartOptions: any = {
  scales: {
   x: {
    type: 'linear',
    position: 'bottom',
   },
   y: {
    min: 0,
   },
  },
 };

 return (
  <div>
   <Line data={chartData} options={chartOptions} />
  </div>
 );
};

export default ProductLineChart;
