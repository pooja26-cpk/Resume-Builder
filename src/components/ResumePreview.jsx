import React from 'react';
import PropTypes from 'prop-types';

const ResumePreview = ({ resume, template }) => {
  const { personal, summary, education, experience, skills } = resume;

  return (
    <div
      className={`resume-preview ${template}-template`}
    >
      <div className="resume-header">
        <h1>{personal.name || 'Your Name'}</h1>
        <div className="contact-info">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            {personal.email || 'your.email@example.com'}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {personal.phone || '123-456-7890'}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {personal.address || 'Your City, State'}
          </span>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Summary</h2>
        <p>{summary}</p>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="entry">
            <h3>{edu.degree}</h3>
            <p>{edu.school} | {edu.year}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h2 className="section-title">Experience</h2>
        {experience.map((exp, i) => (
          <div key={i} className="entry">
            <h3>{exp.position}</h3>
            <p>{exp.company} | {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

ResumePreview.propTypes = {
 resume: PropTypes.shape({
   personal: PropTypes.shape({
     name: PropTypes.string,
     email: PropTypes.string,
     phone: PropTypes.string,
     address: PropTypes.string,
   }).isRequired,
   summary: PropTypes.string.isRequired,
   education: PropTypes.arrayOf(
     PropTypes.shape({
       degree: PropTypes.string.isRequired,
       school: PropTypes.string.isRequired,
       year: PropTypes.string.isRequired,
     })
   ).isRequired,
   experience: PropTypes.arrayOf(
     PropTypes.shape({
       position: PropTypes.string.isRequired,
       company: PropTypes.string.isRequired,
       duration: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
     })
   ).isRequired,
   skills: PropTypes.arrayOf(PropTypes.string).isRequired,
 }).isRequired,
 template: PropTypes.string.isRequired,
};

export default ResumePreview;