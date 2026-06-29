import { Moon, Sun } from 'lucide-react';
import { Segmented } from '@/components/ui/Segmented';
import { useDepth, useI18n, useLang, useTheme } from '@/hooks/usePreferences';
import { ui } from '@/data/uiStrings';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const i18n = useI18n();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={i18n(ui.themeLabel)}
      title={i18n(ui.themeLabel)}
      className="rounded-full border border-slate-300 p-1.5 text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  const i18n = useI18n();
  return (
    <Segmented
      ariaLabel={i18n(ui.langLabel)}
      value={lang}
      onChange={setLang}
      options={[
        { value: 'en', label: 'EN' },
        { value: 'id', label: 'ID' },
      ]}
    />
  );
}

export function DepthToggle() {
  const { depth, setDepth } = useDepth();
  const i18n = useI18n();
  return (
    <Segmented
      ariaLabel={i18n(ui.depthLabel)}
      value={depth}
      onChange={setDepth}
      options={[
        { value: 'plain', label: i18n(ui.depthPlain) },
        { value: 'tech', label: i18n(ui.depthTech) },
      ]}
    />
  );
}
