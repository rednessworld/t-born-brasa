---
name: Obsidian & Gold
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5b8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#998f83'
  outline-variant: '#4d463c'
  surface-tint: '#e0c298'
  primary: '#e2c399'
  on-primary: '#402d0f'
  primary-container: '#c5a880'
  on-primary-container: '#513d1d'
  inverse-primary: '#725b38'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#bac8e3'
  on-tertiary: '#233146'
  tertiary-container: '#9fadc7'
  on-tertiary-container: '#334157'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fedeb2'
  primary-fixed-dim: '#e0c298'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#584323'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#b9c7e2'
  on-tertiary-fixed: '#0d1c30'
  on-tertiary-fixed-variant: '#3a475d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  ivory-text: '#F5F5F5'
  deep-obsidian: '#0B0B0B'
  brushed-gold: '#C5A880'
  charcoal-surface: '#1A1A1A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

This design system is built for a high-end, theatrical dining experience. The brand personality is unapologetically luxurious, cinematic, and assertive. It evokes the feeling of an exclusive, dimly lit steakhouse where the spotlight is reserved for the craft. 

The design style is **Minimalist / Dark Cinematic**. It leverages heavy whitespace (utilizing "negative black space"), refined typography, and high-contrast gold accents to create a sense of prestige. Every interaction should feel deliberate and premium, using subtle motion and depth to guide the user through a curated culinary journey.

## Colors

The palette is rooted in deep, light-absorbing neutrals to allow the gold accents and food photography to "pop" theatrically.

- **Primary (Brushed Gold):** Reserved for call-to-actions, brand accents, and decorative borders. It represents the warmth of the flame and the luxury of the service.
- **Surface (Deep Obsidian & Charcoal):** The background is almost entirely black to minimize distractions. Tonal shifts to charcoal are used sparingly to define interactive surfaces or card containers.
- **Typography (Ivory White):** High-contrast but softer than pure white to prevent eye strain against the dark background, maintaining a sophisticated editorial look.

## Typography

The typography strategy relies on the tension between the classic, high-contrast Serif (Playfair Display) and the functional, neutral Sans-Serif (Inter).

- **Headlines:** Always use Playfair Display. Large display type should use tighter letter spacing for a more dramatic, editorial impact. Use "Sentence case" for headings to maintain a modern feel, or "ALL CAPS" for small labels to add authority.
- **Body Text:** Inter provides maximum legibility on dark backgrounds. Ensure line heights are generous to give the text "room to breathe" amidst the dark environment.
- **Scalability:** On mobile, display sizes are significantly reduced to prevent awkward line breaks while maintaining the same weight and brand impact.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure content is perfectly centered and framed, much like a stage. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Content is constrained to a 1200px container.
- **Rhythm:** Spacing should be generous. Section padding is set to 120px to enforce the "premium" feel of luxury and exclusivity.
- **Adaptive Rules:** On mobile, margins shrink to 20px, and content primarily stacks in a single column. Horizontal scrolling is permitted for menu categories or photo galleries to maintain a sleek, app-like experience.

## Elevation & Depth

In this dark-themed design system, elevation is not conveyed through traditional shadows, which are invisible on #0B0B0B. Instead, depth is achieved through **Tonal Layers** and **Glassmorphism**.

- **Surface Tiers:** The base layer is Deep Obsidian. Floating elements (cards, menus) use Rich Charcoal Gray (#1A1A1A) to subtly lift from the background.
- **Glassmorphism:** The navigation bar and overlay modals use a backdrop-blur effect (20px blur) with a 60% opacity fill of the background color. This maintains the "cinematic" atmosphere by allowing the background content to feel present but secondary.
- **Outlines:** Instead of shadows, use 1px "Brushed Gold" or low-opacity white outlines to define the boundaries of active elements or primary buttons.

## Shapes

The shape language is **Sharp (0px)**. 

To convey a sense of high-fashion and architectural precision, all UI elements (buttons, cards, input fields) use sharp 90-degree corners. This avoids the "friendly" look of rounded corners, opting instead for a formal, rigid, and sophisticated aesthetic. The only exception is for imagery, which may occasionally use a subtle circular mask for specific "chef's special" features to draw attention.

## Components

- **Buttons:** Primary buttons feature a solid Brushed Gold background with Obsidian text. Secondary buttons are transparent with a 1px Gold border and Ivory text. All buttons use sharp corners and 'label-md' typography (uppercase).
- **Navigation Bar:** Fixed to the top with a 20px backdrop-blur. The logo is centered. Navigation links use Inter at 14px with generous horizontal spacing.
- **Menu Cards:** These should be minimalist. A large, high-resolution food image on top, followed by a title in Playfair Display and price in Gold. The container should have no background, only a thin 1px charcoal divider between items.
- **Input Fields:** Bottom-border only. Labels float above the line in 'label-sm' style. Focus state changes the bottom border color to Brushed Gold.
- **Chips/Tags:** Used for dietary requirements (e.g., "Prime Cut", "Aged"). These are small, uppercase labels with a 1px Ivory border, no background.
- **Booking Widget:** A floating "charcoal-surface" component that uses the tonal layering technique to sit prominently above the page content.