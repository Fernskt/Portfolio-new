import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { TECH_META } from '../utils/techMeta';

const skillGroups = [
  {
    categoryKey: 'skills.frontend',
    skills: ['reactjs', 'typescript', 'javascript', 'html', 'css', 'tailwind', 'vite', 'bootstrap', 'redux', 'tanstack-query', 'rsuite'],
  },
  {
    categoryKey: 'skills.backend',
    skills: ['nodejs', 'nestjs', 'dotnet', 'java', 'spring-boot', 'spring-security', 'sql', 'prisma', 'supabase', 'hibernate', 'api-rest'],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="section" id="skills">
      <h2 className="titulo">{t('skills.title')}</h2>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.categoryKey}>
            <p className="skill-group-label">{t(group.categoryKey)}</p>
            <div className="skills-grid">
              {group.skills.map((name) => {
                const { label, color } = TECH_META[name] || { label: name, color: '#535efe' };
                return (
                  <div
                    className="skill-item"
                    key={name}
                    style={{
                      '--skill-bg':           `${color}14`,
                      '--skill-border':       `${color}55`,
                      '--skill-hover-bg':     `${color}26`,
                      '--skill-hover-border': color,
                      '--skill-shadow':       `${color}35`,
                    }}
                  >
                    <Icon name={name} width={32} height={32} />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
