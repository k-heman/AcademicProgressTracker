import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { SGPATrendData } from '@/types';

interface CGPATrendChartProps {
  data: SGPATrendData[];
  height?: number;
}

export default function CGPATrendChart({ data, height = 300 }: CGPATrendChartProps) {
  return (
    <div className="glass-card p-6 h-full flex flex-col justify-between">
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">CGPA Progression</h3>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="cgpaChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
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
                      <p className="text-[#6366f1] font-semibold">CGPA: {payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="cgpa"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#cgpaChartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
