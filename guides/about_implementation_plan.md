# Implementation Plan: Creating the About Section

Welcome! This step-by-step guide is designed to walk you through building the **About** section for the Gericht Restaurant website.

The `About` section is a visual centerpiece of the homepage. It features a three-column desktop layout that tells the stories of "About Us" and "Our History," split by a vertical chef's knife. In the background, a large, faded watermark of the Gericht logo adds texture, and subtle 																																																								entry animations give the section a luxury feel.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [About.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/About.jsx) (currently empty).
* **Assets**:
  * Faded watermark background: [G.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/G.png).
  * Centerpiece divider image: [knife.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/knife.png).
* **Reusable Components**:
  * [Separator](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/separator.jsx) from shadcn/ui to build elegant dividers.
  * [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) from shadcn/ui for the buttons.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Set Up Component structure & Imports

Open [About.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/About.jsx). At the top of the file, set up the standard component structure:

1. Import **React** (standard practice).
2. Import **motion** from `framer-motion` to handle scroll-driven entrances and background animations.
3. Import the shadcn/ui **Separator** and **Button** components from their respective folders under `@/components/ui`.
4. Import the watermark image (`G.png`) and the knife image (`knife.png`) from the assets folder.
5. Create a functional component named `About` and export it as the default export.

---

### 2. Scaffold the Section Wrapper & Watermark Background

The background uses a large watermark centered behind the content columns.

1. **Section Wrapper**: Create a semantic `<section>` tag with an ID of `about`.
   * **Tailwind Classes**:
     * `relative` (critical, so the watermark image can be placed absolute relative to this section)
     * `min-h-screen` (takes up the full viewport height)
     * `bg-black` (deep black background)
     * `flex` `items-center` `justify-center` (centers the content grid vertically and horizontally)
     * `py-20 px-6 md:px-12 lg:px-24` (provides breathing space on all viewports)
     * `overflow-hidden` (prevents horizontal scroll bars from animating elements and the large watermark)
2. **Watermark G Logo Image**: Add a `<motion.img>` tag directly inside the section wrapper.
   * Set its source to the imported `G.png` asset.
   * **Tailwind Classes**:
     * `absolute` (allows independent positioning behind text)
     * `inset-0` `m-auto` (centers the absolutely positioned element inside the parent wrapper)
     * `-z-10` (pushes it visually behind all text and the grid contents)
     * `opacity-15` or `opacity-20` (subtly fades the image so it doesn't distract from text legibility)
     * `w-[80%] md:w-[60%] lg:w-[45%]` (responsive sizing so it is huge but fits inside the viewport)
     * `max-w-[450px]` (limits maximum width so it remains a subtle detail)

---

### 3. Create the Three-Column Grid Layout

Directly under the background image, create the main content container:

1. **Grid Container**: Use a `div` element.
   * **Tailwind Classes**:
     * `grid` (activates CSS Grid layout)
     * `grid-cols-1 md:grid-cols-3` (1 column on mobile, 3 columns starting at the medium desktop breakpoint)
     * `gap-12 md:gap-8` (adds gutter spacing between the columns)
     * `max-w-[1200px]` `w-full` `mx-auto` (horizontal centering and max-width boundaries)
     * `items-center` (aligns left, center, and right blocks vertically)
     * `z-10` (forces the grid to stack above the background watermark)

---

### 4. Build the Left Column ("About Us")

The left column displays the restaurant's general introduction.

1. **Column Wrapper**: Use a `<motion.div>` with `md:col-span-1` to take up one-third of the desktop grid.
   * **Tailwind Classes**:
     * `flex` `flex-col` `justify-center` (centers elements vertically)
     * `items-center md:items-end` (centers text on mobile, aligns right on desktop screens)
     * `text-center md:text-right` (centers paragraph text on mobile, right-aligns on desktop)
     * `w-full`
2. **Section Title**: Use an `<h2>` or `<h1>` heading.
   * **Tailwind Classes**:
     * `font-base` (premium Cormorant Upright serif font)
     * `text-4xl md:text-5xl lg:text-6xl` (responsive fluid typography)
     * `text-gold` (brand accent gold color)
     * `font-bold` `uppercase` `tracking-wider`
   * Set text to: `"About Us"`.
3. **Separator Divider**: Render the shadcn/ui `<Separator />` component.
   * **Tailwind Classes**:
     * `bg-gold/30` (subtle gold line color)
     * `my-4` (vertical spacing)
     * `w-16` (fixed width to keep it elegant)
4. **Description Copy**: Use a `<p>` tag.
   * **Tailwind Classes**:
     * `font-alt` (Open Sans body font)
     * `text-white/70` (slightly dimmed text for superior dark-mode contrast)
     * `text-sm md:text-base`
     * `leading-relaxed` (readable line height)
     * `mb-6` (vertical separation from the button)
   * Insert your text describing the origin and mission of the restaurant.
5. **CTA Button**: Use the shadcn/ui `<Button>` with the custom gold outline styling.
   * **Tailwind Classes**:
     * `rounded-none` (sharp, premium corners)
     * `border-gold` `text-gold`
     * `hover:bg-gold` `hover:text-black`
     * `uppercase` `tracking-wider` `transition-all` `duration-300`
   * Set text label: `"Know More"`.

---

### 5. Build the Center Column (Decorative Knife)

The middle column holds the signature chef's knife image.

1. **Column Wrapper**: Use a `div` element with `md:col-span-1`.
   * **Tailwind Classes**:
     * `flex` `justify-center` `items-center` (centers the knife horizontally)
     * `relative` `z-20` (forces the knife to stack above the text columns slightly)
2. **Knife Wrapper / Image**: Use a `<motion.img>` tag.
   * Set its source to the imported `knife.png` asset.
   * **Tailwind Classes**:
     * `-mt-20 -mb-20 md:-mt-32 md:-mb-32` (negative margins that pull the knife vertically to overlap the header and footer sections above and below)
     * `h-[350px] md:h-[500px] lg:h-[600px]` (gives the knife a commanding vertical height)
     * `object-contain` (prevents scaling distortion)
     * `drop-shadow-2xl` (adds depth relative to the background)

---

### 6. Build the Right Column ("Our History")

The right column mirrors the layout of the left column but is left-aligned on desktop screens.

1. **Column Wrapper**: Use a `<motion.div>` with `md:col-span-1`.
   * **Tailwind Classes**:
     * `flex` `flex-col` `justify-center`
     * `items-center md:items-start` (centers on mobile, aligns left on desktop screens)
     * `text-center md:text-left` (centers text on mobile, left-aligns on desktop)
     * `w-full`
2. **Section Title**: Use an `<h2>` heading.
   * **Tailwind Classes**:
     * `font-base` `text-4xl md:text-5xl lg:text-6xl` `text-gold` `font-bold` `uppercase` `tracking-wider`
   * Set text to: `"Our History"`.
3. **Separator Divider**: Render the shadcn/ui `<Separator />` component.
   * **Tailwind Classes**:
     * `bg-gold/30` `my-4` `w-16`
4. **Description Copy**: Use a `<p>` tag.
   * **Tailwind Classes**:
     * `font-alt` `text-white/70` `text-sm md:text-base` `leading-relaxed` `mb-6`
   * Insert your text describing the culinary heritage of the kitchen.
5. **CTA Button**: Use the shadcn/ui `<Button>` with the identical custom gold outline styling.
   * **Tailwind Classes**:
     * `rounded-none` `border-gold` `text-gold` `hover:bg-gold` `hover:text-black` `uppercase` `tracking-wider` `transition-all` `duration-300`
   * Set text label: `"Know More"`.

---

### 7. Configure Framer Motion Animations

To breathe life into the section, attach animation parameters to the components:

1. **Background Watermark Rotation**:
   * For the watermark `<motion.img>`, configure a continuous, subtle background rotation.
   * 												**Animation Details**:
     * Set initial rotation to `0` degrees.
     * Animate rotation to `360` degrees.
     * Set transition to loop infinitely with a linear easing and a very slow duration (e.g., `40` to `60` seconds) so the motion is barely perceptible.
2. **Left Column Entrance**:
   * For the left column's `<motion.div>`, set up a fade-and-slide entrance when scrolled into view.
   * **Animation Details**:
     * Start off-screen left (`x: -50`) with an opacity of `0`.
     * Animate to its resting grid position (`x: 0`) and fully visible (`opacity: 1`).
     * Set `viewport={{ once: true }}` so it only animates on the first scroll down.
     * Apply a duration of `0.8` seconds with `easeOut` easing.
3. **Right Column Entrance**:
   * For the right column's `<motion.div>`, set up a mirrored fade-and-slide entrance.
   * **Animation Details**:
     * Start off-screen right (`x: 50`) with an opacity of `0`.
     * Animate to resting position (`x: 0`) and fully visible (`opacity: 1`).
     * Use the same viewport configurations and duration (`0.8` seconds) to sync with the left column.
4. **Center Knife Entrance**:
   * For the centerpiece `<motion.img>`, set up a scale and fade entry.
   * **Animation Details**:
     * Start slightly shrunk (`scale: 0.8`) with an opacity of `0`.
     * Animate to full scale (`scale: 1`) and fully visible (`opacity: 1`).
     * Assign a slightly longer duration (e.g., `1.0` seconds) or a slight delay (e.g., `0.2` seconds) so that the knife locks into place right after the text fades in.
5. **Button Hover Animations**:
   * Convert your CTA button wrappers (or the buttons themselves) into motion tags.
   * Add a subtle scale-up hover attribute (e.g., `scale: 1.05`) with a fast duration transition.

---

## 🧪 Verification Plan & Testing

Confirm your layout and aesthetics by doing the following steps:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render both `Hero` and `About` components in your layout structure:
  ```jsx
  import React from 'react';
  import Hero from './sections/Hero';
  import About from './sections/About';

  function App() {
    return (
      <main className="bg-black text-white min-h-screen">
        {/* Render the Hero and About sections sequentially */}
        <Hero />
        <About />
      </main>
    );
  }

  export default App;
  ```

### 2. Layout & Responsiveness Check

* Verify the following layout characteristics on your browser dev tools:
  * **Desktop Viewport**: The text sections sit in column 1 and column 3, while the knife sits directly in the center column. The watermark logo is centered behind all three.
  * **Mobile Viewport**: The grid collapses into a stacked column layout. Verify that the elements stack in a readable order (e.g., Left Text Column -> Knife Image -> Right Text Column).
  * **Overlap Validation**: Verify that the knife extends beyond the top and bottom borders of the section wrapper, visually overlapping adjacent sections.

### 3. Motion & Legibility Verification

* Scroll into the section:
  * Verify the left column slides in from the left, and the right column slides in from the right.
  * Verify the knife scales up smoothly.
  * Check that the background watermark G logo rotates extremely slowly.
  * Read the text descriptions over the watermark. Confirm the watermark's opacity is low enough that all paragraph copy remains perfectly legible.
