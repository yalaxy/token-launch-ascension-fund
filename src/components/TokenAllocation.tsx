
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const TokenAllocation = () => {
  const data = [
    { name: "ICO Sale", value: 40, color: "#8B5CF6" },
    { name: "Team & Advisors", value: 15, color: "#4F46E5" },
    { name: "Liquidity", value: 20, color: "#06B6D4" },
    { name: "Marketing", value: 10, color: "#38BDF8" },
    { name: "Ecosystem", value: 15, color: "#6366F1" },
  ];

  return (
    <div className="glass-effect rounded-2xl p-6 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-6 text-center">Token Allocation</h3>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, 'Allocation']}
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151' 
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-gray-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenAllocation;
