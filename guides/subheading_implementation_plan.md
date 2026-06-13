# Implementation Plan: Creating the SubHeading Component

Welcome! This step-by-step guide is designed to walk you through building the **SubHeading** component for the Gericht Restaurant project. 

The `SubHeading` is a reusable UI element that adds a decorative title to various sections of the website. It consists of a gold-colored subtitle text and an animated decorative spoon icon.

---

## 📂 Project Context & Structure
Before starting, let's review where everything is located:
*   **Target File**: `src/components/SubHeading.jsx` (currently empty/stubbed).
*   **Assets**: The decorative spoon SVG is located at [spoon.svg](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/spoon.svg).
*   **Colors & Fonts**: 
    *   The font family is defined in [global.css](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/styles/global.css) under `--font-base` ("Cormorant Upright") and `--font-alt` ("Open Sans").
    *   The gold accent color is defined under `--color-gold: #dcca87` (usable in Tailwind as `text-gold` or similar).

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Setup the React Functional Component
Open your empty [SubHeading.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/SubHeading.jsx) and set up the basic structure:

1.  **Import React** (optional in modern React, but good practice).
2.  **Import the Spoon Asset**:
    ```javascript
    import { images } from '../constants'; 
    // OR directly import the SVG:
    import spoonImg from '../assets/spoon.svg';
    ```
3.  **Define the Component**:
    *   Accept a single prop: `{ title }`.
    *   Return a container element (like a `div`) with a class of `flex flex-col mb-4` (or similar margins/alignment).
4.  **Export the Component** as the default export.

---

### 2. Styling the Text & Layout
Apply the elegant typography and colors defined in the Gericht theme:

1.  **Add a Heading or Paragraph** for the title:
    *   Use `<p>` or `<h4>`.
    *   Apply Tailwind classes to style it:
        *   `font-base` to use the Cormorant Upright font.
        *   `text-gold` (or text color `#dcca87`) for the gold finish.
        *   `capitalize` or `uppercase` depending on the design specs.
        *   `text-xl` or custom sizes for appropriate hierarchy.
        *   `tracking-wider` to make it premium.
2.  **Render the Title**: Use `{title}` inside the tag.

---

### 3. Adding the Spoon Icon & Optional Separator
Underneath the text, render the decorative element:

1.  **Add the Image Tag**:
    *   Create an `<img>` tag with `src={spoonImg}` and `alt="spoon_image"`.
    *   Add styling, e.g., `w-[45px]` or `w-[40px]` (or matching the original design height/width).
2.  **Integrating the shadcn/ui Separator (Optional UI Connection)**:
    *   Import `Separator` from [separator.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/separator.jsx):
        ```javascript
        import { Separator } from './ui/separator';
        ```
    *   If you want to use it as a decorative horizontal divider underneath or alongside the title, you can add:
        ```jsx
        <Separator className="bg-gold/20 my-2 w-16" />
        ```

---

### 4. Adding Framer Motion Animations
To give the sub-heading a premium feel, let's animate the spoon icon when it enters the viewport:

1.  **Import Framer Motion**:
    ```javascript
    import { motion } from 'framer-motion';
    ```
2.  **Convert to Motion Component**:
    *   Change the `<img>` tag to a `<motion.img>`.
3.  **Define Animation Attributes**:
    *   `initial={{ opacity: 0, y: 10, rotate: -10 }}` (starts slightly faded out, lower down, and tilted).
    *   `whileInView={{ opacity: 1, y: 0, rotate: 0 }}` (animates to its normal position and rotation when scrolled into view).
    *   `viewport={{ once: true }}` (ensures it only animates once per page load).
    *   `transition={{ duration: 0.6, ease: 'easeOut' }}` (smooth easing).

---

## 🧪 Verification Plan & Testing
To ensure your new component works perfectly:

1.  **Import and Render in `App.jsx`**:
    *   Open [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
    *   Import `SubHeading` and add a test instance:
        ```jsx
        import SubHeading from './components/SubHeading';

        function App() {
          return (
            <div className="bg-black min-h-screen p-8 flex justify-center items-center">
              <SubHeading title="Chase The New Flavour" />
            </div>
          );
        }
        ```
2.  **Run Dev Server**:
    *   Open your terminal and run `npm run dev`.
    *   Open the browser URL to verify that:
        *   The title displays in gold with the correct Cormorant Upright font.
        *   The spoon icon animates smoothly into view.
