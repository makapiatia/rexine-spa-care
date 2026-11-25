# Rexine Spa Care

The website for Rexine Spa Care, a spa and hot tub maintenance service in the Phoenix area. It has four pages: a
home page with a hero, a scrolling tagline, an introduction and the main services; a Services + Pricing page with
what each visit includes, the maintenance plans and an accordion of what to expect; an About Us page introducing the
technician; and a Contact page with a form and a service area map. Customers schedule by calling, texting or emailing,
so those options appear throughout the site.

**Live site:** [rexinespacare.com](https://www.rexinespacare.com)

---

## Original work, made by hand

- **The Rexine Spa Care logo was designed by me, Tia Rexine, without the use of AI.** It started as hand sketches and
  brainstorming and was then executed in Adobe Illustrator.
- **The T-rex badge in the footer credit is my own mark**, filled with the site's off-white so its lettering shows
  the navy behind it.
- **Stock photography from [Adobe Stock](https://stock.adobe.com)**, used under license: the bubbly water
  background in the home page hero, and the filter photo and spa jet photo on the About Us page.
- **Spa brand and sanitizer logos** on the About Us and home pages belong to their respective companies.
- **Built with help from Claude.** I used Claude, Anthropic's AI assistant, to help with many site details: code,
  layout, accessibility testing, search metadata and copy edits. The logo and the T-rex badge are entirely my own.

---

## Tech stack

| Package | Version | What it does here |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.4 | Framework: App Router, static pages, image optimization, font loading and page metadata. |
| [React](https://react.dev) + React DOM | 19.3 | UI library. Interactive pieces (navigation, carousels, marquee, contact form) are client components. |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Styling. Almost every style is an inline utility class; `src/index.css` holds the design tokens. |
| `@tailwindcss/postcss` | 4.3 | Runs Tailwind through PostCSS (configured in `postcss.config.mjs`). |
| [tailwindcss-classnames](https://github.com/muhammadsammy/tailwindcss-classnames) | 3.2 | Groups long Tailwind class lists into readable lines and handles conditional classes. |
| [Embla Carousel](https://www.embla-carousel.com) | 8.6 | The swipeable service and plan cards on phones and tablets; it switches off on desktop, where the cards sit side by side. |
| [Vercel Analytics](https://vercel.com/analytics) | 2.0 | Privacy-friendly page view counts. |

Built into Next.js and also used:

- **`next/font`** self-hosts two Google typefaces with no layout shift: **Fraunces** (headings, with its soft,
  "wonky" style) and **Mulish** (body text, buttons and labels).
- **`next/image`** serves responsive, optimized photos and brand logos.
- **Page metadata** in `src/app` gives every page its own title, description and link preview image.
- **[FormSubmit](https://formsubmit.co)** delivers contact form messages by email, so the site needs no backend.

---

## Project structure

```
src/
├── app/
│   ├── layout.js            Fonts, <html>, navigation, footer and the site-wide title and description
│   ├── metadata.js          Builds each page's title, description and link preview
│   ├── page.js              Home
│   ├── services/page.js     Services + Pricing
│   ├── about-us/page.js     About Us
│   └── contact/page.js      Contact
├── components/
│   ├── Navigation/          Navigation, DesktopNavigation, MobileNavigation
│   ├── Main/
│   │   ├── Main.js          The home page: Hero, Marquee and ServiceSection
│   │   ├── HeroSection/     The hero with the logo and the two main buttons
│   │   ├── Marquee.js       The scrolling "a clean spa is a happy spa" strip and its pause button
│   │   ├── PageBanner.js    The light blue header with the wavy edge and logo badge on inner pages
│   │   ├── Carousel.js      Accessible Embla carousel used for the service and plan cards
│   │   ├── Stickers.js      The sparkle, bubbles, drop, sun and wave stickers and their hover bubbles
│   │   ├── Services/        Home services, Services + Pricing sections, plans, accordion, shared buttons
│   │   ├── AboutUs/         About Us
│   │   └── Contact/         Contact form and the service area map
│   └── Footer/              Contact details, hours, legal links and the "Site by" badge
├── utils/hooks/             useMediaQuery
├── assets/images/           Logos, photos, brand and sanitizer logos
└── index.css                Tailwind import, design tokens, animations and the focus ring
public/
├── og-image.png             The link preview image
├── trex-badge.png           The T-rex badge, and trex-badge-bold.png for small sizes on standard screens
└── favicon.ico, logo*.png, manifest.json, robots.txt
```

---

## Content

All copy lives in the components, next to the layout it belongs to:

| What | Where |
|---|---|
| Site title, description and link preview | `src/app/layout.js`, each `page.js` and `src/app/metadata.js` |
| Home intro and service cards | `components/Main/Services/ServiceSection.js` |
| Scrolling tagline | `components/Main/Marquee.js` |
| Maintenance and Full Cleaning details | `components/Main/Services/ServiceDetailsSectionDesktop.js` |
| Plan prices and perks | `components/Main/Services/PlanPricingSection.js` |
| What To Expect accordion | `components/Main/Services/WhatToExpectSection.js` |
| Call or text / Email buttons | `components/Main/Services/servicePageStyles.js` (`ContactButtons`) |
| About Us story, fun facts and brands | `components/Main/AboutUs/AboutUs.js` |
| Footer contact details and hours | `components/Footer/Footer.js` |

How the content behaves:

- **One phone number and email everywhere.** Phone links use `tel:` so phones dial directly, and the footer's "Send
  us a text" link uses `sms:` to open a new message.
- **Lists drive the layout.** Service cards, plans, fun facts and accordion items are arrays at the top of their
  files, so adding or reordering one is a one-line change.
- **The accordion takes one or more paragraphs.** An item's `text` can be a string or an array of paragraphs, and
  `showContactButtons` adds the Call or text / Email buttons under it.

---

## Design system

`src/index.css` defines everything the components share:

- **Colors:**
  - `extra-light-blue` (#e8faff) for the page background and off-white surfaces, and `light-blue` (#c3edfa) for
    the inner page banners.
  - `rexine-blue` (#0f52ba) for the navigation, footer and dark sections, and `deep-blue` (#0b387e) for text,
    borders and the hard drop shadows.
  - Pop colors for cards and stickers: `pop-sky` (#5cc8ff), `pop-aqua` (#b8eef9), `pop-periwinkle` (#a9b8ff) and
    `pop-cobalt` (#2f6bff). Stickers always use a different color from the card they sit on.
- **Fonts:** `font-fraunces` and `font-mulish`.
- **Shapes:** thick deep blue borders with offset shadows, rounded cards, and a wavy edge where sections meet. The
  wave overlaps the next section by 1px so no hairline gap shows on high-density screens.
- **Spacing:** a 24px side gutter on phones and 48px from `sm:` up, 56px between sections on phones and 96px from
  `md:` up, and 24px card padding on phones (32px from `md:`).
- **Breakpoints:**
  - `xs:` 375px, `sm:` 500px, `md:` 768px, `lg:` 1024px, `xl:` 1280px and `1xl:` 1476px (the content width).
  - `sm:` starts at 500px, earlier than Tailwind's default, so check layouts between 500px and 640px.
  - The desktop navigation takes over at `lg:` (1024px); below that is the menu button.

---

## Search and sharing

- **Title and description:** each page sets its own through `pageMetadata()` in `src/app/metadata.js`, which feeds
  the browser tab, Google results and link previews on iMessage, Facebook, Slack and X.
- **Link preview image:** `public/og-image.png` (1200×630) with alt text, attached to every page.
- **Canonical domain:** previews point at `https://www.rexinespacare.com`, since the bare domain redirects to `www`.

---

## Accessibility

The site is built with **WCAG 2.2 Level AA** as its target.

**How it was checked**

- **Custom scripted checks** run in the browser on every page at mobile (375px), tablet (768px) and desktop (1280px)
  widths: image alt text, link and button names, heading order, form labels, landmarks, page language, duplicate IDs,
  text contrast, touch target size and sideways scrolling.
- **Contrast calculated separately** where a script can't read the background. White text on the 70% navy photo
  overlay is at least 4.77:1, even over a pure white photo.
- **Screenshots** of key sections at phone and desktop widths, and of the home page with reduced motion turned on.
- **Not yet done:** an axe-core audit, a full keyboard walk and testing with a screen reader.

**What's in place**

- **Contrast:** body text and buttons meet 4.5:1 or better. White on `rexine-blue` is 7.15:1, navy on the aqua
  cards is 8.84:1 and the aqua "happy" on the blue strip is 5.67:1.
- **Motion:**
  - The scrolling tagline has a pause and play button, and it stops scrolling when a device asks for reduced
    motion.
  - All decorative animations (bobbing stickers, hover bubbles, wiggles) only run when motion is allowed.
- **Screen readers:**
  - A skip link, `main` and `footer` landmarks, labeled navigation with the current page marked, and one `h1` per
    page.
  - The scrolling tagline is read once, not repeated, and decorative stickers and stars are hidden.
  - Carousels announce themselves with labeled slides and controls, and the What To Expect accordion uses native
    disclosure elements.
- **Keyboard:**
  - A two-tone focus ring (deep blue with a white halo) stays visible on light and dark sections.
  - The mobile menu reports its open state, closes with Escape and keeps its links out of the tab order when closed.
- **Contact form:**
  - Every field has a visible label, and name, phone, email and city support autofill.
  - Errors are linked to their fields, and focus moves to the first field that needs fixing. A failed send is
    announced as an alert, and focus moves to the thank-you message after a successful one.
- **Touch targets:** buttons and links are at least 24×24px.
- **Reflow:** no sideways scrolling from 375px up.

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

The site deploys to [Vercel](https://vercel.com) with the default Next.js settings (`vercel.json`), at the
[rexinespacare.com](https://www.rexinespacare.com) domain. The bare domain redirects to `www`.
