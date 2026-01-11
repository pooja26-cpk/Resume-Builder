# ProResume - Professional Resume Builder

A modern, user-friendly web application for creating professional resumes with customizable templates, AI-assisted content enhancement, and seamless PDF export capabilities.

## 🚀 Features

- **Intuitive Interface**: Clean, responsive design with smooth animations powered by Framer Motion
- **Live Preview**: Real-time resume preview as you type
- **Multiple Templates**: Choose from Classic and Modern resume templates
- **AI-Powered Enhancements**: Built-in AI suggestions to improve your summary and experience descriptions
- **Dynamic Sections**: Add multiple education and work experience entries
- **Skill Tags**: Easy-to-use tag input for skills section
- **Data Persistence**: Automatic saving to browser localStorage
- **PDF Export**: High-quality PDF generation using html2canvas and jsPDF
- **Print Support**: Direct print-to-PDF functionality

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **PDF Generation**: jsPDF + html2canvas
- **Styling**: CSS Modules
- **Linting**: ESLint

## 📁 Project Structure

```
resume-builder/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Builder.jsx          # Main resume builder component
│   │   ├── Builder.css          # Builder styles
│   │   ├── ColorPicker.jsx      # Color picker component (future use)
│   │   ├── ColorPicker.css      # Color picker styles
│   │   ├── FormSection.jsx      # Reusable form section component
│   │   ├── Home.jsx             # Landing page component
│   │   ├── Home.css             # Home page styles
│   │   ├── ResumePreview.jsx    # Resume preview component
│   │   ├── TagInput.jsx         # Skills tag input component
│   │   ├── TemplateSwitcher.css # Template switcher styles
│   │   └── TemplateSwitcher.jsx # Template switcher component
│   ├── App.jsx                  # Main application component with routing
│   ├── index.css                # Global styles
│   ├── main.jsx                 # Application entry point
│   └── utils.js                 # Utility functions (PDF export)
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🔧 How It Works

1. **Landing Page**: Users start at the home page with an introduction and call-to-action button
2. **Resume Builder**: Main interface with form sections for different resume components
3. **Form Input**: Users fill in personal details, career summary, education, work experience, and skills
4. **AI Enhancement**: Click "Improve with AI" buttons to get suggested improvements for summary and experience descriptions
5. **Template Selection**: Choose between Classic and Modern templates
6. **Live Preview**: See changes instantly in the resume preview pane
7. **Data Management**: Resume data is automatically saved to localStorage
8. **Export Options**: Download as PDF or print directly to PDF

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resume-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📱 Usage

1. Navigate to the home page and click "Create My Resume"
2. Fill in your personal information in the Personal Details section
3. Write or paste your career summary and use the AI improvement feature
4. Add your educational background (add multiple entries if needed)
5. Detail your work experience with company, position, duration, and descriptions
6. Add your skills using the tag input field
7. Select your preferred template (Classic or Modern)
8. Preview your resume in real-time
9. Save your progress or export to PDF

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
