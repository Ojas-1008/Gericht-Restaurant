# Implementation Plan: Creating the AwardCard Component

Welcome! This step-by-step guide is designed to help you build the **AwardCard** component for the Gericht Restaurant project.

The `AwardCard` component is a reusable card used to showcase restaurant achievements (like Michelin Stars or top rankings). It displays an award image/badge on the left and corresponding text details (title and description) on the right.

---

## 📂 Project Context & Structure
*   **Target File**: `src/components/AwardCard.jsx` (currently empty).
*   **shadcn/ui Component**: [card.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/card.jsx) will be used as the base container.
*   **Assets**: Award badges/images are located in [src/assets](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets) as `award01.png`, `award02.png`, `award03.png`, and `award05.png`.
*   **Fonts & Colors**:
    *   **Font Family**: Use `--font-base` ("Cormorant Upright") for the award titles and `--font-alt` ("Open Sans") for description text.
    *   **Colors**: Gold (`#dcca87`) for the title, and off-white/muted gray (`#545454` or `#f5efdb`) for descriptions.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Basic Component Structure & Props
Open [AwardCard.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/AwardCard.jsx) and start with imports:

1.  **Import Component Dependencies**:
    *   Import React.
    *   Import the `Card` component from your local UI library:
        ```javascript
        import { Card } from './ui/card';
        ```
2.  **Define Props**:
    *   The component needs three main props:
        *   `title` (string) - the title of the award (e.g., "Bib Gourmand").
        *   `subtitle` (string) - description/sub-text (e.g., "Lorem ipsum dolor sit amet").
        *   `imgUrl` (string) - path or imported reference to the award image.
        *   `index` (number, optional) - index of the card to stagger animations.
3.  **Setup the JSX Wrapper**:
    *   Wrap the content in the shadcn `<Card>` component.

---

### 2. Styling the Horizontal (Flex-Row) Layout
We will structure this card horizontally, separating the badge from the text info:

1.  **Card Layout**:
    *   Configure the `<Card>` with a horizontal layout:
        ```jsx
        <Card className="flex flex-row items-center gap-4 bg-transparent border-none shadow-none p-4 rounded-lg">
        ```
    *   `flex-row` ensures the image and text sit side by side.
    *   `items-center` keeps them vertically aligned in the center.

2.  **Left Column (Image / Badge)**:
    *   Create an `<img>` tag:
        ```jsx
        <img src={imgUrl} alt={title} className="w-[50px] h-[50px] object-contain" />
        ```
    *   `object-contain` ensures the award badge maintains its aspect ratio without stretching.

3.  **Right Column (Text Details)**:
    *   Create a vertical flex wrapper: `<div className="flex flex-col">`
    *   **Title**: Render `{title}` inside a styled tag (like `<p>` or `<span className="font-base text-gold text-lg font-bold">`).
    *   **Subtitle**: Render `{subtitle}` inside a styled tag (like `<p className="font-alt text-gray-400 text-sm mt-1 leading-[22px]">`).

---

### 3. Adding the Slide-In Framer Motion Animation
To make the awards entrance engaging, each card will slide in from the left as it scrolls into view:

1.  **Import motion**:
    ```javascript
    import { motion } from 'framer-motion';
    ```
2.  **Convert to motion container**:
    *   Change the outer wrapper (or wrap the `Card`) in a `<motion.div>`.
3.  **Define Motion Properties**:
    *   **Initial state** (hidden, off-screen to the left):
        `initial={{ opacity: 0, x: -60 }}`
    *   **In-view state** (visible, slide back to position):
        `whileInView={{ opacity: 1, x: 0 }}`
    *   **Viewport controls** (trigger once):
        `viewport={{ once: true, amount: 0.25 }}`
    *   **Transition & Stagger**:
        We can stagger the animation of each card by multiplying the `index` prop:
        ```javascript
        transition={{ 
          duration: 0.6, 
          ease: 'easeOut',
          delay: index * 0.15 
        }}
        ```

---

## 🧪 Verification Plan & Testing
To verify the layout and animation flow of your award cards:

1.  **Test Render in `App.jsx`**:
    *   Open [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
    *   Import `AwardCard` and import one of the award images:
        ```jsx
        import AwardCard from './components/AwardCard';
        import award01 from './assets/award01.png';

        function App() {
          return (
            <div className="bg-black min-h-screen p-12 flex justify-center items-center">
              <div className="w-full max-w-[400px]">
                <AwardCard 
                  imgUrl={award01} 
                  title="Bib Gourmand" 
                  subtitle="Lorem ipsum dolor sit amet, consectetur." 
                  index={0}
                />
              </div>
            </div>
          );
        }
        ```
2.  **Verify Visual Design & Movement**:
    *   Run `npm run dev` and refresh the page.
    *   Check that the card slides smoothly from left to right as the page loads.
    *   Confirm the text is correctly aligned next to the badge.
