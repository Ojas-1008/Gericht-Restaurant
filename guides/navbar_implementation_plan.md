# Implementation Plan: Creating the Navbar Component

Welcome! This step-by-step guide is designed to help you build the **Navbar** component for the Gericht Restaurant project.

The `Navbar` is the main navigation header pinned to the top of the viewport. It adapts dynamically: on desktop, it displays links, authentication options, and a call-to-action; on mobile, it transitions into a hamburger menu overlay. It also shifts from a transparent background to a glassmorphism blur effect upon scroll.

---

## 📂 Project Context & Structure
*   **Target File**: `src/components/Navbar.jsx` (currently empty).
*   **shadcn/ui Component**: [button.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/components/ui/button.jsx) for the "Book Table" button.
*   **Assets**: The Gericht text logo is located at [gericht.png](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/gericht.png).
*   **Icons**: Import menu icons (`Menu` for hamburger, `X` for close) from `lucide-react`.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Component State & Scroll Listeners
To achieve a dynamic glassmorphism header, the Navbar needs to keep track of two states:
*   Whether the user has scrolled down the page.
*   Whether the mobile hamburger menu overlay is open.

1.  **Imports**:
    ```javascript
    import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from './ui/button';
    import gerichtLogo from '../assets/gericht.png';
    ```
2.  **Define States**:
    *   `isScrolled`: boolean state initialized to `false`.
    *   `isMobileOpen`: boolean state initialized to `false`.
3.  **Setup Scroll Hook**:
    *   Use a React `useEffect` to register a window scroll event listener:
        ```javascript
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 50) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        ```

---

### 2. Styling the Desktop Layout
Structure the main desktop navbar with three main columns:

1.  **Outer Container**:
    *   Use a `<motion.nav>` wrapper.
    *   Apply Tailwind classes for sticky glassmorphism:
        `fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300`
    *   Interpolate classes based on state: if `isScrolled` is true, append `backdrop-blur-md bg-black/80 border-b border-white/10 py-3`, otherwise keep `bg-transparent py-5`.
2.  **Left Column (Logo)**:
    *   Wrap in an anchor link:
        ```jsx
        <a href="#home" className="flex items-center">
          <img src={gerichtLogo} alt="Gericht Logo" className="w-[150px] object-contain" />
        </a>
        ```
3.  **Center Column (Navigation Links)**:
    *   Wrap in a `<ul className="hidden md:flex gap-6 items-center">`.
    *   Add links: Home (`#home`), About (`#about`), Menu (`#menu`), Awards (`#awards`), Contact (`#contact`).
    *   Style anchor links with: `font-alt text-white hover:text-gold transition-colors text-sm uppercase tracking-wider`.
4.  **Right Column (Actions)**:
    *   Wrap in a `<div className="hidden md:flex items-center gap-6">`.
    *   Include a standard text button: `<a href="#login" className="font-alt text-white hover:text-gold text-sm transition-colors">Log In / Register</a>`.
    *   Add a vertical separator divider: `<div className="w-[1px] h-5 bg-white/20" />`.
    *   Render the shadcn/ui `<Button>` with gold customization:
        ```jsx
        <Button className="bg-gold hover:bg-gold/80 text-black font-semibold rounded-none tracking-wider uppercase transition-colors px-6 h-10">
          Book Table
        </Button>
        ```

---

### 3. Creating the Mobile Hamburger Layout
1.  **Toggle Button**:
    *   Add a div on the right visible only on small screens: `<div className="md:hidden flex items-center">`
    *   Place a trigger button rendering the `Menu` icon from Lucide:
        ```jsx
        <Menu className="text-white w-7 h-7 cursor-pointer hover:text-gold transition-colors" onClick={() => setIsMobileOpen(true)} />
        ```
2.  **Dropdown / Overlay Navigation**:
    *   Wrap the menu overlay in Framer Motion's `<AnimatePresence>` to animate mounting and unmounting.
    *   When `isMobileOpen` is true, display a full-screen overlay containing the mobile links.
    *   Add a close button inside displaying the Lucide `X` icon:
        ```jsx
        <X className="text-white w-7 h-7 absolute top-6 right-8 cursor-pointer hover:text-gold transition-colors" onClick={() => setIsMobileOpen(false)} />
        ```

---

### 4. Adding Animations (Framer Motion)
Ensure smooth animations for page entry and mobile transitions:

1.  **Navbar Slide-Down on Load**:
    *   Provide the `<motion.nav>` with load transition details:
        *   `initial={{ y: -100, opacity: 0 }}`
        *   `animate={{ y: 0, opacity: 1 }}`
        *   `transition={{ duration: 0.6, ease: 'easeOut' }}`
2.  **Mobile Menu Fade / Slide In**:
    *   Use motion variants on the mobile overlay container so it slides down from the top or fades:
        ```jsx
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center z-50"
        >
        ```

---

## 🧪 Verification Plan & Testing
To confirm the styling and transitions:

1.  **Mount in `App.jsx`**:
    *   Open [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
    *   Import and render the Navbar at the very top:
        ```jsx
        import Navbar from './components/Navbar';

        function App() {
          return (
            <div className="bg-black min-h-[150vh] text-white">
              <Navbar />
              <div className="pt-24 px-8">
                <h1 className="text-4xl font-base">Scroll down to test the background blur effect!</h1>
              </div>
            </div>
          );
        }
        ```
2.  **Test Responsive Breakpoints**:
    *   Use Chrome DevTools (press `F12` and click the Device Toolbar button) to verify that the hamburger menu appears on screens below `768px`.
    *   Verify click triggers of the mobile menu overlay opening and closing successfully.
3.  **Verify Scroll Blur Effect**:
    *   Scroll past `50px` on the test page to verify that the navbar background blurs and gains a subtle bottom border.
