export const EMAIL = 'kassimd813@gmail.com';
export const PHONE_DISPLAY = '+27 78 567 8840';
export const PHONE_HREF = 'tel:+27785678840';

export const NAV_LINKS: ReadonlyArray<readonly [string, string]> = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Subjects', '#subjects'],
  ['Approach', '#approach'],
  ['Qualifications', '#qualifications'],
];

export interface ExperienceItem {
  when: string;
  place: string;
  role: string;
  items: string[];
  current?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    when: 'Jan 2025 — Present',
    place: 'Bothasig High School',
    role: 'Educator (SGB) · GET Mathematics Coordinator',
    items: [
      'Mathematics, Grades 8–9',
      'Mathematical Literacy, Grades 10–12',
      'Life Sciences, Grades 10–12',
      'Business Studies, Grades 10–11',
    ],
    current: true,
  },
  {
    when: 'Jan 2020 — Dec 2024',
    place: 'Sinenjongo High School',
    role: 'Educator (WCED)',
    items: [
      'Mathematical Literacy, Grades 10–12',
      'Mathematics, Grades 8–9',
      'Agricultural Sciences, Grades 10–12',
    ],
  },
  {
    when: 'Jan 2015 — Nov 2024',
    place: 'Association for Educational Transformation (ASSET)',
    role: 'Tutor & Lesson Coordinator',
    items: [
      'Teaching, tutoring and consolidating Grade 8 & 9 Mathematics',
      'Grade 12 Mathematical Literacy',
    ],
  },
  {
    when: 'Jan 2015 — Dec 2019',
    place: 'Focus College, Wynberg',
    role: 'HOD: Head of Mathematics (GET) & Mathematical Literacy',
    items: [
      'Mathematics Grade 9; Mathematical Literacy Grades 10–12',
      'Natural Sciences Grades 8–9; Life Sciences Grade 12',
      'Chief Internal Examination Officer',
      'School soccer coach',
    ],
  },
  {
    when: 'Feb 2013 — Dec 2014',
    place: 'Silikamva High School, Hout Bay',
    role: 'Substitute Teacher',
    items: [
      'Mathematics, Natural Sciences, Social Sciences and Life Orientation, Grades 8 & 9',
    ],
  },
  {
    when: 'Jul 2011 — Present',
    place: 'Rainbow Dream Trust, Hout Bay',
    role: 'Director of Academic Affairs',
    items: [
      'Tutoring Mathematics, Science and English (Grades 8–10), Geography and Mathematical Literacy',
      'Homework support for learners',
      'Overseeing tutors and their work',
    ],
  },
  {
    when: 'Apr 2010 — Dec 2011',
    place: 'Simon Estes Music High School, Wynberg',
    role: 'Teacher · SMT',
    items: [
      'Mathematics Grades 8–10, Mathematical Literacy, Life Orientation, Life Science',
      'Learner counselling; after-care coordinator',
    ],
  },
];

export type SubjectGlyph =
  | 'parabola'
  | 'bars'
  | 'hex'
  | 'circle'
  | 'line'
  | 'triangle';

export interface SubjectItem {
  name: string;
  level: string;
  glyph: SubjectGlyph;
}

export const SUBJECTS: SubjectItem[] = [
  { name: 'Mathematics', level: 'Grades 8–10 (GET)', glyph: 'parabola' },
  { name: 'Mathematical Literacy', level: 'Grades 10–12 (FET)', glyph: 'bars' },
  { name: 'Life & Natural Sciences', level: 'Grades 8–12', glyph: 'hex' },
  { name: 'Agricultural Sciences', level: 'Grades 10–12', glyph: 'circle' },
  { name: 'Business Studies', level: 'Grades 10–11', glyph: 'line' },
  // NOTE: Original copy uses "EDTP SETA" here and "ETDP SETA" under education.
  // Both spellings preserved pending confirmation of the correct acronym.
  { name: 'Assessment & Moderation', level: 'EDTP SETA accredited', glyph: 'triangle' },
];

export const AWARDS = [
  { year: '2024', title: 'Capitec Grade 9 Mathematics Award', note: 'Award winning (R200 000)' },
  {
    year: 'WCED',
    title: 'Third Best Educator — Reflective Learning Awards',
    note: 'Third position, GET Mathematics. Reflecting Learning Maths programme & Excellence Service awards',
  },
  {
    year: '2020–22',
    title: 'Best Educator: Subject Pass Rate, Mathematical Literacy',
    note: 'Sinenjongo High School, three consecutive years',
  },
  { year: '2022', title: 'Best Educator Attendance', note: 'Sinenjongo High School' },
  {
    year: '2014–19',
    title: 'WCED Invigilating Training Workshop',
    note: 'Six consecutive years',
  },
] as const;

export const EDUCATION = [
  { when: '2024', title: 'Short Course in Mathematics', where: 'Stellenbosch University' },
  { when: '2019–2020', title: 'PGCE (Mathematics & Life Sciences)', where: 'MANCOSA, Cape Town' },
  { when: '2026', title: 'Grade 9 Back on Track Workshop', where: 'WCED' },
  { when: '2022', title: 'Assessor & Moderator', where: 'ETDP SETA' },
  {
    when: '2023–2026',
    title: 'Diploma, Life Coach & Employee Wellness (in progress)',
    where: 'Academy of York',
  },
  {
    when: '2001–2007',
    title: 'BTech, Animal Production & Health (SAQA evaluated)',
    where: 'Ladoke Akintola University of Technology, Nigeria',
  },
] as const;

export const BODIES: ReadonlyArray<readonly [string, string, string]> = [
  ['South African Council for Educators', 'Provisionally registered', '2014'],
  ['National Union of Teachers, Ibadan', 'Member', '2011'],
  ['Nigerian Institute of Animal Science', 'Certified', '2008'],
  ['Centre Songhai, Benin Republic', 'Certified', '2006'],
];

export const HOBBIES = ['Mentoring', 'Soccer coaching', 'Reading', 'Writing', 'Travelling'] as const;

export const APPROACH_STEPS: ReadonlyArray<readonly [string, string]> = [
  [
    'Understand',
    'Concepts before procedures — knowing why a method works, not only how to apply it.',
  ],
  [
    'Practise',
    'Consolidating learning through guided work, homework support and regular tutoring.',
  ],
  [
    'Reflect',
    'Reviewing results and adjusting teaching to help every learner get back on track.',
  ],
];

export const HERO_STATS: ReadonlyArray<readonly [string, string]> = [
  ['15+', 'years teaching'],
  ['7', 'schools & trusts'],
  ['8–12', 'grades taught'],
];
