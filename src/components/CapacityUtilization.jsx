import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CapacityUtilizationChart = ({ data }) => {
    const chartData = data.map(bin => ({
        name: bin.id,
        FillLevel: (bin.currentFillLevel / bin.capacity) * 100
    }));

    return (
        <BarChart
            width={1000}
            height={300}
            data={chartData}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="FillLevel" fill="#8884d8" />
        </BarChart>
    );
};

export default CapacityUtilizationChart;
