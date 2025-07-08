# QuantumRisk: AI-Powered Insurance Risk Assessment Platform

## Overview
QuantumRisk is a visually impressive, modern web application for AI-driven insurance risk assessment. It features a dark, glassmorphic UI, interactive blue particle background, and dynamic data-driven forms and analytics.

---

## 🚀 Features
- **Modern Dark Theme** with glassmorphism and premium look
- **Animated Blue Particle Background** (Canvas-based, interactive)
- **Hero Section** with glowing title, subtitle, and morphing CTA button
- **Dynamic Application Form**
  - Fields generated from a real insurance underwriting dataset (JSON)
  - Horizontal, responsive layout (labels left, inputs right)
  - Accepts user input and matches against dataset for real-time Accept/Reject decision
  - Displays structured, row-based summary of matched data
- **Data Visualization Dashboard**
  - Pie chart: Acceptance vs Rejection rates
  - Bar chart: Top rejection reasons
  - Risk score gauge (progress bar)
- **Glassy Content Cards** for technology and use-case highlights
- **Mobile-Optimized**: Fully responsive and touch-friendly
- **Attractive Error/Loading States**
- **Back button and smooth navigation**

---

## 🛠️ Tech Stack
- **HTML5** & **CSS3** (with custom styles and glassmorphism)
- **JavaScript (ES6+)**
- **Canvas API** (for animated particles)
- **[Chart.js](https://www.chartjs.org/)** (for data visualization)
- **Google Fonts: Poppins**
- **JSON** (for insurance application data)

---

## 📦 Setup & Usage
1. **Clone or download** this repository.
2. Place all files (including `index.html`, `insurance_underwriting_dataset.json`, and scripts) in the same directory.
3. **Run a local server** (required for JSON fetch):
   - With Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Or with Node.js:
     ```bash
     npx http-server -p 8000
     ```
   - Or use VS Code Live Server extension.
4. **Open your browser** to `http://localhost:8000/`.
5. **Try the application form**: Enter data matching the dataset to see Accept/Reject results and analytics.

---

## ✨ Customization & Extensibility
- Easily add new fields to the dataset and form.
- Integrate with a backend or ML model for real-time risk scoring.
- Add more charts, export features, or authentication as needed.

---

## 📊 Example Screenshots
- Hero section with animated background
- Application form (horizontal, glassy)
- Accept/Reject result with structured data
- Data visualization dashboard

---

## 📄 License
MIT (or specify your license here) 