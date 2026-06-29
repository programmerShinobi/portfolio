import type { I18nText } from '@/lib/richText';

export interface TechGroup {
  title: I18nText;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    title: { en: 'Backend & APIs', id: 'Backend & API' },
    items: ['NestJS', 'Node.js', 'TypeScript', 'Spring Boot', 'GraphQL', 'REST', 'Swagger/OpenAPI'],
  },
  {
    title: { en: 'Data & Databases', id: 'Data & Database' },
    items: ['PostgreSQL', 'MySQL', 'MSSQL', 'Prisma ORM', 'TypeORM', 'Sequelize', 'Elasticsearch', 'Redis', 'FDW'],
  },
  {
    title: { en: 'Frontend', id: 'Frontend' },
    items: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS'],
  },
  {
    title: { en: 'Engineering Concerns', id: 'Fokus Engineering' },
    items: [
      'System integration',
      'Security remediation',
      'Legacy modernization',
      'Microservices',
      'Unit & API testing',
      'Docker',
      'CI/CD',
      'Agile/Scrum',
    ],
  },
];
