# Design Specification - Anuthida Wanseng CV

## 1. Direction & Rationale
**Style:** Modern Minimalism (Premium)
**Essence:** Clean, trustworthy, professional. The design emphasizes content readability through generous whitespace (40-50% of viewport) and a strict 90/10 neutral/accent color ratio.
**Rationale:** For a UI/UX and Web Design candidate, the CV itself serves as the first portfolio piece. A restrained, perfectly aligned interface demonstrates attention to detail and mastery of fundamental design principles (spacing, typography, hierarchy) without relying on "gimmicks".
**References:** Linear (clean lines), Notion (content-first), Stripe (typography).

## 2. Design Tokens
*Reference `docs/design-tokens.json` for full machine-readable values.*

### 2.1 Color Palette (Cool Gray + Modern Blue)
| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `primary-500` | `#0066FF` | CTAs, Links, Active States, Progress Bars |
| **Surface** | `neutral-50` | `#FAFAFA` | Section Backgrounds (Alternating) |
| **Border** | `neutral-200` | `#E5E5E5` | Card Borders, Dividers |
| **Text Main** | `neutral-900` | `#171717` | Headings, Body Text (AAA Contrast) |
| **Text Sec** | `neutral-500` | `#A3A3A3` | Metadata, Captions |

### 2.2 Typography (Inter)
| Level | Size (Desktop) | Weight | Line Height | Case |
| :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | 64px | Bold 700 | 1.1 | Normal |
| **H2 Section** | 48px | Bold 700 | 1.2 | Normal |
| **H3 Title** | 32px | Semibold 600 | 1.3 | Normal |
| **Body** | 16px | Regular 400 | 1.6 | Normal |
| **Caption** | 14px | Regular 400 | 1.5 | Uppercase (opt) |

### 2.3 Spacing & Shape
- **Grid Unit:** 4pt (Base 8px preferred)
- **Section Spacing:** 96px (Hero), 64px (Standard)
- **Card Padding:** 32px (Desktop), 24px (Mobile)
- **Radius:** 12px (Buttons, Inputs), 16px (Cards)
- **Shadows:** `shadow-sm` (Cards), `shadow-lg` (Hover)

## 3. Components

### 3.1 Buttons
- **Primary:** `h:56px`, `bg:primary-500`, `text:white`, `radius:12px`. Hover: Lift -2px.
- **Secondary:** `h:56px`, `border:2px solid neutral-200`, `text:neutral-900`. Hover: `bg:neutral-50`.

### 3.2 Cards (Skills/Portfolio)
- **Structure:** White background, `radius:16px`, `p:32px`.
- **Interaction:** Hover `transform:translateY(-4px)`, `shadow-lg`.
- **Border:** Optional `1px solid neutral-100` for definition.

### 3.3 Timeline Item (Education/Experience)
- **Marker:** `w:12px h:12px` circle, `bg:primary-500`.
- **Line:** `w:2px`, `bg:neutral-200` connecting markers.
- **Layout:** Date (Left/Top) + Content (Right/Bottom).

### 3.4 Navigation
- **Type:** Sticky Header.
- **Content:** Logo (Name) Left, Links Right (About, Skills, Portfolio, Contact).
- **Mobile:** Hamburger menu.

### 3.5 Contact Block
- **Layout:** Icon + Label + Value stack.
- **Style:** Minimalist icons (24px), large readable text.

## 4. Layout & Responsive Patterns

### 4.1 Global Structure (SPA)
- **Max Width:** 1200px (Centered Container).
- **Flow:** Hero → About → Skills → Education → Portfolio → Contact.

### 4.2 Hero Section (Split Pattern)
- **Desktop:** 50/50 Split. Text Left (Vertical Center), Image Right (Full height or floating card).
- **Mobile:** Stacked. Image Top, Text Bottom.
- **Content:** H1 Name, Large Body Tagline, 2 Buttons (Pri/Sec).

### 4.3 Skills Grid
- **Desktop:** 4 Columns. Category Headers + List/Pills.
- **Visuals:** Clean pill tags `bg:neutral-100` `text:neutral-900` or Progress bars (thin, `h:4px`, `bg:primary-100` fill `primary-500`).

### 4.4 Portfolio Grid
- **Desktop:** 3 Columns. Card aspect ratio 4:3.
- **Mobile:** 1 Column.
- **Content:** Thumbnail (Cover) + Title (H3) + Short Desc + "View Case" Link.

### 4.5 Responsive Strategy
- **Breakpoints:** `md:768px`, `lg:1024px`.
- **Text:** Scale down H1 to 48px on mobile.
- **Spacing:** Reduce section gaps to 48px on mobile.

## 5. Interaction
- **Scroll:** Smooth scroll to anchor links.
- **Reveal:** Fade-in + Slide-up (30px) for sections on scroll (`duration:300ms`, `ease-out`).
- **Hover:** All interactive elements must have hover states (opacity/transform).
- **Performance:** Animate `opacity` and `transform` only.

---
**Compliance Check:**
- [x] WCAG AA Colors (#171717 on White, #0066FF on White for large text)
- [x] 4pt Grid System (Spacing 32, 48, 64, 96)
- [x] No decorative distractions
