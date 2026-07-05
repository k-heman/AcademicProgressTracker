import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { GradeDistributionData } from '@/types';

interface GradeDistributionProps {
  data: GradeDistributionData[];
  height?: number;
}

export default function GradeDistribution({ data, height = 300 }: GradeDistributionProps) {
  const totalGrades = data.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="glass-card p-6 h-full flex flex-col justify-between">
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Grade Distribution</h3>
      <div style={{ width: '100%', height }} className="relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="count"
              nameKey="grade"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const percent = ((payload[0].value as number) / totalGrades * 100).toFixed(1);
                  return (
                    <div className="glass-card p-3 shadow-lg border border-[var(--border-color)] text-xs">
                      <p className="font-bold text-[var(--text-primary)] mb-1">Grade {payload[0].name}</p>
                      <p className="text-[var(--text-secondary)]">Count: {payload[0].value}</p>
                      <p className="text-[var(--text-secondary)]">Percentage: {percent}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none mt-[-18px]">
          <span className="text-2xl font-black text-[var(--text-primary)]">{totalGrades}</span>
          <span className="text-xxs text-[var(--text-muted)] font-semibold uppercase tracking-wider">Subjects</span>
        </div>
      </div>
    </div>
  );
}
