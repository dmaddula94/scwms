import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const BinTypeDistributionChart = ({ data }) => {
    const countTypes = data.reduce((acc, bin) => {
        acc[bin.type] = (acc[bin.type] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(countTypes).map(key => ({
        name: key,
        value: countTypes[key]
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={chartData}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            >
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default BinTypeDistributionChart;
