import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { SGPATrendData } from '@/types';

interface SGPATrendChartProps {
  data: SGPATrendData[];
  height?: number;
}

export default function SGPATrendChart({ data, height = 300 }: SGPATrendChartProps) {
  return (
    <div className="glass-card p-6 h-full flex flex-col justify-between">
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">SGPA & CGPA Trends</h3>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
            <XAxis
              dataKey="semester"
              stroke="var(--text-muted)"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              domain={[6, 10]}
              stroke="var(--text-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-card p-3 shadow-lg border border-[var(--border-color)] text-xs">
                      <p className="font-bold mb-1 text-[var(--text-primary)]">{payload[0].payload.semester}</p>
                      <p className="text-[#6366f1] font-semibold">SGPA: {payload[0].value}</p>
                      <p className="text-[#a855f7] font-semibold">CGPA: {payload[1].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Line
              name="SGPA"
              type="monotone"
              dataKey="sgpa"
              stroke="#6366f1"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ r: 4, strokeWidth: 1 }}
            />
            <Line
              name="CGPA"
              type="monotone"
              dataKey="cgpa"
              stroke="#a855f7"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ r: 4, strokeWidth: 1 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
