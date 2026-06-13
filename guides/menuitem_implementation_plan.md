# Implementation Plan: Creating the MenuItem Component

Welcome! This step-by-step guide is designed to help you build the **MenuItem** component for the Gericht Restaurant project. 

The `MenuItem` component is used to display a single menu item (such as a dish, wine, or cocktail). It features the classic restaurant menu layout: a title/name on the left, a price on the right, a connecting dotted/solid line in between, and a list of tags or descriptions underneath.

---

## 📂 Project Context & Structure
*   **Target File**: `src/components/MenuItem.jsx` (currently empty).
*   **shadcn/ui Component**: [card.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/card.jsx) will be used to wrap our component for premium spacing, hover effects, and subtle borders.
*   **Fonts & Colors**: 
    *   **Font Family**: Use `--font-base` ("Cormorant Upright") for the title/price, and `--font-alt` ("Open Sans") for the tags/description.
    *   **Colors**: Use `--color-gold` (`#dcca87`) for names/prices and `--color-gray` or muted colors for descriptions and borders.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Basic Component Structure & Props
Open [MenuItem.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/MenuItem.jsx) and start by defining the function and its inputs:

1.  **Import Component Dependencies**:
    *   Import React.
    *   Import the `Card` component from your local UI library:
        ```javascript
        import { Card } from './ui/card';
        ```
2.  **Define Props**:
    *   The component should accept the following props:
        *   `name` (string) - the name of the dish or drink.
        *   `price` (string) - the price (e.g., "$56").
        *   `tags` (string or array) - e.g., "AU | Bottle" or "750 ml".
        *   `description` (string, optional) - a short description.
3.  **Create the JSX Outline**:
    *   Wrap everything inside the `Card` component.

---

### 2. Styling the Restaurant Menu Layout (Name ➔ Line ➔ Price)
To get that classic high-end menu alignment, we will use a horizontal flexbox with a flexible auto-expanding divider line:

1.  **Outer Container**: Use a `div` or class on the `Card` with a width of `w-full` and a vertical stack (`flex flex-col gap-1`).
2.  **Top Row (Flex Container)**:
    *   Create a container div: `<div className="flex justify-between items-center w-full">`
    *   **Name Section**:
        *   Render the `{name}` inside a styled tag (like `<p>` or `<span className="font-base text-gold text-lg capitalize font-semibold">`).
    *   **Connecting Line**:
        *   Add a divider `div` that expands to fill the empty space: `<div className="flex-1 h-[1px] border-b border-dashed border-gold/40 mx-4 self-center" />`.
    *   **Price Section**:
        *   Render the `{price}` inside a styled tag (like `<p className="font-base text-white text-lg font-semibold">`).

---

### 3. Styling the Tags and Description (Muted Text)
Below the name and price row, display the additional details:

1.  **Bottom Row Container**:
    *   Create a container div: `<div className="w-full mt-1">`
2.  **Render Tags/Description**:
    *   Add a paragraph for tags: `<p className="font-alt text-gray-400 text-sm capitalize">`
    *   Render `{tags}` (if you pass it as a string) or join them if passed as an array (e.g., `tags.join(' | ')`).

---

### 4. Enhancing the shadcn/ui Card (Premium Hover Effects)
Let's configure the shadcn `Card` wrapper so that it fits our dark, luxury aesthetic:

1.  **Configure Card Props & Classes**:
    *   Since the cards shouldn't have a rigid white background, style them with Tailwind:
        ```jsx
        <Card className="bg-transparent border-none shadow-none hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
        ```
    *   This keeps the menu item clean, but adds a subtle, smooth background highlight when the user hovers over it.

---

### 5. Adding Staggered Entrance Animations (Framer Motion)
To make the menu items animate gracefully as they scroll into view, we'll use `framer-motion`:

1.  **Import motion**:
    ```javascript
    import { motion } from 'framer-motion';
    ```
2.  **Define Animation Variants**:
    *   Create animation variants for the child items:
        ```javascript
        const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
          }
        };
        ```
3.  **Wrap the Card**:
    *   Convert your top-level wrapper to a `motion` component, or wrap your `Card` inside a `<motion.div variants={itemVariants}>`.
4.  **Staggering via Parent (Stagger Children)**:
    *   In the parent component (e.g., `Menu.jsx`), you can wrap the list of `MenuItem`s in a parent `<motion.div>` with these variants:
        ```javascript
        const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15 // Delay between each item animation
            }
          }
        };
        ```
    *   Apply `initial="hidden"` and `whileInView="visible"` to the parent container, and the children will automatically animate sequentially!

---

## 🧪 Verification Plan & Testing
To verify the layout and look of your menu items:

1.  **Test Render in `App.jsx`**:
    *   Open [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
    *   Import and render a couple of items inside a flex/grid layout:
        ```jsx
        import MenuItem from './components/MenuItem';

        const sampleWine = {
          name: "Chapel Hill Shiraz",
          price: "$56",
          tags: "AU | Bottle"
        };

        function App() {
          return (
            <div className="bg-black min-h-screen p-12 flex flex-col justify-center items-center gap-4">
              <div className="w-full max-w-[500px]">
                <MenuItem 
                  name={sampleWine.name} 
                  price={sampleWine.price} 
                  tags={sampleWine.tags} 
                />
              </div>
            </div>
          );
        }
        ```
2.  **Inspect Visuals**:
    *   Verify that the dashed connecting line expands perfectly between the name and price.
    *   Hover over the item to verify the subtle background highlight.
    *   Confirm the correct Cormorant Upright font is used for the header text.
