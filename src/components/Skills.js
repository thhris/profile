import React from 'react';

const skills = [
  'C#',
  'MAUI',
  'Moq',
  'NUnit',
  'xUnit',
  'Entity Framework',
  'Java',
  'Python',
  'Angular',
  'PHP',
  'TypeScript',
  'JavaScript',
  'HTML CSS',
  'MSSQL',
  'MySQL',
  'PostgreSQL',
  'Microsoft Azure Custom Vision',
  'Blob Storage',
  'Azure Functions',
  'Azure Orchestrator',
  'Azure Active Directory',
  'Azure DevOps',
  'Virtual Machines',
  'Azure Pipelines',
  'AWS Lambda',
  'AWS S3',
  'Jira',
  'Trello',
  'Kanban',
  'GIT',
  'Subversion',
  'Jenkins Pipelines',
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
