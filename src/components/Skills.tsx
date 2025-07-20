import React from 'react';
import './skills.css';

interface Skill {
  name: string;
  proficiency: number;
  iconName: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

const Skills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", proficiency: 90, iconName: "react_icon" },
        { name: "TypeScript", proficiency: 85, iconName: "typescript_icon" },
        { name: "JavaScript", proficiency: 90, iconName: "javascript_icon" },
        { name: "HTML5", proficiency: 95, iconName: "html5_icon" },
        { name: "CSS3", proficiency: 90, iconName: "css3_icon" },
        { name: "Redux", proficiency: 85, iconName: "redux_icon" },
        { name: "Bootstrap", proficiency: 88, iconName: "bootstrap_icon" },
        { name: "Tailwind CSS", proficiency: 85, iconName: "tailwind_icon" },
        { name: "jQuery", proficiency: 85, iconName: "jquery_icon" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", proficiency: 88, iconName: "nodejs_icon" },
        { name: "Express.js", proficiency: 85, iconName: "express_icon" },
        { name: "Python", proficiency: 90, iconName: "python_icon" },
        { name: "Django", proficiency: 85, iconName: "django_icon" },
        { name: "Java", proficiency: 80, iconName: "java_icon" },
        { name: "Spring Boot", proficiency: 75, iconName: "spring_icon" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", proficiency: 88, iconName: "mongodb_icon" },
        { name: "PostgreSQL", proficiency: 85, iconName: "postgresql_icon" },
        { name: "MySQL", proficiency: 85, iconName: "mysql_icon" }
      ]
    },
    {
      category: "Data Science & Analytics",
      items: [
        { name: "Python", proficiency: 90, iconName: "python_icon" },
        { name: "Pandas", proficiency: 85, iconName: "pandas_icon" },
        { name: "NumPy", proficiency: 85, iconName: "numpy_icon" },
        { name: "TensorFlow", proficiency: 80, iconName: "tensorflow_icon" },
        { name: "Scikit-learn", proficiency: 80, iconName: "scikit_icon" },
        { name: "Tableau", proficiency: 75, iconName: "tableau_icon" }
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", proficiency: 90, iconName: "git_icon" },
        { name: "GitHub", proficiency: 90, iconName: "github_icon" },
        { name: "Docker", proficiency: 85, iconName: "docker_icon" },
        { name: "Kubernetes", proficiency: 75, iconName: "kubernetes_icon" },
        { name: "AWS", proficiency: 80, iconName: "aws_icon" },
        { name: "Jira", proficiency: 85, iconName: "jira_icon" },
        { name: "Postman", proficiency: 90, iconName: "postman_icon" }
      ]
    }
  ];

  return (
    <div className="skills">
      <h1>Skills & Technologies</h1>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.2}s` }}>
            <h2>{skillCategory.category}</h2>
            <div className="skill-items">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon-wrapper">
                      <span className="icon-placeholder">{skill.iconName}</span>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
