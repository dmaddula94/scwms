import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const FillLevelDistributionChart = ({ data }) => {
    const fillLevelCategories = {
        'Empty': 0,
        'Quarter Full': 0,
        'Half Full': 0,
        'Three Quarters Full': 0,
        'Full': 0
    };

    data.forEach(bin => {
        const fillPercentage = (bin.currentFillLevel / bin.capacity) * 100;

        if (fillPercentage === 0) {
            fillLevelCategories['Empty'] += 1;
        } else if (fillPercentage <= 25) {
            fillLevelCategories['Quarter Full'] += 1;
        } else if (fillPercentage <= 50) {
            fillLevelCategories['Half Full'] += 1;
        } else if (fillPercentage <= 75) {
            fillLevelCategories['Three Quarters Full'] += 1;
        } else {
            fillLevelCategories['Full'] += 1;
        }
    });

    const chartData = Object.keys(fillLevelCategories).map(key => ({
        name: key,
        value: fillLevelCategories[key]
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

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

export default FillLevelDistributionChart;
