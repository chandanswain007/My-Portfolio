export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  technologies: string[];
  features: string[];
}

export const PROJECTS = [
  {
    title: 'Student Management System',

    description:
      'Student Management System is a full-stack enterprise-style application developed using Angular and ASP.NET Core Web API. The system supports authentication, role-based authorization, student management, course management, enrollment tracking, profile management and responsive user experiences. The application follows clean architecture principles, uses Entity Framework Core for data access and includes 93 automated backend tests for reliability.',

    images: [
      'images/projects/login.png',
      'images/projects/dashboard.png',
      'images/projects/students.png',
      'images/projects/courses.png',
      'images/projects/profile.png'
    ],

    technologies: [
      'Angular',
      'ASP.NET Core',
      'EF Core',
      'SQLite',
      'JWT'
    ],

    metrics: [
      {
        value: '93',
        label: 'Tests Passed'
      },
      {
        value: 'JWT',
        label: 'Security'
      },
      {
        value: 'CRUD',
        label: 'Operations'
      },
      {
        value: 'RBAC',
        label: 'Authorization'
      }
    ],

    features: [
      '93 Automated Tests Passed',
      'JWT Authentication',
      'Role-Based Authorization',
      'Responsive UI',
      'Production-Ready Architecture'
    ],

    githubUrl: 'https://github.com/chandanswain007',

    liveDemoUrl: '#'
  }
];
