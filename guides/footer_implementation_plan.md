# Implementation Plan: Creating the Footer Section

Welcome! This step-by-step guide is designed to walk you through building the **Footer** section for the Gericht Restaurant website.

The `Footer` section serves as the closing signature of the page. It features the `FooterOverlay` pattern background, a centered "Subscribe to Our Newsletter" form block at the top, a three-column desktop grid for local contacts, branding/social channels, and working schedules in the center, and a standard copyright block at the very bottom.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [Footer.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Footer.jsx) (currently empty).
* **Background Overlay**: [FooterOverlay.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/FooterOverlay.jsx) (already implemented).
* **Assets**:
  * Gericht script logo: [gericht.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/gericht.png).
  * Decorative spoon SVG: [spoon.svg](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/spoon.svg).
* **Reusable Components**:
  * [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for newsletters.
  * [Input](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/input.jsx) from shadcn/ui.
  * [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) from shadcn/ui.
  * [Separator](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/separator.jsx) from shadcn/ui.
* **Icons**: Social networks: `Facebook`, `Twitter`, and `Instagram` from `lucide-react`.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Component Setup & Imports

Open [Footer.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Footer.jsx). Set up your standard functional structure:

1. Import **React** (standard practice).
2. Import **motion** from `framer-motion` to handle scroll-driven entrances and social icon lift micro-interactions.
3. Import `Facebook`, `Twitter`, and `Instagram` from the `lucide-react` library.
4. Import the **FooterOverlay** background pattern component from `@/components/FooterOverlay`.
5. Import the custom **SubHeading** component from `@/components/SubHeading`.
6. Import the shadcn/ui **Input**, **Button**, and **Separator** components from `@/components/ui`.
7. Import the logo graphic (`gericht.png`) and the spoon SVG (`spoon.svg`) from the assets folder.
8. Create a functional component named `Footer` and export it as the default.

---

### 2. Scaffold Outer Footer Wrapper & Background

Align the absolute background overlay behind your layout stack:

1. **Footer Wrapper**: Use a `<motion.footer>` tag as the main container.
   * **Tailwind Classes**:
     * `relative` `bg-black` `w-full` (occupies full width)
     * `flex` `flex-col` `justify-center` `items-center` (stacks items vertically and centers columns)
     * `py-20 px-6 md:px-12 lg:px-24` (responsive padding padding)
     * `overflow-hidden` (safeguards animations from page limits)
2. **Add Background Overlay**: Render the `<FooterOverlay />` component directly below the footer tag. Because the overlay is internally configured with absolute positioning and a z-index of `-10`, it automatically covers the background of this section.

---

### 3. Build the Newsletter Subscription Block

The newsletter container sits centered above the main footer columns. Create a wrapper `div`:

1. **Newsletter Container**:
   * **Tailwind Classes**:
     * `relative` `z-10` (forces the box to stack above the background overlay)
     * `w-full` `max-w-[800px]` (limits maximum width bounds)
     * `border` `border-gold/20` (adds a thin gold outline frame)
     * `bg-black` (solid background so the background pattern doesn't distract from text)
     * `py-12` `px-8` (internal padding)
     * `flex` `flex-col` `items-center` `justify-center` `text-center` `mb-20` (vertical stacking and alignment)
     * `shadow-lg`
2. **Tagline / SubHeading**: Render the `<SubHeading />` component. Set its `title` prop to `"Newsletter"`.
3. **Heading Title**: Add an `<h2>` element.
   * **Tailwind Classes**: `font-base text-gold text-3xl md:text-4xl lg:text-5xl font-semibold capitalize tracking-wider mb-4`
   * Set text: `"Subscribe to Our Newsletter"`.
4. **Description Paragraph**: Add a `<p>` element.
   * **Tailwind Classes**: `font-alt text-white/80 text-sm md:text-base mb-8`
   * Set copy text: `"And never miss latest Updates!"`.
5. **Form Input Row**: Create a `div` or `<form>` wrapper container.
   * **Tailwind Classes**: `flex flex-col sm:flex-row gap-4 w-full max-w-[620px] items-center justify-center` (stacks fields vertically on mobile, aligns horizontally on tablet/desktop)
6. **Email Input**: Render the shadcn/ui `<Input />` component.
   * Set attributes: `type="email"`, `placeholder="Enter your email address"`.
   * **Tailwind Classes**:
     * `bg-transparent` `border` `border-gold/30` `text-white` (accent borders)
     * `rounded-none` (sharp luxury corners)
     * `px-4` `py-2` `h-12` `w-full`
     * `focus-visible:ring-1` `focus-visible:ring-gold` `focus-visible:border-gold` `outline-none` (adds a premium golden border glow animation when focused)
     * `transition-all` `duration-300`
7. **Subscribe Button**: Render the shadcn/ui `<Button />` component with `variant="outline"`.
   * **Tailwind Classes**:
     * `rounded-none` `border-gold` `text-gold` `hover:bg-gold` `hover:text-black` (transitions background to gold and text color to black on hover)
     * `uppercase` `tracking-wider` `transition-all` `duration-300`
     * `px-8` `h-12` `w-full sm:w-auto`
   * Set button label: `"Subscribe"`.

---

### 4. Build the Three-Column Links Grid

Directly under the newsletter box, build the main navigation columns:

1. **Grid Container**: Create a `div` element.

   * **Tailwind Classes**:
     * `relative` `z-10` (keeps it layered above the background overlay)
     * `grid` (CSS Grid activation)
     * `grid-cols-1 md:grid-cols-3` (1 column on mobile, 3 columns side-by-side on desktop)
     * `gap-12 md:gap-8` (adds gutter spacing between columns)
     * `max-w-[1200px]` `w-full` `mx-auto` (horizontal boundaries)
     * `items-start` `text-center` (aligns items vertically to the top, text centered)
     * `mb-16`
2. **Column 1: Contact Us (Left)**:

   * Create a vertical wrapper `div` (`flex flex-col items-center w-full gap-4`).
   * **Header `<h3>`**: Styled with `font-base text-white text-2xl font-semibold mb-2 capitalize` (text: `"Contact Us"`).
   * **Address `<p>`**: Styled with `font-alt text-white/50 text-sm leading-relaxed` (text: `"9 W 53rd St, New York, NY 10019, USA"`).
   * **Phone Numbers `<p>`**: Styled similarly (text: `"+1 212-344-1230"`, `"+1 212-555-1230"`).
3. **Column 2: Brand Logo & Socials (Center)**:

   * Create a vertical wrapper `div` (`flex flex-col items-center w-full gap-6`).
   * **Brand Logo Image**: Render the `gericht.png` image with `w-[150px] object-contain`.
   * **Quote `<p>`**: Styled with `font-alt text-white/80 text-sm italic max-w-[350px] leading-relaxed` (text: `"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."`).
   * **Spoon Image**: Render `<img src={spoon} alt="spoon" className="w-[45px] object-contain mt-1" />` (rotates or positions the spoon logo decoration).
   * **Social Channels Wrapper `div`**: Create a flex row (`flex gap-4 mt-2`).
   * **Social Link Elements**: Wrap Lucide `<Facebook />`, `<Twitter />`, and `<Instagram />` icons inside `<motion.a>` anchor links.
     * **Tailwind Classes**: `text-white hover:text-gold transition-colors duration-300 cursor-pointer` (changes text to gold on hover)
     * **Animations**: Set `whileHover={{ y: -5 }}` to apply a hardware-accelerated lift transition when hovered.
4. **Column 3: Working Hours (Right)**:

   * Create a vertical wrapper `div` (`flex flex-col items-center w-full gap-4`).
   * **Header `<h3>`**: Styled with `font-base text-white text-2xl font-semibold mb-2 capitalize` (text: `"Working Hours"`).
   * **Weekdays `<p>`**: Styled with `font-alt text-white/50 text-sm leading-relaxed` (text: `"Monday-Friday: 08:00 am - 12:00 am"`).
   * **Weekends `<p>`**: Styled similarly (text: `"Saturday-Sunday: 07:00 am - 11:00 pm"`).
5. **Integrate Mobile Separators**:

   * Between columns, render the shadcn/ui `<Separator className="bg-white/10 my-6 md:hidden" />` component so that mobile viewports stack with clean dividers.

---

### 5. Build the Copyright Block

At the very bottom of the layout, create the legal copy:

1. **Copyright Container `div`**:
   * **Tailwind Classes**:
     * `relative` `z-10` `w-full`
     * `text-center` `text-white/30` `text-xs md:text-sm` (dimmed text size)
     * `mt-12` `border-t` `border-white/5` `pt-8` (adds a top border outline)
   * Set text: `"2026 Gericht. All Rights Reserved."`.

---

### 6. Configure Framer Motion Scroll Entrance

Add the entrance animation properties to the components:

1. **Footer Section Entrance**:
   * On the outer wrapper `<motion.footer>`:
     * `initial={{ opacity: 0, y: 30 }}` (starts invisible, shifted down)
     * `whileInView={{ opacity: 1, y: 0 }}` (restores opacity and slides to center position)
     * `viewport={{ once: true }}` (triggers once on scroll)
     * `transition={{ duration: 0.8, ease: "easeOut" }}`

---

## 🧪 Verification Plan & Testing

Follow these steps to confirm your layout:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render all sections including `Footer`:
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
  import Footer from './sections/Footer';

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
        <Footer />
      </main>
    );
  }

  export default App;
  ```

### 2. Layout & Styling Checks

* Verify visual presentation in the browser:
  * **Desktop Viewports**: Ensure the newsletter form spans the top, the link columns form a 3-column split grid underneath, and the copyright copy sits centered at the bottom.
  * **Mobile Viewports**: Ensure all blocks collapse vertically. Check that the horizontal separator dividers render between the stacked columns.
  * **Aesthetic Inspection**: Confirm the background pattern covers the entire footer area and is visible under the grid elements.

### 3. Transition & Focus Checks

* Scroll to the bottom of the page: verify the footer fades in smoothly from below.
* Focus the newsletter input field: check that the border outline glows with the gold accent.
* Hover over the social links: check that the icons lift up slightly and turn gold.

