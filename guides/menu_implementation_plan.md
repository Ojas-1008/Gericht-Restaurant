# Implementation Plan: Refactoring the Menu Section

Welcome! This step-by-step guide is designed to help you refactor and expand the existing **Menu** section of your website.

Your current [Menu.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Menu.jsx) has a basic setup with placeholder wine data and a single list. In this step, you will refactor it to implement the complete split-list design: a centered top header, two lists side-by-side (Wines & Beer on the left, Cocktails on the right) populated from a external constants file, a "View More" button at the bottom, and smooth staggered entry animations.

---

## 📂 Project Context & Structure
*   **Target File to Refactor**: [Menu.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Menu.jsx).
*   **Data Constants File**: [data.js](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/constants/data.js) (currently empty).
*   **Dependencies & Reusable Components**:
    *   [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for header taglines.
    *   [MenuItem](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/MenuItem.jsx) to display individual drinks.
    *   [Button](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) from shadcn/ui.
*   **Tailwind Style Guidelines**:
    *   Background: `bg-black`
    *   Typography: Cormorant Upright (`font-base`), Open Sans (`font-alt`), and signature gold (`text-gold`).

---

## 🛠️ Step-by-Step Refactoring Guide

### 1. Set Up the Menu Data Constants
Instead of hardcoding menu items inside your section components, move them into [data.js](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/constants/data.js) for clean separation of concerns.

1.  Open [data.js](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/constants/data.js).
2.  Define and export a **Wines & Beer** array (`wines`) containing objects. Each object should have `title` (or `name`), `price`, and `tags` keys:
    *   `title: "Chapel Hill Shiraz"`, `price: "$56"`, `tags: "AU | Bottle"`
    *   `title: "Catena Malbec"`, `price: "$59"`, `tags: "AR | Bottle"`
    *   `title: "La Vieille Ferme"`, `price: "$44"`, `tags: "FR | 750ml"`
    *   `title: "Primitivo di Manduria"`, `price: "$62"`, `tags: "IT | Bottle"`
    *   `title: "Bud Light"`, `price: "$14"`, `tags: "US | 355ml"`
3.  Define and export a **Cocktails** array (`cocktails`) containing objects:
    *   `title: "Aperol Spritz"`, `price: "$20"`, `tags: "Aperol | Prosecco | Soda | 150ml"`
    *   `title: "Dark 'N' Stormy"`, `price: "$16"`, `tags: "Dark Rum | Ginger Beer | Slice of lime"`
    *   `title: "Negroni"`, `price: "$26"`, `tags: "Gin | Sweet Vermouth | Campari | Orange peel"`
    *   `title: "Cosmopolitan"`, `price: "$22"`, `tags: "Vodka | Triple Sec | Lime Juice | Cranberry Juice"`
    *   `title: "Old Fashioned"`, `price: "$31"`, `tags: "Bourbon | Angostura Bitters | Sugar cube | Orange peel"`

---

### 2. Update Imports in Menu.jsx
Open [Menu.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Menu.jsx). Modify your imports at the top:
1.  **Add SubHeading**: Import `SubHeading` from `@/components/SubHeading`.
2.  **Add Button**: Import the shadcn/ui `Button` from `@/components/ui/button`.
3.  **Add Data**: Remove any local data arrays inside the component. Import the `wines` and `cocktails` arrays from `../constants/data`.

---

### 3. Refactor the Outer Container & Header Block
Replace the simple section wrapper and heading elements with the fully styled design:
1.  **Outer `<section>`**: Change the classes to center-align the grid and add professional layout styling:
    *   `bg-black min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center relative w-full`
2.  **Header Column**: Under your section start tag, create a wrapper `div` centered with:
    *   `flex flex-col items-center text-center mb-16`
3.  **Subheading & Title**: Inside this header wrapper:
    *   Render `<SubHeading title="Bar Menu" />` to display the gold tagline with the slide-in spoon.
    *   Render a semantic `<h2>` with classes:
        *   `font-base text-gold text-4xl md:text-5xl lg:text-6xl font-semibold capitalize tracking-wider`
        *   Set text to: `"Menu That Fits Your Palate"`

---

### 4. Implement the Dual-Column Grid Layout
Below the header wrapper, replace your existing `<motion.div>` grid with a container structured to house both columns:
1.  **Grid Wrapper `<motion.div>`**:
    *   Set the layout to collapse on mobile and split on large screens:
        *   `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1200px] w-full mx-auto px-4 mb-16`
    *   Keep the animations properties: `variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}`.

---

### 5. Build the Left Column: Wine & Beer List
Inside the Grid Wrapper, create the left-side section:
1.  **Left Column Wrapper `div`**: Use classes:
    *   `flex flex-col items-center w-full`
2.  **Left Column Header `<h3>`**:
    *   Use classes: `font-base text-white text-3xl lg:text-4xl font-semibold mb-8 tracking-wider`
    *   Set text: `"Wine & Beer"`
3.  **Render Items**: Map over the imported `wines` array. Render a `<MenuItem />` component for each item:
    *   Pass props: `key`, `name` (maps to `title`), `price`, and `tags`.

---

### 6. Build the Right Column: Cocktails List
Next to the left list, create the right-side section:
1.  **Right Column Wrapper `div`**: Use classes:
    *   `flex flex-col items-center w-full`
2.  **Right Column Header `<h3>`**:
    *   Use classes: `font-base text-white text-3xl lg:text-4xl font-semibold mb-8 tracking-wider`
    *   Set text: `"Cocktails"`
3.  **Render Items**: Map over the imported `cocktails` array. Render a `<MenuItem />` component for each item:
    *   Pass props: `key`, `name` (maps to `title`), `price`, and `tags`.

---

### 7. Add the Bottom "View More" Button
Below your dual-column grid container:
1.  **Button Centering Wrapper `div`**:
    *   Use classes: `flex justify-center w-full mt-8`
2.  **View More Button**: Render a shadcn/ui `<Button>` with the `variant="outline"` prop.
    *   Apply custom classes to align with the Gericht brand guidelines:
        *   `rounded-none` (sharp corners)
        *   `border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300` (theme colors and hover state swap)
        *   `uppercase tracking-wider px-6 h-10`
    *   Set text label: `"View More"`

---

## 🧪 Verification Plan & Testing

Follow these steps to test your refactored Menu section:

### 1. Integration Check
*   Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
*   Import and render `Hero`, `About`, and `Menu` components in your layout structure:
    ```jsx
    import React from 'react';
    import Hero from './sections/Hero';
    import About from './sections/About';
    import Menu from './sections/Menu';

    function App() {
      return (
        <main className="bg-black text-white min-h-screen">
          {/* Render sections sequentially */}
          <Hero />
          <About />
          <Menu />
        </main>
      );
    }

    export default App;
    ```

### 2. Visual & Layout Review
*   Start your dev server (if not running) with `pnpm dev`.
*   Ensure that the lists render perfectly side-by-side on desktop layouts and stack cleanly vertically on smaller viewports.
*   Confirm the new headings display with the `SubHeading` component decoration.

### 3. Stagger & Hover Animation Check
*   Verify that when you scroll down, the menu items load sequentially one-by-one with a smooth delay (stagger effect).
*   Hover over any `MenuItem` card: ensure it lifts slightly (`y: -4` or `-5`) and changes background highlight smoothly.
