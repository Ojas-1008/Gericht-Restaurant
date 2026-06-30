# Implementation Plan: Creating the Find Us / Contact Section

Welcome! This step-by-step guide is designed to walk you through building the **Find Us / Contact** section for the Gericht Restaurant website.

The `FindUs` section provides details on opening hours and address locations. It features a responsive two-column grid on desktop: a left column structured with address information, opening schedule paragraphs split by elegant separators, and a hover-active contact button; and a right column highlighting the signature restaurant exterior graphic.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [FindUs.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/FindUs.jsx) (currently empty).
* **Assets**:
  * Find Us graphic: [findus.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/findus.png).
* **Reusable Components**:
  * [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for taglines.
  * [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) from shadcn/ui.
  * [Separator](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/separator.jsx) from shadcn/ui.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. 	

Open [FindUs.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/FindUs.jsx). Set up your standard functional structure:

1. Import **React** (standard practice).
2. Import **motion** from `framer-motion` to handle scroll-triggered entrance slides and button hovers.
3. Import the custom **SubHeading** component from `@/components/SubHeading`.
4. Import the shadcn/ui **Button** and **Separator** components from their folders under `@/components/ui`.
5. Import the graphic asset (`findus.png`) from the assets folder.
6. Create a functional component named `FindUs` and export it as the default.

---

### 2. Scaffold the Two-Column Grid

Create a responsive grid container that organizes contents side-by-side:

1. **Section Wrapper**: Use a `<section>` tag with the ID `contact`.
   * **Tailwind Classes**:
     * `bg-black` (deep black canvas color)
     * `min-h-screen` (occupies at least the full height of the viewport)
     * `py-20 px-6 md:px-12 lg:px-24` (responsive padding padding)
     * `flex` `items-center` `justify-center` (centers contents vertically and horizontally)
     * `overflow-hidden` (prevents animations from breaking page limits)
2. **Grid Layout Wrapper**: Add an inner container `div`.
   * **Tailwind Classes**:
     * `grid` (CSS Grid activation)
     * `grid-cols-1 md:grid-cols-2` (1 column on mobile, 2 columns starting on medium desktop breakpoint `768px` and up)
     * `gap-12 md:gap-16` (sets spacing between content and graphic)
     * `max-w-[1200px]` `w-full` `mx-auto` (horizontal centering and max-width boundaries)
     * `items-center` (aligns items vertically in the center of the grid row)

---

### 3. Build Column 1: Contact details (Left)

The left column organizes address layout fields. Wrap this section in a `<motion.div>`:

1. **Column Wrapper**: Apply classes `	` (vertical stacking, aligned left).
2. **Tagline / SubHeading**: Render the `<SubHeading />` component. Set its `title` prop to `"Contact"`.
3. **Main Heading**: Add an `<h2>` element.
   * **Tailwind Classes**:
     * `font-base` (premium Cormorant Upright serif font)
     * `text-gold` (accent brand gold color)
     * `text-4xl md:text-5xl lg:text-6xl` (responsive fluid typography size)
     * `font-semibold` `capitalize` `tracking-wider` `mb-8`
   * Set text: `"Find Us"`.
4. **Address Paragraph**: Add a `<p>` element.
   * **Tailwind Classes**:
     * `font-alt` (Open Sans body font)
     * `text-white/70` `text-sm md:text-base` (dimmed white color)
     * `leading-relaxed` (provides comfortable lines height separation to prevent cramped text blocks)
     * `mb-6`
   * Set copy address text: `"Lane Ends Bungalow, Whatsteads Croft Road, Gatherwell, West Yorkshire, WS4 9FL"`.				
5. **Divider line**: Render the shadcn/ui `<Separator />` component.
   * **Tailwind Classes**: `bg-gold/20 my-6 w-full max-w-[100px]` (caps divider width for elegance).
6. **Opening Hours Block**:
   * **Subheading Title `<p>`**:
     * **Tailwind Classes**: `font-base text-white text-xl md:text-2xl font-bold uppercase tracking-wider mb-4`
     * Set text: `"Opening Hours"`.
   * **Weekday Schedule `<p>`**:
     * **Tailwind Classes**: `font-alt text-white/70 text-sm md:text-base mb-2`
     * Set text: `"Mon - Fri: 10:00 am - 02:00 am"`.
   * **Weekend Schedule `<p>`**:
     * **Tailwind Classes**: `font-alt text-white/70 text-sm md:text-base mb-8`
     * Set text: `"Sat - Sun: 10:00 am - 03:00 am"`.
7. **Visit Us Button**: Render the shadcn/ui `<Button>` component with `variant="outline"`.
   * **Tailwind Classes**:
     * `rounded-none` (sharp luxury corners)
     * `border-gold` `text-gold` (accent golden outline)
     * `hover:bg-gold` `hover:text-black` (transitions colors: fills background with gold and changes text color to black on hover)
     * `uppercase` `tracking-wider` `transition-all` `duration-300`
     * `px-6` `h-10`
   * Set button label: `"Visit Us"`.

---

### 4. Build Column 2: Exterior Graphic (Right)

The right column highlights the contact visual. Wrap this section in a `<motion.div>`:

1. **Column Wrapper**: Apply classes `flex justify-center items-center w-full` (centers the graphic).
2. **Exterior Graphic Image**: Render an `<img>` tag with `src={findus.png}` and alternative description text.
   * **Tailwind Classes**:
     * `w-full` `max-w-[400px] md:max-w-none` (ensures image scales correctly on mobile and expands on desktop)
     * `h-auto` `object-contain` (preserves aspect ratio)

---

### 5. Configure Framer Motion Animations

Set up entry states to drive animations on scroll:

1. **Left Column Entrance**:
   * On the left Column Wrapper `<motion.div>`:
     * `initial={{ opacity: 0, x: -50 }}` (starts invisible, offset left)
     * `whileInView={{ opacity: 1, x: 0 }}` (fades in, slides to resting grid point)
     * `viewport={{ once: true }}` (triggers once on scroll)
     * `transition={{ duration: 0.8, ease: "easeOut" }}`
2. **Right Column Entrance**:
   * On the right Column Wrapper `<motion.div>`:
     * `initial={{ opacity: 0, x: 50 }}` (starts invisible, offset right)
     * `whileInView={{ opacity: 1, x: 0 }}`
     * `viewport={{ once: true }}`
     * `transition={{ duration: 0.8, ease: "easeOut" }}`
3. **Visit Us Hover Effect**:
   * Convert the Button element to a motion tag, or wrap it in a `<motion.div>`.
   * Add hover parameters: `whileHover={{ scale: 1.05 }}` combined with standard Tailwind CSS transitions for smooth color-fill effects.

---

## 🧪 Verification Plan & Testing

Follow these steps to confirm your layout:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render all sections including `FindUs`:
  ```jsx
  import React from 'react';
  import Hero from './sections/Hero';
  import About from './sections/About';
  import Menu from './sections/Menu';
  import Chef from './sections/Chef';
  import Intro from './sections/Intro';
  import Laurels from './sections/Laurels';
  import Gallery from './sections/Gallery';
  import FindUs from './sections/FindUs';

  function App() {
    return (
      <main className="bg-black text-white min-h-screen">
        {/* Render sections sequentially */}
        <Hero />
        <About />
        <Menu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
      </main>
    );
  }

  export default App;
  ```

### 2. Layout & Styling Checks

* Verify visual presentation in the browser:
  * **Desktop Viewport**: Ensure the contact headings, address blocks, schedule list, and CTA button are on the left side, and the exterior graphic sits centered on the right column.
  * **Mobile Viewport**: Ensure the columns stack vertically.
  * **Aesthetic Inspection**: Verify the address copy displays with generous space between lines (`leading-relaxed`), separated elegantly by the gold separator.

### 3. Transition & Hover Checks

* Scroll into the Find Us section:
  * Confirm the text block slides in from the left and the graphic slides in from the right.
  * Hover over the "Visit Us" button: verify the button scales up slightly, fills with gold background, and flips its text color to black.

