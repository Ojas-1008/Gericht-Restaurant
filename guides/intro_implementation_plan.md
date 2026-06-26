# Implementation Plan: Creating the Intro Video Section

Welcome! This step-by-step guide is designed to walk you through building the **Intro Video** section for the Gericht Restaurant website.

The `Intro` section features a full-screen cinematic video element that tells the visual story of the restaurant. Overlaid on the video is a dark backdrop with a centered play/pause trigger button. Using React's state and ref systems, you will control the video element's playback state, fading the overlay out and brightening the screen when the video is playing, and restoring the overlay when paused.

---

## 📂 Project Context & Structure

Before writing your code, verify the locations of the following assets and files:

* **Target File**: [Intro.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Intro.jsx) (currently empty).
* **Assets**: Cinematic video clip: [meal.mp4](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/assets/meal.mp4).
* **Icons**: Play/pause controls: `Play` and `Pause` from `lucide-react`.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Component Setup & Imports

Open [Intro.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/sections/Intro.jsx). Set up your standard functional structure:

1. Import **React**, along with the **useState** and **useRef** hooks.
2. Import **motion** from `framer-motion` to handle viewport scroll scaling and the pulse effect on the button.
3. Import the **Play** and **Pause** icons from the `lucide-react` library.
4. Import the video asset (`meal.mp4`) from your assets folder.
5. Define the component function named `Intro` and export it as the default.

---

### 2. Configure State & Refs

To control the video playback and overlay state:

1. **Play State**: Create a boolean state variable (e.g., `isPlaying`) initialized to `false`. This keeps track of whether the video is actively running.
2. **Video Ref**: Declare a reference variable (e.g., `videoRef`) using `useRef(null)`. This ref will bind directly to the native HTML `<video>` element, allowing your Javascript code to trigger play and pause events.

---

### 3. Write Playback Toggle Logic

Create a handler function (e.g., `handleVideoPlay`) to execute when the button is clicked:

1. Access the video element using the ref's current value (`videoRef.current`).
2. Check the `isPlaying` state:
   * If `isPlaying` is true, call the video's native `.pause()` method, and set the `isPlaying` state to `false`.
   * If `isPlaying` is false, call the video's native `.play()` method, and set the `isPlaying` state to `true`.

---

### 4. Build the Video Layout

Structure the markup with an outer section wrapper and a full-size HTML5 video tag:

1. **Section Wrapper**: Use a `<motion.div>` tag as the main container.
   * **Tailwind Classes**:
     * `w-full` `h-screen` (takes up the full width and height of the screen)
     * `relative` (critical, so overlay contents can align absolute inside it)
     * `bg-black` (fallback color while the video loads)
     * `flex` `justify-center` `items-center` (centers the overlay items)
     * `overflow-hidden` (hides any clipping bounds during scale-up transitions)
2. **HTML5 `<video>` Element**: Insert a `<video>` tag inside the wrapper.
   * Set attributes:
     * `src`: Set to the imported `meal.mp4` asset.
     * `ref`: Bind to your created `videoRef` variable.
     * `loop`: Loop the playback automatically.
     * `controls={false}`: Hide native browser media player controls.
     * `muted`: Mute the video to ensure modern browsers allow autoplay and inline playback.
     * `playsInline`: Ensure the video plays inline rather than opening full-screen on mobile devices.
   * **Tailwind Classes**: `w-full` `h-full` `object-cover` (forces the video to fill the entire container like a background image)

---

### 5. Build the Overlay & Pulsing Button

Add the interactive overlay that sits on top of the video tag:

1. **Dark Overlay Wrapper**: Use a `<motion.div>` tag absolute positioned on top of the grid.
   * **Tailwind Classes**:
     * `absolute` `inset-0` (stretches the overlay to cover the whole parent wrapper)
     * `bg-black/50` (dimmed overlay so text or play buttons stand out)
     * `flex` `justify-center` `items-center` (centers the circular button in the viewport)
     * `transition-all` `duration-500` (animates transitions smoothly)
   * **Animation Details**:
     * Animate the opacity of the overlay based on state: if `isPlaying` is true, animate the opacity to `0`; otherwise, animate opacity to `1`.
     * Set conditional pointer events: if `isPlaying` is true, add `pointer-events-none` so mouse clicks can go through the invisible overlay to target the video; otherwise, add `pointer-events-auto`.
2. **Centered Control Button**: Add a circular wrapper inside the overlay container.
   * **Tailwind Classes**:
     * `w-20 h-20 md:w-28 md:h-28` (responsive size of the button)
     * `rounded-full` (makes it a perfect circle)
     * `border` `border-gold` (accent golden border)
     * `flex` `justify-center` `items-center` (centers the icon)
     * `cursor-pointer` `bg-black/20` `hover:bg-black/40` (feedback visual controls)
   * **Click Handler**: Attach the `onClick` event to call your video play/pause handler.
3. **Conditional Icon**: Inside the button, conditionally render the Lucide icons:
   * If `isPlaying` is true, render `<Pause className="text-gold size-8 md:size-12" />`.
   * If `isPlaying` is false, render `<Play className="text-gold size-8 md:size-12" />`.

---

### 6. Configure Framer Motion Animations

Fine-tune the animation properties on the components:

1. **Viewport Container Scale**:
   * Attach entry states to the outer section wrapper `<motion.div>` when it enters the viewport.
   * **Animation Details**:
     * `initial={{ scale: 0.95, opacity: 0 }}` (shrunk and hidden)
     * `whileInView={{ scale: 1, opacity: 1 }}` (scales up to full screen and fades in)
     * `viewport={{ once: true, amount: 0.25 }}` (triggers when 25% of the video section is visible)
     * `transition={{ duration: 0.8, ease: "easeOut" }}`
2. **Play Button Pulse**:
   * Convert your centered control button to a `<motion.div>` (or `<motion.button>`).
   * **Animation Details**:
     * Provide an infinite loop transition: `animate={{ scale: [1, 1.08, 1] }}`.
     * Transition parameters: `repeat: Infinity`, `duration: 2.5`, `ease: "easeInOut"`. This makes the button swell and shrink subtly to capture the user's attention.

---

## 🧪 Verification Plan & Testing

Follow these steps to confirm your video interactions:

### 1. Integration Check

* Open your main application file [App.jsx](file:///c:/Users/ojass/OneDrive/Documents/Web%20Development/gericht-restaurant/src/App.jsx).
* Import and render `Hero`, `About`, `Menu`, `Chef`, and `Intro` components in your layout structure:
  ```jsx
  import React from 'react';
  import Hero from './sections/Hero';
  import About from './sections/About';
  import Menu from './sections/Menu';
  import Chef from './sections/Chef';
  import Intro from './sections/Intro';

  function App() {
    return (
      <main className="bg-black text-white min-h-screen">
        {/* Render sections sequentially */}
        <Hero />
        <About />
        <Menu />
        <Chef />
        <Intro />
      </main>
    );
  }

  export default App;
  ```

### 2. Interaction & Playback Verification

* Start your dev server (if not running) with `pnpm dev`.
* Scroll to the Intro video section:
  * Confirm the section scales up smoothly from a slightly smaller size as you scroll into it.
  * Verify the play button circle is pulsing in size.
  * Click the Play button:
    * Confirm the dark overlay fades out to transparent.
    * Confirm the video begins playing immediately.
    * Confirm the button icon toggles to a Pause icon.
  * Click the Pause button (or anywhere inside the overlay depending on click handler reach):
    * Confirm the video stops playing.
    * Confirm the dark overlay fades back into view.
    * Confirm the icon returns to a Play state.
