# Alex Thorne // Digital Architecture Portfolio

A high-end, cinematic portfolio experience built for the modern web. This project explores the intersection of **Architectural Design** and **Front-End Engineering**.

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

---

##  The Architecture

This portfolio deviates from standard vertical scrolling to provide a **Horizontal Scroll Narrative**. By leveraging `sticky` positioning and CSS transforms, the site glides through four distinct "zones":

1.  **01 / The Hero:** Brand identity and a terracotta-themed cinematic headshot reveal.
2.  **02 / Philosophy:** A minimalist "About" section focusing on design logic.
3.  **03 / Selected Works:** An interactive project gallery with full-bleed mask reveals and case study overlays.
4.  **04 / Connection:** A streamlined contact portal for new collaborations.

##  Key Features

- **Custom Horizontal Wrapper:** Engineered a bespoke scroll-jack system using React hooks to translate vertical scroll into horizontal movement.
- **Cinematic Case Studies:** A "lifting state" modal architecture that clears the DOM transform trap, allowing for smooth, full-screen project deep-dives.
- **Brand System:** A cohesive visual language centered around a "Terracotta" (`#B04627`) and "Charcoal" palette.
- **Adaptive Navigation:** A `mix-blend-difference` Navbar that automatically adjusts its visibility based on the background color it passes over.

##  Tech Stack

- **Framework:** React 18 (Vite)
- **Language:** TypeScript (Strictly Typed)
- **Styling:** Tailwind CSS (Utility-first architecture)
- **Animation:** Framer Motion (Orchestration & Gestures)
- **Icons:** Lucide React

##  Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/alex-thorne-portfolio.git](https://github.com/your-username/alex-thorne-portfolio.git)