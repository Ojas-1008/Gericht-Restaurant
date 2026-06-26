# Gericht Restaurant 🍽️

An elegant, premium modern restaurant landing page built with React, Vite, and Tailwind CSS.

## 🚀 Current Project Status
We have successfully implemented the **Navbar** header, **Hero** section, **About** section, **SubHeading** component, **MenuItem** component, and the **Menu** section, creating a fully animated, highly responsive landing page.

### Done:
*   **Hero Component**: A premium split-screen landing presentation featuring a responsive two-column grid, metallic gradient headers, ambient glows, and a floating signature dish showcase.
*   **About Component**: A stunning 3-column split presentation comprising "About Us" and "Our History" sections, balanced with symmetric 50-word copy blocks, separated by a central floating knife graphic.
*   **Navbar Component**: Pinned global header containing brand logo, responsive navigation lists, desktop separator dividers, and custom Book Table action CTA.
*   **Scroll State Listener Hook**: Sets up a cleanup-safe window scroll listener that dynamically transitions the header from a spacious transparent layout to a condensed, border-trimmed glassmorphism backdrop (`backdrop-blur-md bg-black/80`) once scrolled past `50px`.
*   **SubHeading Component**: Multi-element styled title introducing restaurant sections, featuring entry slide-ins and scaling separators.
*   **MenuItem Component**: High-end dish/drink card featuring a responsive layout (Name ➔ Dotted Line ➔ Price) with descriptions. It uses a customized transparent shadcn/ui Card wrapper.
*   **Menu Section Component**: Coordinates lists of dishes in a responsive, two-column grid (`grid-cols-1 md:grid-cols-2`) optimized for mobile, tablet, and laptop screen sizes.
*   **Chef Component**: A highly immersive, responsive two-column grid presentation displaying the chef's culinary philosophy. It features custom-designed blockquote cards with accent borders, names, titles, and signature images.
*   **Intro Component**: A cinematic full-screen HTML5 video background display featuring loop control, native media control hiding, inline playback configuration, and browser autoplay optimization settings.
*   **AwardCard Component**: Premium award card featuring responsive image scaling, typography resizing, and dynamic entrance animation. Uses `framer-motion`'s custom wrapper API.
*   **Dynamic Awards List**: Integrated all restaurant awards (Bib Gourmand, Rising Star, AA Hospitality, and Outstanding Chef) into `App.jsx`, dynamically rendered using clean configuration arrays.
*   **Animations & Micro-interactions**:
    *   **Chef Image Entrance**: An entrance transition that slides the chef image in from the left while rotating it from `-5deg` to its final alignment.
    *   **Staggered Text Cascade**: Staggered cascading animations (`staggerChildren`) coordinating the entrance of the chef's words, quote cards, and signature panels.
    *   **Video Playback Toggle**: An interactive dark overlay fading out (`opacity: 0`) and setting dynamic pointer events (`pointer-events-none`) when the video starts playing, letting users watch the video cleanly.
    *   **Pulsing Play Button**: A circular play/pause button trigger featuring an infinite pulsing transition (`scale: [1, 1.08, 1]`) to draw user interaction.
    *   **About Section Viewport Entrances**: Opposing horizontal slide-ins (`x: -50` / `x: 50`) for the text content triggered as they scroll into view.
    *   **Rotating Watermark**: Slow, continuous infinite rotation (`30s` linear loop) on the absolute background watermark.
    *   **Central Knife Floating Loop**: Gentle infinite floating translation (`y: [0, -15, 0]`) on the central knife asset overlaid on a warm backdrop radial glow.
    *   **Hero Entrance Orchestration**: Staggered child fade-and-rise animations using matching physics parameters (stiffness `100`, damping `10`) to slide panels in from opposite horizontal directions synchronously.
    *   **Showcase Plate Floating Loop**: High-performance continuous floating loop translation animation on the food plate image.
    *   **Micro-Parallax Hover**: Decorative offset gold wireframe border behind the food image translates dynamically in reaction to user cursor hovering.
    *   **Button Affordance**: Hover-triggered sliding indicator using rotating `ArrowUpRight` icon translations.
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
