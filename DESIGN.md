---
name: Vibrant Heritage
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#424751'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#737782'
  outline-variant: '#c3c6d2'
  surface-tint: '#2d5ea5'
  primary: '#003269'
  on-primary: '#ffffff'
  primary-container: '#0d488e'
  on-primary-container: '#93b9ff'
  inverse-primary: '#aac7ff'
  secondary: '#8a4098'
  on-secondary: '#ffffff'
  secondary-container: '#f19dfd'
  on-secondary-container: '#742b83'
  tertiary: '#522700'
  on-tertiary: '#ffffff'
  tertiary-container: '#743900'
  on-tertiary-container: '#ffa25a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#07458b'
  secondary-fixed: '#fed6ff'
  secondary-fixed-dim: '#f6adff'
  on-secondary-fixed: '#350041'
  on-secondary-fixed-variant: '#6f267e'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb782'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system merges traditional luxury with a vibrant, modern spectrum. It targets a discerning audience looking for home elegance but appreciates a contemporary, colorful energy. The style is **Modern Corporate** with **High-Contrast** accents, utilizing the sophistication of editorial typography against a canvas that celebrates color through light-filled gradients and crisp execution.

The visual mood is optimistic, premium, and structured. It avoids the heaviness of traditional luxury by using the logo's prismatic palette to inject life into professional layouts.

## Colors

This design system utilizes a high-chroma palette derived from the brand's logo. The core logic balances a deep, professional blue-to-purple foundation with energetic teal and orange highlights.

- **Primary & Secondary:** Deep Royal Blue (#0D488E) and Imperial Purple (#732A82) are used for core branding, headers, and primary navigation.
- **Accents:** Vibrant Orange (#EF7D00) and Deep Teal (#009393) are reserved for call-to-actions, notifications, and decorative highlights.
- **Backgrounds:** Maintain a clean, high-clarity white (#FFFFFF) or very light grey (#F8F9FA) to ensure the vibrant accents pop without overwhelming the user.
- **Gradients:** Linear gradients should transition from Teal to Blue or Orange to Purple (45-degree angle) to mimic the logo’s fluid depth.

## Typography

The typography strategy relies on the contrast between the classic, serif authority of **Playfair Display** and the clean, functional reliability of **Work Sans**.

- **Display & Headlines:** Playfair Display is used to convey "Heritage" and "Luxe." Use heavier weights for large titles to allow the serif details to shine.
- **Body & Interface:** Work Sans provides high legibility for product descriptions and interface elements.
- **Hierarchy:** Ensure a clear distinction between the two fonts; do not use Playfair for small text or UI labels. Use uppercase Work Sans with slight tracking for labels and sub-headers.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, structured feel, transitioning to a flexible fluid model for mobile.

- **Grid:** 12-column system on desktop with generous 24px gutters.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **Margins:** Desktop views utilize wide 64px side margins to create an "editorial" feel with plenty of negative space.
- **Safe Zones:** Group related items with smaller increments (8px, 16px) and separate sections with larger increments (64px, 80px) to maintain a luxurious sense of breathability.

## Elevation & Depth

To match the logo’s dimensionality, the design system uses **Tonal Layers** combined with **Ambient Shadows**.

- **Surface Levels:** Use slight variations in neutral tones (White to Light Grey) to define depth rather than heavy borders.
- **Shadows:** Shadows are highly diffused and soft, using a slight tint of the Primary Blue (#0D488E) at 5-10% opacity rather than pure black. This keeps the "Luxe" feel clean.
- **Interactive Depth:** When an element is hovered, it should subtly lift with a slightly more pronounced ambient shadow and a very thin (1px) gradient border.

## Shapes

The shape language is **Soft** and tailored. It avoids the playfulness of fully rounded "pill" shapes, opting instead for professional, subtle radii that feel architectural.

- **Standard Radius:** 0.25rem (4px) for input fields and small buttons.
- **Large Radius:** 0.5rem (8px) for cards and featured modules.
- **Iconography:** Use "Duotone" or "Gradient-filled" icons that mirror the logo's color transitions, maintaining sharp outer edges but soft internal curves.

## Components

### Buttons
Primary buttons use a linear gradient (Teal to Blue) with white text. Secondary buttons use a transparent background with a 1px solid Primary Blue border. Hover states should introduce a subtle glow effect using the accent colors.

### Cards
Cards are white with a 1px light grey border and a soft ambient shadow. Featured cards can utilize a top-border "accent strip" using the brand's orange or teal.

### Inputs & Selection
Input fields use a 4px corner radius. Focused states should use the Teal accent for the border. Checkboxes and radios use the Secondary Purple for the "checked" state to distinguish them from primary actions.

### Chips & Tags
Use chips for categories (e.g., "Silk," "Velvet," "Modern"). These should have a subtle background tint of the accent colors (e.g., 10% opacity Orange) with high-contrast text.

### Dividers
Use very thin, light grey lines. For "Luxe" sections, a short, centered divider can be used as a stylistic element, utilizing a small 2px gradient line.