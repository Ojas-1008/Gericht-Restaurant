# Gericht Restaurant 🍽️

An elegant, premium modern restaurant landing page built with React, Vite, and Tailwind CSS.

## 🚀 Current Project Status
We have successfully implemented the **Navbar** header, **SubHeading** component, **MenuItem** component, and the **Menu** section, creating a fully animated, highly responsive landing page.

### Done:
*   **Navbar Component**: Pinned global header containing brand logo, responsive navigation lists, desktop separator dividers, and custom Book Table action CTA.
*   **Scroll State Listener Hook**: Sets up a cleanup-safe window scroll listener that dynamically transitions the header from a spacious transparent layout to a condensed, border-trimmed glassmorphism backdrop (`backdrop-blur-md bg-black/80`) once scrolled past `50px`.
*   **SubHeading Component**: Multi-element styled title introducing restaurant sections, featuring entry slide-ins and scaling separators.
*   **MenuItem Component**: High-end dish/drink card featuring a responsive layout (Name ➔ Dotted Line ➔ Price) with descriptions. It uses a customized transparent shadcn/ui Card wrapper.
*   **Menu Section Component**: Coordinates lists of dishes in a responsive, two-column grid (`grid-cols-1 md:grid-cols-2`) optimized for mobile, tablet, and laptop screen sizes.
*   **AwardCard Component**: Premium award card featuring responsive image scaling, typography resizing, and dynamic entrance animation. Uses `framer-motion`'s custom wrapper API.
*   **Dynamic Awards List**: Integrated all restaurant awards (Bib Gourmand, Rising Star, AA Hospitality, and Outstanding Chef) into `App.jsx`, dynamically rendered using clean configuration arrays.
*   **Animations & Micro-interactions**:
    *   **Navbar Page Entry**: Soft drop-down fade-in animation powered by custom spring physics (`staggerChildren` and `type: "spring"`).
    *   **Underline Grow Effect**: Desktop links feature a sliding underline border that scales from 0 to 100% width on hover.
    *   **Icon Hover Scale**: Lucide hamburger and exit icons smoothly scale up by 10% on mouse-hover.
    *   **Mobile Drawer Slide**: The full-screen mobile menu uses `AnimatePresence` to fade and slide down cleanly on open, and exit smoothly on close or link select.
    *   **Staggered Entry**: The parent `Menu` coordinates a cascading fade-and-rise entrance effect (`staggerChildren`) for its `MenuItem` children.
    *   **Dotted Line Draw-in**: The connecting line scales horizontally (`scaleX`) from left to right when scrolled into view.
    *   **Spring Physics**: Award cards feature organic spring movement (stiffness `70`, damping `18`), scaling up and sliding to the right slightly on hover.
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
