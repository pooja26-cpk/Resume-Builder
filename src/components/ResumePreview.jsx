import React from 'react';
import { exportPDF } from '../utils';

const ResumePreview = ({ resume, template }) => {
  const isModern = template === 'modern';

  const modernStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    color: 'var(--muted-blue)'
  };

  const classicStyle = {
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'normal',
    color: 'var(--text-color)'
  };

  const headingStyle = isModern ? modernStyle : classicStyle;

  return (
    <div className="card" style={{ height: '100%', overflowY: 'auto' }}>
      <div id="resume-preview" className={`resume-preview ${template}-template`}>
        <header className="resume-header">
          <h1>{resume.personal.name || 'Your Name'}</h1>
          <p>
            {resume.personal.email}
            {resume.personal.phone && ` | ${resume.personal.phone}`}
            {resume.personal.address && ` | ${resume.personal.address}`}
          </p>
        </header>

        {resume.summary && (
          <section className="resume-section">
            <h2 className="section-title">Career Summary</h2>
            <p>{resume.summary}</p>
          </section>
        )}

        {resume.education.length > 0 && (
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            {resume.education.map((edu, i) => (
              <div key={i} className="entry">
                <h3>{edu.degree} - {edu.school}</h3>
                <p>{edu.year}</p>
              </div>
            ))}
          </section>
        )}

        {resume.experience.length > 0 && (
          <section className="resume-section">
            <h2 className="section-title">Experience</h2>
            {resume.experience.map((exp, i) => (
              <div key={i} className="entry">
                <h3>{exp.position} at {exp.company}</h3>
                <p className="entry-duration">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {resume.skills.length > 0 && (
          <section className="resume-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
              {resume.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;