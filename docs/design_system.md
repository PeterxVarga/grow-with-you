# Design System - Grow with You

Strict design system extracted from the Figma design. Ensure pixel-perfect implementation and maintain the warm color palette.

## ⚙️ Tailwind Config Guidelines
The colors and fonts listed below are already defined in the `tailwind.config.ts` file under `theme.extend`. Use these clean Tailwind utility classes (e.g., `text-text-main`, `bg-brand-coral`) instead of arbitrary values (e.g., `text-[#1a1917]`).

## 🎨 Color Palette

### Card Colors (bg-card-*)
- `#feebba`  /* Yellow - testimonial cards */
- `#e2eff0`  /* Light blue - testimonial cards */
- `#ffd3dd`  /* Pink - testimonial cards */

### Brand Colors (brand-*)
- `#EAB8B5`            /* Coral (brand-coral) - primary button */
- `#dea09d`            /* Darker coral (brand-coral-dark) - icons, hover states */

### Text Colors (text-*)
- `#1a1917`            /* Black (text-main) - primary text */
- `#3a353e`            /* Mid-gray (text-muted) - secondary text */
- `rgba(26,25,23,0.9)`   /* 90% opacity - quotes */
- `rgba(26,25,23,0.75)`  /* 75% opacity - large quotation marks */
- `rgba(26,25,23,0.7)`   /* 70% opacity - descriptions */

### Background Colors (bg-*)
- `#ffffff`  /* White */
- `#faf9f7`  /* Cream (bg-cream) */
- `#f6f3f0`  /* Beige (bg-beige) */
- `#F8ECEB`  /* Footer (bg-footer) */
- `#2F1D41`  /* Footer CTA (bg-footer-cta) */

### Borders
- `rgba(26,25,23,0.16)`   /* Standard border (border-default) */
- `rgba(222,160,157,0.2)` /* Badge border (border-badge) */

## 📝 Typography

### Font Families
| Font | Weight | Usage | Tailwind Font Class |
|------|--------|-------|---------------------|
| **Parkinsans** | SemiBold, Medium, Bold | Headlines, emphasized text | `font-parkinsans` |
| **Source Sans 3** | Regular, Medium | Body text, buttons, UI elements | `font-source-sans` |
| **Caveat Brush** | Regular | Badges (UPPERCASE) | `font-caveat` |

### Font Sizes, Tracking & Responsiveness
*Crucial: Scale down typography and spacing for mobile views (below `md` breakpoint).*

| Element | Desktop Size | Mobile Size | Tracking | Leading | Font |
|---------|--------------|-------------|----------|---------|------|
| Hero Title | 64px | 40px-48px | -1.24px | 1.1 (or 72px)| Parkinsans SemiBold |
| Section Title | 40px | 32px | -0.64px | 44px | Parkinsans SemiBold |
| Large Quote Mark | 96px | 72px | -1.6px | none | Parkinsans Medium |
| Quote Text | 22px | 18px-20px | -1.6px | 36px | Parkinsans Medium |
| Testimonial Desc. | 18px | 16px | -0.36px | 25.2px | Source Sans 3 Medium |
| Button Text | 18px | 16px-18px | - | 24px | Source Sans 3 Medium |
| Feature Title | 20px | 18px | - | 24px | Source Sans 3 Medium |
| Body Text | 18px | 16px | - | 26px | Source Sans 3 Regular |
| Badge | 16px | 14px | -0.32px | 24px | Caveat Brush Regular |

## 📦 Components

### Button
Three variations, all pill-shaped (`rounded-[100px]`). **Implement smooth hover effects for all buttons (e.g., `hover:opacity-90` or darken background) using `transition-colors duration-200`.**

**Primary Button**
- Background: `#EAB8B5` (brand-coral)
- Text Color: `#1a1917` (text-main)
- Padding: `32px` horizontal, `16px` vertical

**Secondary Button**
- Background: `#1a1917` (text-main)
- Text Color: `white`
- Padding: `24px` horizontal, `12px` vertical

**Outline Button**
- Background: transparent
- Text Color: `#1a1917` (text-main)
- Padding: `32px` horizontal, `16px` vertical
- Border overlay: `rgba(26,25,23,0.16)`

### TestimonialCard
- Height: `auto` on mobile, `440px` on desktop
- Border radius: `22px`
- Padding: `32px` top/horizontal, `64px` bottom (reduce on mobile)
- Border: `rgba(26,25,23,0.16)`
- Overflow: `clip` with `inherit` radius
- **Rotation values:** `-4` deg, `0` deg, `4` deg (Apply to a wrapper element)

### Section & SectionHeader
- **Section Wrapper:** Padding vertical: `120px` (mobile: `64px` or `80px`), Gap: `80px` (mobile: `48px`), Max width: `1200px`.
- **SectionHeader:** Max width: `846px`, Gap: `16px`. Text should be centered.

## 🔧 Special Techniques & Best Practices

1. **Border Overlay Pattern (CRITICAL):** Add borders using an `aria-hidden` div to ensure perfect rounding and opacity behavior without affecting the box model:
```tsx
<div className="relative rounded-[24px]">
  
  <div aria-hidden="true" className="absolute border border-[rgba(26,25,23,0.16)] border-solid inset-0 pointer-events-none rounded-[inherit]" />
</div>
