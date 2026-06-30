# Implementation Plan: Creating the Gallery Section

Welcome! This step-by-step guide is designed to walk you through building the **Gallery** section for the Gericht Restaurant website.

The `Gallery` section displays the restaurant's signature dishes and environment in an interactive, horizontally scrollable photo container. It features a responsive layout: on desktop, a left column holds headers and an Instagram CTA link, while a right column contains scroll-snapped image cards. Circular arrow controllers allow users to click-scroll, and each image card reveals a zoom transition and Instagram hover overlay.

---

## 📂 Project Context & Structure
Before writing your code, verify the locations of the following assets and files:
*   **Target File**: [Gallery.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Gallery.jsx) (currently empty).
*   **Assets**:
    *   Gallery images: `gallery01.png`, `gallery02.png`, `gallery03.png`, and `gallery04.png` in the assets folder.
*   **Reusable Components**:
    *   [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for taglines.
    *   [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) from shadcn/ui.
*   **Icons**: Controls and indicators: `Instagram`, `ArrowLeft`, and `ArrowRight` from `lucide-react`.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Component Setup & Imports
Open [Gallery.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Gallery.jsx). Set up your standard functional structure:
1.  Import **React**, along with the **useRef** hook to control the horizontal scrollbar position.
2.  Import **motion** from `framer-motion` for text slide-ins, container exits, hover-zooms, and fade animations.
3.  Import `Instagram`, `ArrowLeft`, and `ArrowRight` from the `lucide-react` library.
4.  Import the custom **SubHeading** component from `@/components/SubHeading`.
5.  Import the shadcn/ui **Button** component from `@/components/ui/button`.
6.  Import the four image assets (`gallery01.png` through `gallery04.png`) from the assets folder.
7.  Define a component function named `Gallery` and export it as the default.

---

### 2. Scaffold the Responsive Container
Create a two-column desktop wrapper that aligns elements side-by-side:
1.  **Section Wrapper**: Use a `<section>` tag with the ID `gallery`.
    *   **Tailwind Classes**:
        *   `bg-black` (deep black canvas color)
        *   `py-20 px-6 md:px-12 lg:px-24` (responsive padding padding)
        *   `flex` `flex-col` `lg:flex-row` (vertical column on mobile, horizontal row layout on desktop)
        *   `gap-12` `items-center` `justify-between` (spacing layout boundary)
        *   `max-w-[1200px]` `w-full` `mx-auto` (centers block horizontally)
        *   `overflow-hidden` (prevents animations from breaking page limits)

---

### 3. Build Column 1: Gallery Text block (Left)
The left side holds headers and redirects to Instagram:
1.  **Text Column Wrapper `div`**: Use classes:
    *   `flex` `flex-col` `justify-center` `items-start` `w-full` `lg:max-w-[450px]` (stacks content vertically and caps width on wide viewports)
2.  **Tagline**: Render the `<SubHeading />` component. Set its `title` prop to `"Instagram"`.
3.  **Main Heading**: Add an `<h2>` element.
    *   **Tailwind Classes**:
        *   `font-base` (premium Cormorant Upright serif font)
        *   `text-gold` (brand accent gold color)
        *   `text-4xl md:text-5xl lg:text-6xl` (responsive fluid typography size)
        *   `font-semibold` `capitalize` `tracking-wider` `mb-4`
    *   Set text: `"Photo Gallery"`.
4.  **Description Copy**: Add a paragraph `<p>` element.
    *   **Tailwind Classes**:
        *   `font-alt` (Open Sans body font)
        *   `text-white/70` `text-sm md:text-base` `leading-relaxed` `mb-8`
    *   Set copy text inviting users to browse visual stories from the kitchen.
5.  **Instagram CTA Button**: Render the shadcn/ui `<Button>` component with `variant="outline"`.
    *   **Tailwind Classes**:
        *   `rounded-none` (sharp luxury corners)
        *   `border-gold` `text-gold` `hover:bg-gold` `hover:text-black` (accent border coloring and hover inversion)
        *   `uppercase` `tracking-wider` `transition-all` `duration-300` `flex` `items-center` `gap-2` (aligns Instagram icon inline)
        *   `px-6` `h-10`
    *   Insert the Lucide `<Instagram className="w-4 h-4" />` icon alongside text label: `"View Gallery"`.

---

### 4. Build Column 2: Snapped Scrollable Image Gallery (Right)
The right side contains the scrollable image list with navigation buttons:
1.  **Column Wrapper `div`**: Use classes:
    *   `relative` `w-full` `lg:flex-1` (takes up remaining width in the desktop row layout)
2.  **Scroll Container**: Create a `div` element inside.
    *   **Binding Ref**: Set the ref of this div to a created variable (e.g., `scrollRef`) using `useRef(null)`.
    *   **Tailwind Classes**:
        *   `flex` `flex-row` (arranges images in a horizontal line)
        *   `overflow-x-auto` (enables horizontal scrollbar behavior)
        *   `gap-6` (gutter spacing between images)
        *   `snap-x` `snap-mandatory` (activates scroll-snap layout snapping)
        *   `scroll-smooth` (forces smooth sliding transitions when scrolled programmatically)
        *   `w-full`
        *   **Hide Scrollbars inline**: Add `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]` to hide default scrollbars across Chrome, Safari, Firefox, and IE.
3.  **Define and Render Images List**: Map over an array containing your imported image assets (`gallery01`, `gallery02`, `gallery03`, `gallery04`). For each item:
    *   **Image Card Wrapper**: Use a `<motion.div>`.
        *   **Tailwind Classes**:
            *   `flex-none` (prevents shrink compression)
            *   `snap-start` `snap-always` (snaps card to the left border of container during scroll)
            *   `w-[240px] md:w-[280px]` (responsive card width)
            *   `aspect-[3/4]` (maintains uniform vertical rectangle proportions)
            *   `relative` `overflow-hidden` `rounded-lg` `cursor-pointer` `group` (critical: hides overflow on image hover zoom-in, sets group hover reach)
    *   **Image Tag**: Add an `<img>` tag with source bound to the image asset and fit parameters:
        *   **Tailwind Classes**: `w-full` `h-full` `object-cover` `transition-transform` `duration-500` `group-hover:scale-105` (smooth scale-up on card hover)
    *   **Overlay Shadow Layer**: Under the image tag, add a overlay `div` absolute positioned.
        *   **Tailwind Classes**:
            *   `absolute` `inset-0` (stretches layer over the entire card)
            *   `bg-black/55` `opacity-0` `group-hover:opacity-100` (invisible by default, fades in black backdrop on hover)
            *   `flex` `justify-center` `items-center` `transition-all` `duration-300`
        *   Inside this overlay layer, render the Lucide icon:
            *   `<Instagram className="text-gold size-10 md:size-12 transform scale-90 group-hover:scale-100 transition-transform duration-300" />` (scales up slightly when card is hovered over)

---

### 5. Build Scroll Controller Navigation Arrows
Provide circular controller triggers underneath or absolute-positioned:
1.  **Arrows Wrapper `div`**: Add a container under your scroll list.
    *   **Tailwind Classes**: `flex justify-end gap-4 w-full mt-6 pr-4` (aligns arrow buttons to the right side)
2.  **Left / Right Buttons**: Create two clickable elements using the Lucide `<ArrowLeft />` and `<ArrowRight />` icons.
    *   **Tailwind Classes**:
        *   `w-12 h-12` `rounded-full` (perfect circles)
        *   `border` `border-gold` `text-gold` (accent golden coloring)
        *   `flex` `justify-center` `items-center` `cursor-pointer`
        *   `hover:bg-gold` `hover:text-black` `transition-colors` `duration-300`
3.  **Scroll Handlers**: Write a function (e.g., `scroll(direction)`) that executes when an arrow is clicked:
    *   Access the scroll element ref: `const container = scrollRef.current`.
    *   Calculate width offset: e.g., `const scrollAmount = 300;` (offset matches card width + gap).
    *   If `direction === 'left'`, subtract from scroll position: `container.scrollLeft -= scrollAmount;`.
    *   If `direction === 'right'`, add to scroll position: `container.scrollLeft += scrollAmount;`.

---

### 6. Configure Scroll Entry Animations
Apply entrance motion animations using Framer Motion:
1.  **Left Column Entrance**:
    *   Convert your left text column wrapper to `<motion.div>`.
    *   **Animation Details**:
        *   `initial={{ opacity: 0, x: -50 }}` (starts faded out, offset left)
        *   `whileInView={{ opacity: 1, x: 0 }}` (restores opacity and slides to center grid position)
        *   `viewport={{ once: true }}` (runs once on scroll)
        *   `transition={{ duration: 0.8, ease: "easeOut" }}`
2.  **Right Column Entrance**:
    *   Convert the right column wrapper (or the scroll container) to a `<motion.div>`.
    *   **Animation Details**:
        *   `initial={{ opacity: 0, x: 50 }}` (starts faded out, offset right)
        *   `whileInView={{ opacity: 1, x: 0 }}`
        *   `viewport={{ once: true }}`
        *   `transition={{ duration: 0.8, ease: "easeOut" }}`

---

## 🧪 Verification Plan & Testing

Follow these steps to confirm your layout:

### 1. Integration Check
*   Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
*   Import and render `Hero`, `About`, `Menu`, `Chef`, `Intro`, `Laurels`, and `Gallery` components in your layout structure:
    ```jsx
    import React from 'react';
    import Hero from './sections/Hero';
    import About from './sections/About';
    import Menu from './sections/Menu';
    import Chef from './sections/Chef';
    import Intro from './sections/Intro';
    import Laurels from './sections/Laurels';
    import Gallery from './sections/Gallery';

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
        </main>
      );
    }

    export default App;
    ```

### 2. Layout & Scroll-Snap Checks
*   Verify visual presentation in the browser:
    *   **Desktop Viewport**: Ensure the text and link columns are on the left, and the snapped image list sits on the right.
    *   **Mobile Viewport**: Ensure columns stack vertically.
    *   **Scroll-Snap Test**: Scroll the gallery container horizontally with your mouse wheel or finger touch. Release middle-way: confirm the image card "clicks" / snaps cleanly to the left border edge.
    *   **Scrollbar Test**: Confirm no default horizontal scrollbars are visible on the viewport layout.

### 3. Controller & Hover Checks
*   Click the Right navigation arrow button: confirm the container slides smoothly to the right.
*   Click the Left navigation arrow button: confirm the container slides smoothly to the left.
*   Hover over any image card:
    *   Verify the image zooms in slightly.
    *   Verify the dark overlay fades into view.
    *   Verify the Instagram icon zooms in slightly to the center of the card.
