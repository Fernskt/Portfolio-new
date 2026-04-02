import { useTranslation } from 'react-i18next';
import Icon from './Icon';

const skillGroups = [
  {
    categoryKey: 'skills-frontend',
    skills: [
      { name: 'reactjs',       label: 'React' },
      { name: 'typescript',    label: 'TypeScript' },
      { name: 'javascript',    label: 'JavaScript' },
      { name: 'html',          label: 'HTML' },
      { name: 'css',           label: 'CSS' },
      { name: 'tailwind',      label: 'Tailwind' },
      { name: 'vite',          label: 'Vite' },
      { name: 'bootstrap',     label: 'Bootstrap' },
      { name: 'redux',         label: 'Redux' },
      { name: 'tanstack-query',label: 'TanStack Query' },
      { name: 'rsuite',        label: 'RSuite' },
    ],
  },
  {
    categoryKey: 'skills-backend',
    skills: [
      { name: 'nodejs',          label: 'Node.js' },
      { name: 'nestjs',          label: 'NestJS' },
      { name: 'dotnet',          label: '.NET' },
      { name: 'java',            label: 'Java' },
      { name: 'spring-boot',     label: 'Spring Boot' },
      { name: 'spring-security', label: 'Spring Security' },
      { name: 'sql',             label: 'SQL' },
      { name: 'prisma',          label: 'Prisma' },
      { name: 'supabase',        label: 'Supabase' },
      { name: 'hibernate',       label: 'Hibernate' },
      { name: 'api-rest',        label: 'REST API' },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="section" id="skills">
      <h2 className="titulo">{t('skills-title')}</h2>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.categoryKey}>
            <p className="skill-group-label">{t(group.categoryKey)}</p>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <Icon name={skill.name} width={32} height={32} />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
