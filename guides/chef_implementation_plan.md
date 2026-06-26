# Implementation Plan: Creating the Chef Section

Welcome! This step-by-step guide is designed to walk you through building the **Chef** section for the Gericht Restaurant website.

The `Chef` section introduces the head chef with a personal touch. It features a responsive two-column layout: a left column showcasing the chef's portrait and a right column highlighting the chef's philosophy inside an elegant quote block, followed by the chef's name, role, and signature. Hardware-accelerated animations will bring this introduction to life.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [Chef.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Chef.jsx) (currently empty).
* **Assets**:
  * Chef portrait: [chef.png](file:///				c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/chef.png).
  * Decorative double quote mark: [quote.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/quote.png).
  * Chef's signature image: [sign.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/sign.png).
* **Reusable Components**:
  * [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for header taglines.
  * [Card](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/card.jsx) from shadcn/ui.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Component Setup & Imports

Open [Chef.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Chef.jsx). Start by setting up the standard framework at the top of the file:

1. Import **React** (standard practice).
2. Import **motion** from `framer-motion` for page exit, entry, viewport-triggered, and text stagger transitions.
3. Import the custom **SubHeading** component from `@/components/SubHeading`.
4. Import the shadcn/ui **Card** component from `@/components/ui/card`.
5. Import the portrait image (`chef.png`), the quote icon (`quote.png`), and the signature (`sign.png`) from the assets folder.
6. Create a functional component named `Chef` and export it as the default.

---

### 2. Scaffold the Two-Column Section Grid

Create a responsive container layout that adapts seamlessly to desktop and mobile screens:

1. **Section Wrapper**: Use a `<section>` tag with an ID of `chef`.
   * **Tailwind Classes**:
     * `bg-black` (solid dark background)
     * `min-h-screen` (takes up at least the full viewport)
     * `py-20 px-6 md:px-12 lg:px-24` (responsive padding borders)
     * `flex` `items-center` `justify-center` (centers grid contents vertically and horizontally)
     * `overflow-hidden` (prevents animations from breaking layout bounds)
2. **Grid Layout Wrapper**: Create an inner container `div`.
   * **Tailwind Classes**:
     * `grid` (CSS Grid activation)
     * `grid-cols-1 md:grid-cols-2` (1 column on mobile, 2 columns from the medium desktop breakpoint up)
     * `gap-12 md:gap-16` (sets gutter spacing between portrait and text column)
     * `max-w-[1200px]` `w-full` `mx-auto` (centers layout block and caps its growth width)
     * `items-center` (aligns items vertically in the center of the grid row)

---

### 3. Build Column 1: Chef Portrait (Left)

The left side houses the chef portrait and slides in dynamically:

1. **Column Wrapper**: Add a `div` element.
   * **Tailwind Classes**: `flex justify-center items-center w-full`
2. **Chef Image**: Render a `<motion.img>` tag.
   * Set the image source to `chef.png` and add alternative description text.
   * **Tailwind Classes**:
     * `w-full` `max-w-[400px] md:max-w-none` (ensures image scales correctly on mobile and expands on desktop)
     * `h-auto` `object-contain` (preserves aspect ratio)
   * **Animations**:
     * Configure entrance states: start shifted slightly left (`x: -60`), rotated slightly tilted (`rotate: -5`), and invisible (`opacity: 0`).
     * Transition target: return to normal position (`x: 0`), zero rotation (`rotate: 0`), and fully visible (`opacity: 1`).
     * Set viewport options to run once (`once: true`) with a smooth duration (e.g., `1.0` seconds) and `easeOut` easing.

---

### 4. Build Column 2: Chef's Philosophy (Right)

The right side features headings, text quotes, and signature branding:

1. **Column Wrapper**: Use a `div` element.
   * **Tailwind Classes**: `flex flex-col justify-center items-start w-full`
2. **Tagline / SubHeading**: Render the `<SubHeading />` component with `title="Chef's Word"`.
3. **Main Headline**: Use an `<h2>` element.
   * **Tailwind Classes**:
     * `font-base` (Cormorant Upright serif font)
     * `text-gold` (accent brand gold color)
     * `text-4xl md:text-5xl lg:text-6xl` (responsive fluid heading text)
     * `font-semibold` `capitalize` `tracking-wider` `mb-10`
   * Set text: `"What We Believe In"`.

---

### 5. Build the Quote Area (shadcn/ui Card Integration)

Create the quote container using shadcn Card component with customized accents:

1. **Quote Card Wrapper**: Render a `<Card>` element.
   * **Tailwind Classes**:
     * `bg-transparent` (removes rigid background)
     * `border-l-4` `border-gold` (adds a thick gold border on the left side only)
     * `border-y-0` `border-r-0` `rounded-none` (removes top, bottom, right borders and rounded corners)
     * `shadow-none` (removes default shadow values)
     * `p-6` `mb-8` `w-full` (adds internal spacing and space underneath the block)
2. **Quote Layout**: Inside the Card, design the quote styling:
   * **Double Quote Icon**: Add an `<img>` tag with `src={quote.png}` and classes `w-[40px] h-auto object-contain inline-block mr-3 mb-2 align-top` (floats the double quotes icon inline before the text).
   * **Quote Text Paragraph**: Use a `<p>` tag.
   * **Tailwind Classes**:
     * `font-alt` (Open Sans body font)
     * `text-white/70` `italic` (dimmed white and italicized styling for quote blocks)
     * `text-base md:text-lg` `leading-relaxed` (readable size and height spacing)
     * `inline` (allows text to flow immediately next to the quote icon)
   * Set text details: a paragraph expressing the chef's belief in the kitchen's dedication and standard.

---

### 6. Build the Signature & Title Block

Directly under the Quote Card, render the signature fields:

1. **Signatures Wrapper**: Add a `div` element.
   * **Tailwind Classes**: `flex flex-col items-start w-full`
2. **Chef Name**: Add a `<p>` element.
   * **Tailwind Classes**:
     * `font-base` (Cormorant Upright font)
     * `text-gold` (brand gold color)
     * `text-xl md:text-2xl`
     * `font-semibold` `uppercase` `tracking-wider` `mb-1`
   * Set text: `"Kevin Luo"`.
3. **Chef Title**: Add a `<p>` element.
   * **Tailwind Classes**:
     * `font-alt` (Open Sans font)
     * `text-white/50` (dimmed white color)
     * `text-sm md:text-base`
   * Set text: `"Chef & Founder"`.
4. **Signature Image**: Add an `<img>` tag with `src={sign.png}` and alternative description text.
   * **Tailwind Classes**: `w-32 md:w-40 h-auto object-contain mt-6` (adds vertical spacing and limits signature size).

---

### 7. Implement Staggered Text Animations (Framer Motion)

To make the text feel elegant, orchestrate the fading animation:

1. **Right Column Transition Wrapper**: Convert the right Column Wrapper `div` to a `<motion.div>`.
   * Set variants to stagger its children elements (e.g., tagline, heading, card, signature wrapper).
   * **Animation Details**:
     * `initial`: set opacity of parent container to `0`.
     * `whileInView`: set opacity of parent container to `1`.
     * `viewport`: run animation only once (`once: true`).
     * `transition`: add `staggerChildren: 0.2` (each child fades in one after another).
2. **Child Animations**:
   * Convert the heading, Card, and signature wrapper into motion components (e.g., `<motion.h2>`, `<motion.div>` for card, `<motion.div>` for signatures).
   * Assign child animation variants that start invisible (`opacity: 0, y: 15`) and animate to fully visible and in place (`opacity: 1, y: 0`) when triggered.

---

## 🧪 Verification Plan & Testing

Confirm your layout and aesthetics by doing the following steps:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render `Hero`, `About`, `Menu`, and `Chef` components in your layout structure:
  ```jsx
  import React from 'react';
  import Hero from './sections/Hero';
  import About from './sections/About';
  import Menu from './sections/Menu';
  import Chef from './sections/Chef';

  function App() {
    return (
      <main className="bg-black text-white min-h-screen">
        {/* Render sections sequentially */}
        <Hero />
        <About />
        <Menu />
        <Chef />
      </main>
    );
  }

  export default App;
  ```

### 2. Layout & Responsive Grid Verification

* Open the browser dev tools and view the Chef section:
  * **Desktop Viewport**: Ensure the portrait image sits on the left side, and the chef description text block sits on the right.
  * **Mobile Viewport**: Ensure the layout collapses vertically with the portrait image stacking cleanly above the text description block.

### 3. Styling & Animation Check

* Scroll into the Chef section:
  * Check that the chef portrait slides in from the left with a subtle tilt rotation (`rotate: -5` back to `rotate: 0`).
  * Verify that the quote text and signatures stagger in gracefully after the portrait animation completes.
  * Ensure the quote area displays the solid gold left border overlay cleanly.
