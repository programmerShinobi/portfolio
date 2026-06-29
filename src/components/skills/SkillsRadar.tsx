import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { skills } from '@/data/skills';
import { useI18n } from '@/hooks/usePreferences';

/**
 * Recharts RadarChart. Recharts' ResponsiveContainer collapses without an
 * explicit parent height, so the wrapper sets a fixed height.
 */
export function SkillsRadar() {
  const i18n = useI18n();
  const data = skills.map((s) => ({ axis: i18n(s.axis), level: s.level }));

  return (
    <div className="h-[360px] w-full sm:h-[420px]" aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="currentColor" className="text-slate-300 dark:text-slate-700" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fontSize: 11, fill: 'currentColor' }}
            className="text-slate-600 dark:text-slate-300"
          />
          <Radar
            dataKey="level"
            stroke="#22d3ee"
            fill="#22d3ee"
            fillOpacity={0.3}
            isAnimationActive={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
