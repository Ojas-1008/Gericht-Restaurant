# Implementation Plan: Creating the Laurels Section

Welcome! This step-by-step guide is designed to walk you through building the **Laurels** (Awards) section for the Gericht Restaurant website.

The `Laurels` section showcases the restaurant's professional accomplishments. It features a responsive grid with two columns on desktop: a left column rendering a header followed by a 2×2 grid of staggered, hover-responsive award cards; and a right column highlighting a large laurels trophy.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [Laurels.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Laurels.jsx) (currently empty).
* **Data File**: [data.js](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/constants/data.js).
* **Assets**:
  * Trophy showcase illustration: [laurels.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/laurels.png).
  * Award badge images: `award01.png`, `award02.png`, `award03.png`, and `award05.png` in the assets directory.
* **Reusable Components**:
  * [SubHeading](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) for header taglines.
  * [AwardCard](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/AwardCard.jsx) to render individual awards.
  * [Separator](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/separator.jsx) from shadcn/ui.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Populate the Awards Data Constants

Before coding the visual UI, open [data.js](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/constants/data.js) to import your award icons and define a structured array:

1. **Import Award Images**: At the top of the data file, import `award01.png`, `award02.png`, `award03.png`, and `award05.png` from the assets folder.
2. **Define and Export the `awards` Array**: Define an array containing 4 objects:
   * **Award 1**: `title: "Bib Gourmand"`, `subtitle: "Lorem ipsum dolor sit amet, consectetur."`, `imgUrl` pointing to your imported `award02`.
   * **Award 2**: `title: "Rising Star"`, `subtitle: "Lorem ipsum dolor sit amet, consectetur."`, `imgUrl` pointing to your imported `award01`.
   * **Award 3**: `title: "AA Hospitality"`, `subtitle: "Lorem ipsum dolor sit amet, consectetur."`, `imgUrl` pointing to your imported `award05`.
   * **Award 4**: `title: "Outstanding Chef"`, `subtitle: "Lorem ipsum dolor sit amet, consectetur."`, `imgUrl` pointing to your imported `award03`.

---

### 2. Scaffold the Laurels Component

Open [Laurels.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/.jsx). Set up your standard functional structure:

1. Import **React** (standard practice).
2. Import **motion** from `framer-motion` for slide, fade, and bounce entry animations.
3. Import the custom **SubHeading** component from `@/components/SubHeading`.
4. Import the custom **AwardCard** component from `@/components/AwardCard`.
5. Import the shadcn/ui **Separator** component from `@/components/ui/separator`.
6. Import the `awards` array from your constants file `../constants/data`.
7. Import the laurels trophy image (`laurels.png`) from the assets folder.
8. Define a component function named `Laurels` and export it as the default.

---

### 3. Create the Grid Columns Layout

Establish the outer section boundary and the desktop split layout:

1. **Section Wrapper**: Wrap the layout in a `<section>` tag with the ID `awards`.
   * **Tailwind Classes**:
     * `bg-black` (deep black background canvas)
     * `min-h-screen` (occupies at least the full height of the viewport)
     * `py-20 px-6 md:px-12 lg:px-24` (responsive padding padding)
     * `flex` `items-center` `justify-center` (centers contents vertically and horizontally)
     * `overflow-hidden` (prevents spring bounce animations from creating layout shifts)
2. **Grid Layout Wrapper**: Add a container `div` inside.
   * **Tailwind Classes**:
     * `grid` (CSS Grid activation)
     * `grid-cols-1 lg:grid-cols-2` (1 column on mobile, 2 columns starting on large desktop screens `1024px` and up)
     * `gap-12 lg:gap-16` (sets spacing between the columns)
     * `max-w-[1200px]` `w-full` `mx-auto` (horizontal centering and max-width boundaries)
     * `items-center` (aligns items vertically in the center of the grid row)

---

### 4. Build Column 1: Awards Content (Left)

The left side houses the headings, divider line, and cards list:

1. **Content Column Wrapper `div`**: Use classes:
   * `flex` `flex-col` `items-start` `w-full` (stacks elements vertically and left-aligns them)
2. **Laurels Tagline / Subheading**: Render the `<SubHeading />` component. Set its `title` prop to `"Awards & Recognition"`.
3. **Section Header**: Add a `<motion.h2>` tag (we will animate this fading down).
   * **Tailwind Classes**:
     * `font-base` (premium Cormorant Upright serif font)
     * `text-gold` (accent gold color)
     * `text-4xl md:text-5xl lg:text-6xl` (responsive fluid typography size)
     * `font-semibold` `capitalize` `tracking-wider` `mb-4`
   * Set text: `"Our Laurels"`.
   * **Animations**:
     * Initial state: shifted slightly up (`y: -30`) and invisible (`opacity: 0`).
     * whileInView: resting position (`y: 0`) and fully visible (`opacity: 1`).
     * Set viewport transition trigger to run once (`once: true`) with a duration of `0.6` seconds.
4. **Separator Divider**: Render the shadcn/ui `<Separator />` component directly below the heading.
   * **Tailwind Classes**:
     * `bg-gold/20` (subtle gold line color)
     * `my-6` `w-full` `max-w-[150px]` (caps divider width for elegance)
5. **Awards Cards Grid Container**: Under the separator line, add a `div` element.
   * **Tailwind Classes**:
     * `grid` (CSS Grid activation)
     * `grid-cols-1 sm:grid-cols-2` (1 column on narrow screens, 2 columns on small tables/desktop viewports for a 2×2 grid layout)
     * `gap-8` `w-full` `mt-8` (adds gap spacing between cards)
     * `place-items-stretch` (ensures cards scale consistently)
6. **Map Awards**: Map over the imported `awards` array. For each award item:
   * Render an `<AwardCard />` component.
   * Pass properties: `key` (unique key), `title`, `subtitle`, `imgUrl`, and `index` (passes the map index so `AwardCard` can stagger entry transitions based on delay values).

---

### 5. Build Column 2: Trophy Image (Right)

The right column highlights the trophy image:

1. **Image Column Wrapper `div`**: Use classes:
   * `flex` `justify-center` `items-center` `w-full` (centers trophy horizontally)
2. **Trophy Image**: Render a `<motion.img>` tag with `src={laurels.png}` and alternative description text.
   * **Tailwind Classes**:
     * `w-full` `max-w-[400px] md:max-w-[500px]` (limits maximum width)
     * `h-auto` `object-contain` (preserves aspect ratio)
   * **Animations**:
     * Initial state: shifted right (`x: 60`) and invisible (`opacity: 0`).
     * whileInView: resting position (`x: 0`) and fully visible (`opacity: 1`).
     * Set viewport trigger to run once (`once: true`).
     * **Spring Bounce transition details**: Set the transition to `type: "spring"`, `stiffness: 80`, `damping: 12`, and `duration: 1.2` seconds. This introduces a organic bounce when it slides into position.

---

## 🧪 Verification Plan & Testing

Follow these steps to confirm your layout:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render `Hero`, `About`, `Menu`, `Chef`, `Intro`, and `Laurels` components in your layout structure:
  ```jsx
  import React from 'react';
  import Hero from './sections/Hero';
  import About from './sections/About';
  import Menu from './sections/Menu';
  import Chef from './sections/Chef';
  import Intro from './sections/Intro';
  import Laurels from './sections/Laurels';

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
      </main>
    );
  }

  export default App;
  ```

### 2. Layout & Responsiveness Check

* Verify visual presentation in the browser:
  * **Desktop Viewport**: Ensure the award headers, divider, and 2×2 grid are on the left, and the trophy illustration sits centered on the right.
  * **Mobile Viewport**: Ensure the layout collapses to a vertical stack, with the text and cards stacking above the trophy image.
  * **Grid Verification**: Verify that the awards grid forms 2 neat columns on tablet width and above.

### 3. Transition & Micro-interaction Check

* Scroll into the Laurels section:
  * Confirm the "Our Laurels" title slides down from above.
  * Verify the 4 award cards slide in progressively from the left side (stagger entry effect).
  * Confirm the right trophy image slides in from the right with a soft spring bounce.
  * Hover over any `AwardCard`: confirm the item scales up slightly (`scale: 1.05`) and shifts rightwards (`x: 20`) with smooth spring feedback.
