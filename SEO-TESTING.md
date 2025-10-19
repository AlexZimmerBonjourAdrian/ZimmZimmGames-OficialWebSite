# SEO Discovery Testing for W.A.T.A (Focused on Search, not generic SEO)

Use this checklist and queries to validate that the site and new lore page can be discovered for Alice-in-Wonderland-specific terms, noir/political thriller, and psychological horror.

## Target URLs

- Homepage: `https://zimmzimmgames.com/`
- W.A.T.A: `https://zimmzimmgames.com/wata`
- Lore (new): `https://zimmzimmgames.com/wata/lore`

## On-page Quick Checks

- Page titles render correctly in browser tabs
- Canonicals exist on each page
- Open Graph/Twitter images resolve (200 OK)
- Robots meta is index,follow on public pages

## Image Discovery

- `/images/Wata/WhereAreTheAlices.JPG` resolves (200)
- `/Gameplay/Case00-CB.jpg` resolves (200)
- `/ConceptArt/ConceptJunoAndCB.png` resolves (200)

## Queries (English, exact or close variants)

Paste into Google, Bing, DuckDuckGo. Expect to see the domain over time; use Search Console to monitor impressions.

### 1. Core Alice + VN genre

- "Alice in Wonderland visual novel psychological horror"
- "dark fantasy visual novel Alice"
- "noir Alice in Wonderland visual novel"

### 2. Corrupted Wonderland lore

- "corrupted Wonderland Dormouse final letter"
- "Wonderland is hell functional psychopaths"
- "tyrant child queen Wonderland beheading"
- "White Rabbit true king Dormouse letter"

### 3. Character/antagonist focus

- "rabbit detective visual novel Wonderland"
- "evil rabbit Alice in Wonderland game"

### 4. Mixed genre long-tail

- "visual novel noir political thriller psychological horror"
- "twisted Wonderland furry noir visual novel"

## Queries (Spanish long-tail for cross-lingual discovery)

- "novela visual Alicia País Maravillas terror psicológico"
- "Wonderland corrupto carta final lirón"
- "reina tirana Alicia País Maravillas decapitaciones"

## Structured Data

- Validate with Google Rich Results Test:
  - Organization (site-wide)
  - VideoGame (W.A.T.A page)

## Search Console (post-deploy)

- Request indexing for `/wata` and `/wata/lore`
- Monitor coverage, impressions, and queries containing: Alice, Wonderland, noir, political thriller, Dormouse, White Rabbit, tyrant queen

## Link Graph Suggestions (optional but helpful)

- Link from `/wata` to `/wata/lore` (context: “World Lore”)
- Link from any future Characters page to `/wata/lore`
- Add a small footer link: “Lore: Corrupted Wonderland”
