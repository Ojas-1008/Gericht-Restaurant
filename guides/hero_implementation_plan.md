# Implementation Plan: Creating the Hero Component

Welcome! This step-by-step guide is designed to help you build the **Hero** section for the Gericht Restaurant website. 

The `Hero` section is the first visual element users see when they load the website. It needs to establish a premium, high-end fine dining atmosphere right away. You will build a responsive, split-screen layout with elegant typography, a gold-themed layout, and smooth entry animations powered by Framer Motion.

---

## 📂 Project Context & Structure
Before you begin, let's review where all the required assets and files are located:
*   **Target File**: [Hero.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Hero.jsx) (currently empty).
*   **Assets**: The high-quality food showcase image is located at [welcome.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/welcome.png).
*   **Reusable Components**: 
    *   [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for the section taglines.
    *   [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) (from shadcn/ui) for call-to-action actions.
*   **Design Tokens**:
    *   **Background**: Deep dark background using Tailwind's `bg-black` theme color.
    *   **Accent Color**: Theme-defined gold (`--color-gold` / `text-gold` / `border-gold`).
    *   **Fonts**: Base serif header font (`font-base`) and alternative sans-serif body font (`font-alt`).

---

## 🛠️ Step-by-Step Implementation Guide

### 1. File Setup & Import Dependencies
Begin by opening your target file: [Hero.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Hero.jsx). You'll need to set up standard imports at the very top:
1.  Import **React** (optional, but standard practice).
2.  Import **motion** from `framer-motion` to handle high-performance hardware-accelerated animations.
3.  Import the custom **SubHeading** component using the path mapping alias `@/components/SubHeading` or relative paths.
4.  Import the shadcn/ui **Button** component from `@/components/ui/button`.
5.  Import the hero showcase food image (`welcome.png`) from the assets folder.

---

### 2. Scaffold the Main Grid Container
Create a functional component called `Hero` and export it as the default export.
1.  **Outer Section Wrapper**: Wrap the entire section in a `<section>` semantic HTML tag.
    *   Use an ID of `home` so that it can be navigated to via the navbar links.
    *   Apply the following Tailwind classes to style it:
        *   `bg-black` (background color)
        *   `min-h-screen` (takes up at least the full viewport height)
        *   `flex` `items-center` `justify-center` (centers the container inside)
        *   `py-16 md:py-24 px-6 md:px-12 lg:px-24` (responsive padding to ensure it breathes on all screen sizes)
2.  **Inner Grid Wrapper**: Inside the section, create a grid system to split the layout.
    *   Apply the following Tailwind classes:
        *   `grid` (turns it into a CSS Grid container)
        *   `grid-cols-1 md:grid-cols-2` (1 column on mobile, 2 columns on medium screens and larger)
        *   `gap-12 md:gap-16` (sets spacing between the two columns)
        *   `max-w-[1200px]` `w-full` `mx-auto` (centers the layout wrapper horizontally and limits its max width)
        *   `items-center` (aligns items vertically in the center of the grid row)

---

### 3. Build the Left Text Block (Column 1)
The left side focuses on copy and branding. Wrap this column in a container and apply the following Tailwind classes:
*   `flex` `flex-col` `justify-center` `items-start` `w-full` (stacks text elements vertically and aligns them to the left)

Inside this column container, add:
1.  **Tagline / SubHeading**:
    *   Instantiate the `<SubHeading>` component.
    *   Pass the string `"Chase The New Flavour"` as the `title` prop.
2.  **Main Headline**:
    *   Use a semantic `<h1>` tag.
    *   Apply these Tailwind classes:
        *   `font-base` (Cormorant Upright serif font)
        *   `text-gold` (uses the theme's custom `#dcca87` color)
        *   `uppercase` (transforms letters to uppercase)
        *   `text-5xl md:text-6xl lg:text-7xl` (responsive fluid typography)
        *   `font-bold` (bold font weight)
        *   `leading-tight` (cleans up line spacing on large titles)
        *   `mb-6` (adds vertical spacing below the title)
        *   `tracking-wider` (applies elegant letter-spacing)
    *   Set the title text: `"The Key To Fine Dining"`.
3.  **Description Paragraph**:
    *   Use a paragraph `<p>` tag.
    *   Apply these Tailwind classes:
        *   `font-alt` (Open Sans sans-serif font)
        *   `text-white/70` (softer white with opacity for readability)
        *   `text-base md:text-lg` (responsive text size)
        *   `leading-relaxed` (adds generous line spacing to body text)
        *   `mb-8` (adds vertical space below the paragraph)
        *   `max-w-[450px]` (limits paragraph width to prevent excessively long lines on wide monitors)
    *   Insert description copy details explaining the fine dining experience.
4.  **Call to Action Button**:
    *   Render the shadcn/ui `<Button>` component.
    *   Assign the `variant="outline"` prop.
    *   Apply these Tailwind classes to override default styling:
        *   `rounded-none` (gives it sharp, premium, zero-border-radius corners)
        *   `border-gold` (custom gold border color)
        *   `text-gold` (custom gold text color)
        *   `hover:bg-gold` `hover:text-black` (transitions background to gold and text to black on hover)
        *   `uppercase` `tracking-wider` (matches the header's uppercase theme)
        *   `transition-all` `duration-300` (animates style changes smoothly)
        *   `px-6` `h-10` (sets horizontal padding and height)
    *   Set button label: `"Book Table"`.

---

### 4. Build the Right Image Block (Column 2)
The right side hosts the signature food photo.
1.  **Image Container**:
    *   Create a container `div` using:
        *   `flex` `justify-center` `items-center` `w-full` (centers the image horizontally and vertically within its grid slot)
2.  **Image Element**:
    *   Add an `<img>` tag with `src={welcome.png}` and `alt="Gericht signature food plate"`.
    *   Apply these Tailwind classes:
        *   `w-full` `max-w-[450px] md:max-w-none` (ensures it scales dynamically and isn't too huge on mobile)
        *   `lg:w-[85%]` (shrinks it slightly on extra-wide screens to look proportioned)
        *   `object-contain` (preserves image aspect ratio)
        *   `border-2` `border-gold` (adds a thin golden border frame)
        *   `shadow-2xl` `shadow-gold/20` (adds a soft, luxury glowing gold drop-shadow effect)

---

### 5. Incorporate Framer Motion Animations
To turn the layout into a premium, interactive experience, let's implement viewport-triggered animations:
1.  **Left Column Entrance**:
    *   Replace the container elements of the text block with motion components (e.g., `<motion.div>`).
    *   Configure structural animation props:
        *   `initial`: Start hidden and shifted to the left (e.g., `opacity: 0, x: -50`).
        *   `whileInView`: Animate to default visibility and positioning (e.g., `opacity: 1, x: 0`).
        *   `viewport`: Limit the trigger to execute only once (`once: true`) so that scrolling up and down doesn't restart it repeatedly.
        *   `transition`: Define duration (e.g., `0.8` seconds) and custom easing functions (like `easeOut`).
2.  **Right Column Entrance**:
    *   Replace the image wrapper element (or the image itself) with a motion tag (e.g., `<motion.div>` or `<motion.img>`).
    *   Configure structural animation props:
        *   `initial`: Start hidden and shifted to the right (e.g., `opacity: 0, x: 50`).
        *   `whileInView`: Animate to standard state (`opacity: 1, x: 0`).
        *   `viewport`: Run only once (`once: true`).
        *   `transition`: Match the duration of the left column (`0.8` seconds) for a symmetrical split entrance effect.
3.  **CTA Button Hover Pulse**:
    *   Convert the Button into a motion-enabled component, or wrap it in a `<motion.div>`.
    *   Add hover properties:
        *   `whileHover`: Add a subtle scale-up effect (e.g., `scale: 1.05`).
        *   `transition`: Configure a fast spring or ease effect (e.g., duration `0.2` seconds) so the feedback feels snappy when hovered over.

---

## 🧪 Verification Plan & Testing

Follow these validation steps to confirm your implementation is solid:

### 1. Integration Check
*   Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
*   Import and render the newly written `Hero` component in your layout:
    ```jsx
    import React from 'react';
    import Hero from './sections/Hero';

    function App() {
      return (
        <main className="bg-black text-white min-h-screen">
          {/* Render the Hero section */}
          <Hero />
        </main>
      );
    }

    export default App;
    ```

### 2. Visual & Layout Review
*   Start your local development server by executing `pnpm dev` (if not already running).
*   Open the application in your browser and check the layout:
    *   **Desktop Layout**: Confirm the text block sits neatly on the left and the food plate image sits on the right.
    *   **Mobile Layout**: Shrink your browser size or toggle mobile emulation in developer tools. Confirm the layout collapses cleanly into a single vertical column, with the text block stacking above the image.
    *   **Aesthetic Inspection**: Verify the background is solid black, the heading text has the premium serif Cormorant Upright font in gold, and the food image exhibits the thin golden outline or drop-shadow glow.

### 3. Motion & Animation Verification
*   Refresh the page:
    *   Confirm the left-side text slides in smoothly from the left edge.
    *   Confirm the right-side image slides in smoothly from the right edge.
    *   Hover your cursor over the "Book Table" button: check that it scales up gently with an interactive micro-animation.
