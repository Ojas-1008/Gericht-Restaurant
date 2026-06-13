# Gericht Restaurant 🍽️

An elegant, premium modern restaurant landing page built with React, Vite, and Tailwind CSS.

## 🚀 Current Project Status
We have successfully implemented the **SubHeading** component, the **MenuItem** component, and the **Menu** section, creating a fully animated, responsive layout.

### Done:
*   **SubHeading Component**: Multi-element styled title introducing restaurant sections, featuring entry slide-ins and scaling separators.
*   **MenuItem Component**: High-end dish/drink card featuring a responsive layout (Name ➔ Dotted Line ➔ Price) with descriptions. It uses a customized transparent shadcn/ui Card wrapper.
*   **Menu Section Component**: Coordinates lists of dishes in a responsive, two-column grid (`grid-cols-1 md:grid-cols-2`) optimized for mobile, tablet, and laptop screen sizes.
*   **Animations (Framer Motion)**:
    *   **Staggered Entry**: The parent `Menu` coordinates a cascading fade-and-rise entrance effect (`staggerChildren`) for its `MenuItem` children.
    *   **Dotted Line Draw-in**: The connecting line scales horizontally (`scaleX`) from left to right when scrolled into view.
    *   **Micro-interactions**: Hovering over menu items triggers card scaling (`scale: 1.02`), card lifting (`y: -4`), and brightens the dotted line into a solid one.
*   **Developer Environment**: Structured with React 19, Tailwind CSS v4 (using `@tailwindcss/vite`), and Vite.

---

## 🛠️ Tech Stack
*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vite.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **UI Helpers**: [shadcn/ui Separator](https://ui.shadcn.com/)

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js and `pnpm` (or `npm`) installed.

### Installation
1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the local development server:
   ```bash
   pnpm run dev
   ```

3. Open the browser link (usually `http://localhost:5173`) to view the application.
