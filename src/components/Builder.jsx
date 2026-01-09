import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FormSection from './FormSection';
import TagInput from './TagInput';
import './Builder.css';
import ResumePreview from './ResumePreview';
import { exportPDF } from '../utils';

const Builder = () => {
  const [resume, setResume] = useState(() => {
    const saved = localStorage.getItem('resume');
    return saved ? JSON.parse(saved) : {
      personal: { name: '', email: '', phone: '', address: '' },
      summary: '',
      education: [{ school: '', degree: '', year: '' }],
      experience: [{ company: '', position: '', duration: '', description: '' }],
      skills: []
    };
  });

  const [template, setTemplate] = useState('classic');

  const updatePersonal = (field, value) => {
    setResume({
      ...resume,
      personal: { ...resume.personal, [field]: value }
    });
  };

  const updateSummary = (value) => {
    setResume({ ...resume, summary: value });
  };

  const improveSummary = () => {
    setResume({
      ...resume,
      summary: 'Accomplished professional with extensive experience in [field], skilled in [skills]. Proven track record of [achievements]. Seeking to leverage expertise to contribute to [company/industry].'
    });
  };

  const enhanceExperience = () => {
    const updatedExperience = resume.experience.map(exp => ({
      ...exp,
      description: 'Led key initiatives resulting in [outcome]. Collaborated with cross-functional teams to [task]. Implemented [technology/solution] improving [metric].'
    }));
    setResume({ ...resume, experience: updatedExperience });
  };

  const addEducation = () => {
    setResume({
      ...resume,
      education: [...resume.education, { school: '', degree: '', year: '' }]
    });
  };

  const removeEducation = (index) => {
    setResume({
      ...resume,
      education: resume.education.filter((_, i) => i !== index)
    });
  };

  const updateEducation = (index, field, value) => {
    const updated = resume.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setResume({ ...resume, education: updated });
  };

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [...resume.experience, { company: '', position: '', duration: '', description: '' }]
    });
  };

  const removeExperience = (index) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((_, i) => i !== index)
    });
  };

  const updateExperience = (index, field, value) => {
    const updated = resume.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setResume({ ...resume, experience: updated });
  };

  const saveResume = () => {
    localStorage.setItem('resume', JSON.stringify(resume));
    alert('Resume saved!');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the resume? All your data will be lost.')) {
      setResume({
        personal: { name: '', email: '', phone: '', address: '' },
        summary: '',
        education: [{ school: '', degree: '', year: '' }],
        experience: [{ company: '', position: '', duration: '', description: '' }],
        skills: []
      });
    }
  };

  return (
    <motion.div
      className="container builder-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="card">
         <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        <h2 className="builder-title">Resume Content</h2>

        <FormSection title="Personal Details">
          <div className="grid-2-col">
            <input type="text" placeholder="Full Name" value={resume.personal.name} onChange={(e) => updatePersonal('name', e.target.value)} />
            <input type="email" placeholder="Email" value={resume.personal.email} onChange={(e) => updatePersonal('email', e.target.value)} />
            <input type="tel" placeholder="Phone" value={resume.personal.phone} onChange={(e) => updatePersonal('phone', e.target.value)} />
            <input type="text" placeholder="Address" value={resume.personal.address} onChange={(e) => updatePersonal('address', e.target.value)} />
          </div>
        </FormSection>

        <FormSection title="Career Summary">
          <textarea
            placeholder="Brief summary of your career"
            value={resume.summary}
            onChange={(e) => updateSummary(e.target.value)}
            className="summary-textarea"
          />
          <button onClick={improveSummary} className="btn btn-primary">
            Improve with AI
          </button>
        </FormSection>

        <FormSection title="Education">
          {resume.education.map((edu, i) => (
            <div key={i} className="card card-mb-15">
              <div className="grid-2-col grid-mb-10">
                <input type="text" placeholder="School/University" value={edu.school} onChange={(e) => updateEducation(i, 'school', e.target.value)} />
                <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => updateEducation(i, 'degree', e.target.value)} />
                <input type="text" placeholder="Year" value={edu.year} onChange={(e) => updateEducation(i, 'year', e.target.value)} />
              </div>
              <button onClick={() => removeEducation(i)} className="btn btn-danger">
                Remove
              </button>
            </div>
          ))}
          <button onClick={addEducation} className="btn btn-primary">
            Add Education
          </button>
        </FormSection>

        <FormSection title="Experience">
          {resume.experience.map((exp, i) => (
            <div key={i} className="card card-mb-15">
              <div className="grid-2-col grid-mb-10">
                <input type="text" placeholder="Company" value={exp.company} onChange={(e) => updateExperience(i, 'company', e.target.value)} />
                <input type="text" placeholder="Position" value={exp.position} onChange={(e) => updateExperience(i, 'position', e.target.value)} />
                <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => updateExperience(i, 'duration', e.target.value)} />
              </div>
              <textarea
                placeholder="Description"
                value={exp.description}
                onChange={(e) => updateExperience(i, 'description', e.target.value)}
                className="experience-textarea"
              />
              <button onClick={() => removeExperience(i)} className="btn btn-danger">
                Remove
              </button>
            </div>
          ))}
          <div className="flex-gap-10">
            <button onClick={addExperience} className="btn btn-primary">
              Add Experience
            </button>
            <button onClick={enhanceExperience} className="btn btn-primary">
              Enhance with AI
            </button>
          </div>
        </FormSection>

        <FormSection title="Skills">
          <TagInput tags={resume.skills} setTags={(tags) => setResume({ ...resume, skills: tags })} />
        </FormSection>

        <div className="action-buttons">
         
          <button onClick={saveResume} className="btn btn-primary">
            Save Resume
          </button>
          <button onClick={exportPDF} className="btn btn-primary">
            Download PDF
          </button>
          <button onClick={handlePrint} className="btn btn-primary">
            Print to PDF
          </button>
          <button onClick={handleReset} className="btn btn-danger">
            Reset All
          </button>
        </div>
      </div>

      <div className="resume-preview-sticky">
        <div className="card">
          <h3 className="template-switcher">Template</h3>
          <div className="template-buttons">
            <button
              onClick={() => setTemplate('classic')}
              className={`btn template-button ${template === 'classic' ? 'active' : ''}`}
            >
              Classic
            </button>
            <button
              onClick={() => setTemplate('modern')}
              className={`btn template-button ${template === 'modern' ? 'active' : ''}`}
           >
              Modern
            </button>
          </div>
        </div>
        <div className="resume-preview">
          <ResumePreview resume={resume} template={template} />
        </div>
      </div>
      </motion.div>
    );
};

export default Builder;