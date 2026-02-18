export type CaseStudy = {
  id: string
  title: string
  problem: string
  solution: string
  results: string
  tech: string
  /** Optional: client or brand name */
  clientName?: string
  /** Optional: live site URL */
  projectUrl?: string
  /** Optional: paths to screenshots (e.g. in /public/work/slug-1.jpg) */
  screenshots?: string[]
  /** Optional: long-form content (paragraphs, markdown-like line breaks) */
  content?: string
  /** If true, hide from Selected Work listing (e.g. placeholders) */
  hidden?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: "justmylook-algolia-theme",
    title: "Just My Look — Algolia Search & Custom Theme",
    clientName: "Just My Look",
    projectUrl: "https://www.justmylook.com/",
    problem:
      "Just My Look, a major UK beauty ecommerce brand, needed a best-in-class search experience (autocomplete, search results, collection filtering, recommendations) and a full custom theme to support scale and campaign flexibility.",
    solution:
      "Integrated Algolia across the store with customised widgets: instant-search autocomplete, dedicated search results page, collection page filtering, product recommendations, and cart recommendations. Built a full custom theme on a self-based foundation so the client could own and iterate on the codebase.",
    results:
      "Faster, more relevant search; improved discovery via recommendations; a single theme tailored to the brand with editable sections and a maintainable codebase for the Jellywall team.",
    tech: "Algolia (InstantSearch, Recommend API), Liquid, Shopify 2.0, JavaScript, CSS",
    screenshots: [
      "/work/justmylook-autocomplete.jpg",
      "/work/justmylook-search.jpg",
      "/work/justmylook-collection.jpg",
      "/work/justmylook-theme.jpg",
    ],
    content: `Using Algolia APIs and custom widgets

Algolia was integrated using the InstantSearch.js library and Algolia’s Recommend API. Each surface was tailored to the site’s design and UX:

• Autocomplete widget — As users type in the search bar, the Algolia Search API returns suggestions (products, categories, suggestions) in real time. The widget is customised with custom hits templates, styling to match Just My Look’s branding, and analytics for popular queries and click-through.

• Search results page — A dedicated search page uses InstantSearch with customisable hits, filters (e.g. category, brand, price), sort options, and pagination. The Algolia Search API is queried with filters and facets so results stay relevant and fast.

• Collection page — Collection and catalog pages use Algolia’s index filtered by collection (or equivalent) so filtering and sorting are handled by Algolia instead of Liquid, improving performance and consistency with the main search experience.

• Product recommendations — The Recommend API (Related Products and Frequently Bought Together) powers “You might also like” and similar blocks on product and cart. Recommendations are configured in the Algolia dashboard and rendered via custom widgets that match the theme’s product cards.

• Cart recommendations — Cart page recommendations use the Recommend API (e.g. Frequently Bought Together or related products based on cart contents) to increase average order value. The widget is wired to the cart state and styled to fit the checkout flow.

All widgets use Algolia’s JavaScript API with custom UI components, so the team can adjust layout and copy without changing the core search logic. Indexing is handled via the Algolia Shopify integration (or a sync script) so product and collection data stay in sync.`,
  },
  {
    id: "baselondon-algolia",
    title: "Base London — Full Customization & Third-Party Integrations",
    clientName: "Base London",
    projectUrl: "https://baselondon.com/",
    problem:
      "Base London, the UK men’s footwear brand (shoes, boots, brogues, loafers, wedding and work styles), needed a store that felt fully their own: on-brand layout and UX, seamless search and discovery, and key third-party apps (search, payments, promotions) integrated and customised rather than out-of-the-box.",
    solution:
      "Delivered full theme and UX customization so the site reflects Base London’s catalog and campaigns — from category navigation (Shoes, Boots, Collections, Winter Sale) and product presentation to trust messaging (free UK delivery, returns, Klarna). Integrated and customised third-party apps including Algolia for search and recommendations, and ensured payment and promotional integrations fit the design and checkout flow.",
    results:
      "A cohesive, brand-aligned store with fast search, clear discovery, and smooth third-party app behaviour. The brand and team can run campaigns and iterate on content without fighting the theme or integrations.",
    tech: "Liquid, Shopify 2.0, Algolia (search & recommendations), third-party app integration (payments, Klarna), JavaScript, CSS",
    screenshots: [
      "/work/baselondon-autocomplete.jpg",
      "/work/baselondon-search.jpg",
      "/work/baselondon-recommendations.jpg",
    ],
    content: `Full customization and third-party app integration

Base London’s site is built around their real catalog and customer journey: men’s shoes and boots (brogues, Chelsea boots, loafers, work shoes, wedding shoes), clear category and collection structure, seasonal campaigns (e.g. Winter Sale, New In), and trust and payment options visible where they matter.

Theme and UX were fully customised so layout, product grids, colour swatches, and promotional sections match the brand. No reliance on default theme blocks; sections and templates were tailored for footwear (e.g. style, colour, size) and for campaigns the team runs.

Third-party apps were integrated and customised rather than dropped in as standard widgets. Algolia powers search (autocomplete, search results, collection filtering) and recommendations (product and cart) with UI and behaviour aligned to the theme. Payment and financing options (including Klarna) and any promo or loyalty integrations were wired in so they fit the design and checkout flow without looking or feeling like generic plugins.

The result is a single, consistent experience: custom front end and integrated apps working together so Base London can focus on product and campaigns.`,
  },
  {
    id: "closecompany-headless",
    title: "Close Company Living — Headless Store (Shopify + React + Sanity)",
    clientName: "Close Company Living",
    projectUrl: "https://closecompanyliving.com/",
    problem:
      "Close Company Living, a UK furniture and homeware brand (sofas, armchairs, quilts, ceramics), needed a content-rich, design-led store where customers could configure high-ticket furniture by fabric and finish, order free fabric swatches, and trust the brand with clear editorial and policies — without the constraints of a standard Shopify theme.",
    solution:
      "Built a headless storefront with Shopify (Storefront API) for cart, checkout, and product data; React for the front end; and Sanity for editorial content, imagery, and flexible page building. Implemented a custom variant switch so sofa and armchair variants (e.g. fabric, finish) update the main product image and price in real time. Wired Sanity-driven content (Our promise, About, fabric swatches, collection storytelling) into the same React app so the experience stays consistent and on-brand.",
    results:
      "A single, fast storefront that blends commerce and content: customers can explore furniture by fabric, order swatches, and read the brand story without leaving the flow. The team can update copy and imagery in Sanity and products in Shopify independently.",
    tech: "Shopify Storefront API, React, Sanity CMS, headless architecture, custom variant/option handling",
    screenshots: [
      "/work/closecompany-home.jpg",
      "/work/closecompany-product-variants.jpg",
      "/work/closecompany-fabrics.jpg",
    ],
    content: `Why headless and what took the most effort

Close Company sells furniture (sofas like Fane, Moy, Darwell, Cusher; armchairs) and homeware (quilts, cushions, ceramics). Many products have multiple fabric and finish options — e.g. “Cream & Marine Orsay Boucle”, “Plum Noss Velvet”, “Tobacco Caldey Velvet Corduroy” — and each variant has its own imagery and sometimes copy. The site also leans on editorial content: “Our promise”, “About Close Company”, fabric swatch ordering, and collection storytelling. A traditional theme would have made it hard to keep that content and product config in one seamless experience.

Headless architecture: Shopify holds products, variants, cart, and checkout; Sanity holds pages, sections, and rich media. The React app fetches from both, so the marketing team can change hero copy or add a new collection story in Sanity without touching Shopify, and the commerce team can add products or variants in Shopify without touching the front-end code.

Custom variant switch: The trickiest part was the product variant selector. For configurable furniture, selecting a fabric/finish must update (1) the main product image, (2) the price, (3) availability, and (4) any variant-specific content (e.g. from Sanity) — without a full page reload and without breaking deep links or SEO. We built a custom variant switch that:
• Maps Shopify variant options (e.g. Fabric) to the correct variant and its featured media
• Optionally pulls variant-level imagery or copy from Sanity when it exists
• Keeps URL state in sync (e.g. ?variant=...) for shareable links and back/forward
• Updates cart line items with the selected variant ID so checkout and Shopify stay correct

That required clear handling of Shopify’s product/variant/option model and, where needed, a small middleware or GraphQL layer to join Shopify and Sanity data for a single product view.

Other high-effort areas: (1) Mixing Sanity and Shopify CDN images in one layout while keeping aspect ratios and performance consistent. (2) Fabric swatch ordering — either as a custom flow in the React app posting to Shopify or Sanity, or via a form that creates draft orders/contacts. (3) Concierge and support entry points that feel part of the same design system. (4) Making collection and homepage sections editable in Sanity (hero, “Our promise”, category blocks) while product grids still come from Shopify. All of that needed a clear content model in Sanity and stable contracts between the React app and both APIs.`,
  },
  {
    id: "reboxed-custom-features",
    title: "Reboxed — Custom PDP Bundles, Partner Program & Redesign",
    clientName: "Reboxed",
    projectUrl: "https://reboxed.co/",
    problem:
      "Reboxed, the UK refurbished tech marketplace (iPhones, Samsungs, Pixels, Apple Watch, trade-in), needed a store that matched their brand, supported product-page bundles (e.g. phone + case + protection), and powered partner campaigns with automatic discounts and filtered product experiences for partners like SMARTY and Lebara.",
    solution:
      "Redesigned the site on the Warehouse theme to align with Reboxed’s branding and mission (rehome, TechCheck®, sustainability). Built custom PDP bundle logic so customers can add phone + case, protection bundles, or other combos from the product page with correct pricing. Implemented a partner program: automatic discount at checkout for visitors from partner pages (e.g. SMARTY, Lebara), plus custom product filters and curated deal grids on each partner page so partners get a tailored experience without a separate store.",
    results:
      "On-brand store, higher AOV via PDP bundles, and scalable partner offers: SMARTY and Lebara (and future partners) get automatic discounts and filtered product pages with minimal ongoing setup.",
    tech: "Shopify (Warehouse theme), Liquid, JavaScript, partner discount logic (URL/referral), custom product filtering, PDP bundle feature",
    screenshots: [
      "/work/reboxed-home.jpg",
      "/work/reboxed-pdp-bundle.jpg",
      "/work/reboxed-partner-page.jpg",
    ],
    content: `Custom features that made the difference

Reboxed sells refurbished iPhones, Samsungs, Pixels, iPads, Apple Watch, and accessories, with trade-in, Klarna, TechCheck® certification, and a strong sustainability message. The build is based on the Warehouse theme, with a full redesign so the store matches Reboxed’s branding and UX.

PDP bundle (product page)

On the product page, customers can add a bundle: e.g. phone + case, or a “Power & Protect” style bundle (device + case + screen protector). The bundle is presented on the PDP with a single add-to-cart flow: selecting the main device (variant) and the bundle option updates the cart with the right line items and pricing. That required custom Liquid/JS to handle product + related products, variant selection, and cart API so the bundle is added correctly and discount rules (if any) apply. The result is clearer upsell on the PDP and better average order value.

Partner program: automatic discount and filtered product grid

Partners like SMARTY (reboxed.co/pages/smarty) and Lebara (reboxed.co/pages/lebara) send their customers to Reboxed with an exclusive offer. Two pieces were built:

1. Automatic discount — When a customer arrives from a partner page (URL or referral), the discount is applied at checkout without a code. That’s done via session/URL (e.g. ?partner=smarty or referral) so the correct discount (e.g. £10 / £20 / £30 for SMARTY by basket size; £20 for Lebara over £350) is applied automatically. No need for customers to remember or enter a code.

2. Custom product filter on partner pages — Each partner page shows a curated product grid: filtered by the deals that matter for that partner, with partner-specific copy (e.g. “SMARTY customers discounts”, “Best deals for Lebara customers”) and FAQ. The product grid is driven by collection or tag filters (or similar) so the team can control which products appear on each partner page. That keeps the main site one catalog while giving each partner a tailored landing experience.

Redesign on Warehouse

The site was redesigned on Warehouse so the homepage, collection pages, PDP, and partner pages all match Reboxed’s look and feel: mission (“rehome 100 million devices”), trust (TechCheck®, 12‑month warranty, free delivery), and partner offers. Sections and templates were customised so the team can update content and promotions without dev support.`,
  },
  {
    id: "speed-optimization",
    title: "Shopify Speed Optimization",
    problem:
      "Agency client's store had poor mobile performance (PageSpeed 35) and high bounce rate, hurting conversions.",
    solution:
      "Full audit, theme cleanup, lazy loading, critical CSS, image optimization, and hosting/config tweaks. Delivered in staging for QA before go-live.",
    results:
      "Mobile PageSpeed 35 → 88. Desktop 72 → 95. Bounce rate down ~15% in the first month.",
    tech: "Liquid, Shopify theme, Core Web Vitals, Lighthouse",
    hidden: true,
  },
  {
    id: "product-page-sections",
    title: "Custom Shopify Product Page + Sections",
    problem:
      "Brand needed unique product page layouts and modular sections for campaigns without locking into a single theme.",
    solution:
      "Built custom sections (hero, feature grid, testimonials, CTA, countdown) with JSON templates. All editable in the theme editor for non-devs.",
    results:
      "Faster campaign launches; client reported higher conversion on new landing and product pages.",
    tech: "Liquid, Shopify 2.0, JSON templates, CSS/JS",
    hidden: true,
  },
  {
    id: "api-integration",
    title: "Shopify App / API Integration Automation",
    problem:
      "Agency's internal ops required manual syncing between Shopify and their ERP, causing delays and errors.",
    solution:
      "Private app with Admin API: order and inventory sync, status updates, and webhooks. Documented for their team to maintain.",
    results:
      "Manual data entry largely removed; fewer support tickets from the fulfillment team.",
    tech: "Shopify Admin API, Node.js, webhooks",
    hidden: true,
  },
  {
    id: "bug-fix-cleanup",
    title: "Bug Fix + Theme Cleanup for Agency Client",
    problem:
      "Legacy theme had checkout and cart bugs, plus a lot of unused code. Client needed stability and a clear handoff.",
    solution:
      "Fixed critical bugs, removed dead code, refactored key snippets. Wrote a short handoff doc for future developers.",
    results:
      "Stable production; client and agency could plan the next phase with confidence.",
    tech: "Liquid, JavaScript, Shopify theme",
    hidden: true,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.filter((s) => !s.hidden).map((s) => s.id)
}

/** Case studies visible in the Selected Work listing (hidden placeholders excluded) */
export function getVisibleCaseStudies(): CaseStudy[] {
  return caseStudies.filter((s) => !s.hidden)
}
