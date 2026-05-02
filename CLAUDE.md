@AGENTS.md

# Grow with You - Project Rules and Configuration

## 1. AI Behavioral Rules (Hard Rules)
- **Think before coding:** State your assumptions before writing any code. If multiple approaches exist, present the options and ask for confirmation before proceeding.
- **Simplicity first:** Always choose the simplest solution with the least amount of code. Do not write a 200-line solution for a problem that can be solved in 50 lines.
- **Surgical changes:** Modify only the code strictly necessary for the current task. No unsolicited refactoring or formatting in other files.
- **No destructive commands:** Never execute irreversible terminal commands (e.g., `git push --force`) without explicit permission. If unsure, ask first!
- **Goal-driven execution:** Start every task by defining clear, verifiable success criteria.

## 2. Project Context & Tech Stack
- **Goal:** Build a modern, responsive landing page for the "Grow with You" premium baby clothes rental service.
- **Tech Stack:** Next.js (App Router), Tailwind CSS, React (Functional components, Hooks).
- **Design System:** You must STRICTLY follow the `docs/design_system.md` file for pixel-perfect UI implementation, utilizing the exact colors, typography, and component structures defined there.

## 3. UI / Design Architecture (Sections)
The landing page must be built in the following logical order:
1. **Navbar:** Logo (left), Navigation links (center), Login / Register buttons (right).
2. **Hero:** Main headline, two CTAs below it, and images of babies masked into amorphous blob shapes on both sides.
3. **Testimonials:** 3 quote cards in a staggered/rotated layout.
4. **Features:** 4 columns with icons (64x64px) and centered text, followed by a primary CTA button.
5. **How it works:** 3 columns (Choose, Wear, Swap) with images and connecting arrows.
6. **Bottom CTA:** Dark purple rounded container with text on the left and an image on the right.
7. **Footer:** Beige minimalist layout with a newsletter subscription input and social icons.