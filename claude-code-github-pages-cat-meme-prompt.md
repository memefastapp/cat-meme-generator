# Claude Code Prompt — GitHub Pages SEO + GEO Optimized Cat Meme Generator

Build a production-ready, fully SEO and GEO optimized static website called **Cat Meme Generator** for deployment on **GitHub Pages**. This is a dedicated niche microsite targeting the cat meme search keyword cluster. Its purpose is to rank independently on Google and send qualified traffic through natural do-follow editorial links to **https://memefast.app** — the actual meme creation tool.

This is NOT a copy of MemeFast.app. It is a separate brand focused entirely on cat memes: famous cat meme templates, funny cat meme ideas, and cat meme captions. MemeFast is the recommended tool to create them.

---

## Competitive context — research findings

The current Google SERP for "cat meme generator" is dominated by:

- **Imgflip** — a generic meme generator with a cat template section, not a dedicated cat meme site
- **Kapwing** — general video/meme editor with woman yelling at cat template page
- **Piñata Farms** — meme-specific template generators for individual cat memes like Woman Yelling at Cat
- **Media.io** — AI cat meme generator focused on grumpy cat only
- **YouCam AI** — AI cat meme video generator with limited templates
- **hitpaw.com** — a listicle article ranking for "cat meme generator"

The gap: **No dedicated standalone microsite exists for "cat meme generator" that covers multiple famous cat meme templates, cat meme ideas, and cat meme captions in one place.** This is the precise gap this site fills.

---

## Primary SEO goal

Rank for the following keyword cluster. All keywords come from verified competitor SERP research and are currently underserved by dedicated microsite content.

**Primary keywords:**

- cat meme generator
- cat meme generator free
- cat meme maker
- funny cat meme generator
- free cat meme maker online

**Secondary keywords:**

- grumpy cat meme generator
- woman yelling at cat meme maker
- smudge cat meme generator
- cute cat meme maker
- AI cat meme generator
- create cat meme online
- cat meme creator free

**Long-tail keywords (use in FAQ and subpage):**

- how to make a cat meme
- funny cat meme captions
- best cat meme templates
- cat meme ideas for Instagram
- cat meme ideas for WhatsApp
- make a meme with my cat photo
- woman yelling at cat meme template
- i should buy a boat cat meme
- grumpy cat meme captions

**Famous cat meme names to include as sections or FAQ answers (these have their own search volume):**

- Woman Yelling at Cat
- Grumpy Cat
- Smudge the Cat
- I Should Buy a Boat Cat
- Crying Cat (Schmuserkadser)
- Scared Cat / Monorail Cat
- Keyboard Cat
- Nyan Cat
- El Gato (Talking Cat)
- Spinning Cat
- Bread Cat

---

## GEO optimization requirements

The site primarily targets English-speaking markets. Implement all of the following GEO signals:

### hreflang tags (mandatory)

Add hreflang alternate link elements in the `<head>` of every HTML page, with x-default pointing to the canonical:

```html
<link rel="alternate" hreflang="en" href="https://[username].github.io/cat-meme-generator/" />
<link rel="alternate" hreflang="en-us" href="https://[username].github.io/cat-meme-generator/" />
<link rel="alternate" hreflang="en-gb" href="https://[username].github.io/cat-meme-generator/" />
<link rel="alternate" hreflang="en-au" href="https://[username].github.io/cat-meme-generator/" />
<link rel="alternate" hreflang="en-ca" href="https://[username].github.io/cat-meme-generator/" />
<link rel="alternate" hreflang="x-default" href="https://[username].github.io/cat-meme-generator/" />
```

Use `memefastapp` as a placeholder throughout all URLs so the site owner can do a quick find-and-replace before deploying.

### Geo meta tags

Add these in the `<head>`:

```html
<meta name="geo.region" content="US" />
<meta name="geo.placename" content="United States" />
<meta name="language" content="English" />
```

### Schema WebSite with target market

In the JSON-LD WebSite schema, add `inLanguage: "en"` and `availableLanguage: ["en-US", "en-GB", "en-AU", "en-CA"]`.

### Content GEO signals

In one section on the homepage write copy mentioning "popular across the US, UK, Australia, and Canada" or "used everywhere from Reddit to WhatsApp" to build topical relevance for English-speaking markets.

---

## File structure

Use the correct GitHub Pages structure. The site must deploy from the `main` branch at the path `/cat-meme-generator/` OR configure as a user/org site at root. Use a subfolder project structure because the user likely already has a GitHub Pages user site. All paths must be relative.

```
cat-meme-generator/
  index.html             ← homepage
  cat-meme-ideas.html    ← only subpage
  styles.css
  script.js
  sitemap.xml
  robots.txt
  404.html
  assets/
    logo.svg             ← custom SVG logo
    og-image.svg         ← Open Graph image (SVG, 1200x630 proportions)
```

Use ONLY these files. No build tools, no package.json, no Jekyll configuration needed.

### GitHub Pages note

If deployed as a project page at `https://[username].github.io/cat-meme-generator/`, all internal links and asset paths must use relative paths like `./styles.css` or `../` patterns.

Add a comment at the top of index.html:

```html
<!-- Deploy: push to main branch. GitHub Pages serves from /cat-meme-generator/ subfolder. -->
<!-- Replace memefastapp throughout with your actual GitHub username before deploying. -->
```

---

## Site brand and positioning

Brand name: **Cat Meme Generator**

Tagline: "Make a Cat Meme in Seconds"

This is not MemeFast. It is a dedicated cat meme resource site. Think of it as the #1 reference site for cat memes on the internet — a blend of content utility (templates, captions, ideas) and a funnel into the meme creation tool (MemeFast).

Tone:

- playful but clean
- cat-lover energy, not cringe
- internet-native and funny without trying too hard
- editorial and reference-focused
- fast and useful — get in, get the meme idea, go create it

This site should feel different from MemeFast.app in brand voice. Where MemeFast is about speed and AI, this site is about being the most useful cat meme resource on the web.

---

## Visual direction

Design a site that feels handcrafted, warm, and distinctly cat-themed without being cutesy or generic.

**Color palette — Tabby palette:**

```
Background:     #FAFAF7  (warm off-white, like aged paper)
Surface:        #F3F1EC  (slightly deeper warm)
Surface-2:      #EDE9E3  (card backgrounds)
Border:         rgba(0,0,0,0.08)
Text:           #1E1A14  (near black, warm)
Text-muted:     #6B6659  (warm gray)
Text-faint:     #A8A398  (very light muted)
Accent:         #D45D12  (deep burnt orange — tabby cat)
Accent-hover:   #B84A08
Accent-bg:      #FDF0E6  (soft orange wash for highlights)
Secondary:      #2B5C3A  (forest green — for secondary CTAs)
Secondary-bg:   #EAF2ED
```

Use this palette exclusively. No purple, no neon, no gradients on buttons.

**Typography:**

- Display font: Cabinet Grotesk (Fontshare) — weights 700 and 800 for headings
- Body font: Satoshi (Fontshare) — weights 400, 500, 700
- Font sizes: use fluid clamp() scale across all headings and body text
- No system fonts as primary. Load Cabinet Grotesk and Satoshi from Fontshare CDN.

```html
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
```

**Design rules:**

- No icons inside colored circles (too generic)
- No centered-everything layout
- No gradient buttons — solid #D45D12 fill only
- No glowing backgrounds or blob shapes
- No emoji as structural design elements
- Sections must vary: some full-width, some narrow-content, some asymmetric two-column
- Border-radius: small on buttons (6px), slightly larger on cards (12px), consistent
- Shadows: warm, subtle. Not pure black. Use `rgba(100, 60, 0, 0.08)` for warm shadows
- Section heights must vary — avoid rhythm of identical padding everywhere
- Include at least one asymmetric hero or two-column layout moment

**Cat visual identity:**
Create an inline SVG logo — a simple geometric cat face (two triangle ears, circle eyes, curved mouth) — minimalist Paul Rand style. It should work at 24px and 200px. Use currentColor.

For meme cards and illustrations, use CSS-only mock meme frames — stylized cards that look like a meme image area with caption bars. Do NOT use real meme images (copyright issues). Design stylized placeholder cards with a gray image area, top caption zone, and bottom caption zone. These should look like the meme format without needing actual copyrighted cat photos.

---

## Homepage: index.html

### SEO meta — exact spec

```html
<title>Cat Meme Generator — Create Funny Cat Memes Free Online</title>
<meta
  name="description"
  content="Free cat meme generator. Browse famous cat meme templates like Grumpy Cat, Woman Yelling at Cat, and Smudge, get captions, and create your own cat meme in seconds. No account needed."
/>
<link rel="canonical" href="https://memefastapp.github.io/cat-meme-generator/" />

<!-- Open Graph -->
<meta property="og:title" content="Cat Meme Generator — Create Funny Cat Memes Free" />
<meta
  property="og:description"
  content="The #1 cat meme generator. Famous templates, captions, ideas — and one-tap creation. Free, no account needed."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://memefastapp.github.io/cat-meme-generator/" />
<meta property="og:image" content="https://memefastapp.github.io/cat-meme-generator/assets/og-image.svg" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="en_GB" />
<meta property="og:locale:alternate" content="en_AU" />

<!-- Twitter/X card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Cat Meme Generator — Create Funny Cat Memes Free" />
<meta name="twitter:description" content="Famous cat meme templates, captions, and one-tap creation. Free." />
<meta name="twitter:image" content="https://memefastapp.github.io/cat-meme-generator/assets/og-image.svg" />
```

### Structured data — WebSite + Organization + FAQ

Include three JSON-LD blocks in the `<head>`:

**Block 1: WebSite**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cat Meme Generator",
  "url": "https://memefastapp.github.io/cat-meme-generator/",
  "description": "Free cat meme generator with famous cat meme templates, funny captions, and meme ideas.",
  "inLanguage": "en",
  "availableLanguage": ["en-US", "en-GB", "en-AU", "en-CA"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://memefast.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Block 2: Organization**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cat Meme Generator",
  "url": "https://memefastapp.github.io/cat-meme-generator/",
  "sameAs": ["https://memefast.app"]
}
```

**Block 3: FAQPage** (see FAQ section below for the 8 Q&A pairs)

### H1 (one per page)

```
Funny Cat Meme Generator — Make a Cat Meme in Seconds
```

### H2 structure for homepage

1. Famous Cat Meme Templates
2. How to Make a Cat Meme Online
3. Funny Cat Meme Captions You Can Copy
4. Why Cat Memes Are the Internet's Favorite
5. Cat Meme Ideas by Mood
6. Cat Memes on Every Platform
7. Frequently Asked Questions About Cat Memes

---

## Homepage sections — full content spec

### 1. Navigation header

Sticky minimal nav with:

- SVG logo (cat face mark + "Cat Meme Generator" wordmark)
- Nav links: Templates, Captions, Ideas, FAQ
- One CTA button: "Create a Cat Meme →" linking to https://memefast.app
- Mobile: collapse to hamburger with slide-down menu
- Background: white with 1px bottom border on scroll only

### 2. Hero section

Large, confident hero. Left-aligned layout. No centered text in the hero body.

Elements:

- Small eyebrow label: "Free • No account needed • Works on iOS, Android & Web"
- H1: "Funny Cat Meme Generator — Make a Cat Meme in Seconds"
- Subheadline (one sentence): Pick a famous cat meme template, add your caption, and share it instantly to Instagram, TikTok, WhatsApp, and Reddit.
- Primary CTA button: "Make a Cat Meme Free →" → links to https://memefast.app
- Secondary link: "See cat meme ideas →" → links to cat-meme-ideas.html
- Right column or diagonal section: A grid of 4 stylized CSS mock meme cards (image placeholder area + top/bottom caption bars in meme format) labeled with famous template names: Woman Yelling at Cat, Grumpy Cat, Smudge, I Should Buy a Boat Cat

The hero layout should be two-column at desktop — text left, meme card grid right. On mobile it stacks vertically.

Trust bar beneath hero:
"Used by cat lovers across the 🇺🇸 US, 🇬🇧 UK, 🇦🇺 Australia, and 🇨🇦 Canada · Share to Instagram, TikTok, WhatsApp, Reddit, Discord, and more"

### 3. Famous cat meme templates section

H2: "Famous Cat Meme Templates"

Intro paragraph (keep keyword-rich but natural):
The internet's love for cat memes started with Nyan Cat and Keyboard Cat and never slowed down. Today, templates like Woman Yelling at Cat, Grumpy Cat, and Smudge the Cat are used millions of times a day in comments, chats, and social media posts worldwide. Here are the most famous cat meme formats and how people use them.

Create a section with **10 template cards** in an irregular grid (not a symmetrical 3-column grid). Each card includes:

- CSS meme frame (gray image placeholder with caption bar)
- Meme name as H3
- 1-sentence description of when to use this meme
- Example caption text
- CTA: "Make this meme →" → https://memefast.app

The 10 templates to feature (write accurate descriptions and example captions):

1. **Woman Yelling at Cat** — Two-panel meme. Woman angry on left, confused white cat at dinner table on right. Use it when someone is overreacting and you're unbothered. Example: "When someone says my cat is 'just a cat'" + cat looking confused.

2. **Grumpy Cat** — Close-up of a flat-faced cat with a permanent frown. Use for expressing strong disapproval or saying no to everything. Example: "Me every Monday morning."

3. **Smudge the Cat** — The white cat from Woman Yelling at Cat used alone. Confused, skeptical face. Use when someone presents you with a ridiculous situation. Example: "Me when the wifi goes out for 2 minutes."

4. **I Should Buy a Boat Cat** — Cat in a sailor hat looking contemplative. Use when you're daydreaming or justifying a questionable decision. Example: "Maybe I should start a business" + boat cat.

5. **Crying Cat** — An edited photo of a sad-looking cat with teary eyes. Use to express exaggerated sadness or sympathy. Example: "When it's Monday but you thought it was Tuesday."

6. **Keyboard Cat** — Classic orange tabby cat playing a keyboard. The internet's OG cat meme. Use as a "play off" reaction or musical send-off. Example: "Me after saying something awkward — play him off."

7. **Nyan Cat** — Pixel art cat with a Pop-Tart body flying through space leaving a rainbow trail. Use to express endless enthusiasm, chaos, or nostalgia. Example: "Me during a productive streak."

8. **El Gato / Talking Cat** — Close-up of a white cat speaking to camera. Used with ironic or sarcastic captions. Example: "The audacity. The nerve."

9. **Loaf Cat** — A cat sitting in a perfect bread loaf position, arms tucked in, staring blankly. Use for expressing contentment, passive resistance, or doing nothing. Example: "Me when someone asks if I have plans this weekend."

10. **Scared Cat / Monorail Cat** — Wide-eyed alarmed cat. Use to express panic, shock, or sudden realization. Example: "When you realize you left the oven on."

### 4. How to make a cat meme online — 3 steps

H2: "How to Make a Cat Meme Online"

Use a horizontal three-step strip at desktop, stacked on mobile.

Step 1 — "Pick a template or use AI"
Browse famous cat meme templates or type a text prompt and let the AI choose the perfect template for you. MemeFast has 2,000+ templates including all the famous cat formats.

Step 2 — "Add your caption"
Customize text, font, color, and size. Add stickers, effects, or even upload your own cat photo to make the meme personal.

Step 3 — "Share instantly"
Post directly to Instagram, TikTok, Snapchat, WhatsApp, Reddit, Discord, and more — or save it to your gallery. No account needed.

Primary CTA beneath steps: "Create Your Cat Meme Free on MemeFast →" → https://memefast.app

Important product note: Only use these verified MemeFast capabilities when linking to it: AI text-to-meme, 2000+ templates, funny cat memes specifically included, editing tools with fonts/stickers/colors, own photo upload, collage layouts, social sharing to Instagram/TikTok/WhatsApp/Snapchat/Reddit/Discord and more, offline capability, no account required, free to start, works on iOS/Android/Web.

### 5. Funny cat meme captions section

H2: "Funny Cat Meme Captions You Can Copy"

Intro sentence: Whether you're making a reaction meme or a classic Grumpy Cat, the caption makes or breaks the meme. Here are 20 ready-to-use cat meme captions sorted by mood.

Build a visually distinct grid of caption cards — NOT a plain list. Each card shows:

- The caption text in a meme-style font treatment
- A small mood tag: Relatable / Savage / Monday mood / Work / Food

Include exactly these 20 captions, written as original content:

**Relatable:**

1. "No thoughts. Only nap."
2. "I was going to be productive today. I was."
3. "Me after 5 minutes of socializing."
4. "Existing is exhausting and I need a snack."
5. "Do I have plans? Yes. Will I do them? Unclear."

**Monday mood:** 6. "It is objectively too early for this." 7. "My spirit leaves my body every Monday." 8. "I am not a morning person. I am a noon person." 9. "New week. Same chaos. Zero enthusiasm." 10. "Why is it not the weekend yet. Why."

**Savage:** 11. "I heard what you said. I just don't care." 12. "Not my problem. Never was." 13. "Your vibe cancelled your invite." 14. "I'm in a good mood. Don't ruin it." 15. "Thanks for your unsolicited opinion. Noted. Ignored."

**Work / office:** 16. "That could have been an email." 17. "I have 47 unread messages and zero intention of reading them." 18. "Logging off mentally. Physically still here." 19. "Another meeting that is definitely not an email." 20. "Performance review season is here. I will be hiding."

Each caption card should have a CTA link: "Make this meme on MemeFast" → https://memefast.app

### 6. Why cat memes section (editorial content)

H2: "Why Cat Memes Are the Internet's Favorite"

Write a 150-word editorial section explaining the cultural popularity of cat memes without copying from any source. Include these talking points:

- Cat memes have been the internet's default humor currency since at least 2006 (Keyboard Cat, I Can Haz Cheezburger)
- Cats' natural expressions map perfectly onto human emotions — skeptical, contemptuous, confused, delighted
- The Woman Yelling at Cat two-panel meme format became one of the most versatile reaction memes of the last decade
- Cat meme searches are consistent year-round across the US, UK, Australia, and Canada because the audience spans all ages
- Making your own cat meme — with your own cat's photo — adds a personal layer that generic memes can't match

End with a subtle CTA: "Upload your own cat photo and make a custom cat meme on MemeFast →" → https://memefast.app

### 7. Cat meme ideas by mood / situation

H2: "Cat Meme Ideas by Mood"

Create a category grid with 6 mood tiles. Each tile has:

- Short label
- 3 example situation starters
- Link: "Create this style →" → https://memefast.app

Moods:

1. **Monday mood** — "When the alarm goes off", "When you see your calendar", "When someone says good morning"
2. **Work from home** — "When your wifi drops mid-call", "Another video call that's an email", "When your cat walks on your keyboard"
3. **Food obsessed** — "When there's one slice of pizza left", "When someone says they don't like cats OR pizza", "The snack drawer is my only friend"
4. **Socially tired** — "When plans get cancelled", "When you have to talk to a real person", "Weekend: cancelled. Nap: confirmed."
5. **Savage response** — "When someone asks a dumb question", "When they say just one more task", "When the unsolicited advice arrives"
6. **Pure chaos** — "When something explodes at work and it's not your problem", "3am thoughts hitting different", "When you make eye contact with a stranger"

### 8. Cat memes on every platform

H2: "Cat Memes on Every Platform"

Short sections for each platform — 2 sentences each. Include platform name in copy to capture platform + cat meme long-tail searches.

- **Instagram cat memes** — square format, clean captions, Stories-ready
- **TikTok cat memes** — vertical format, reaction overlays, short and punchy
- **Reddit cat memes** — community-first, reference humor, niche templates
- **WhatsApp and Discord** — fast sharing, reaction memes, no-watermark preferred
- **Twitter / X cat memes** — one-liner captions, hot takes, quick reactions

End each platform section with "Create [platform] cat memes on MemeFast →" where the link goes to https://memefast.app

### 9. FAQ section

H2: "Frequently Asked Questions About Cat Memes"

Build a clean accordion FAQ. All 8 Q&A pairs are also encoded in FAQPage JSON-LD schema.

**Q1: What is a cat meme generator?**
A: A cat meme generator is a free online tool that lets you take famous cat meme templates — like Woman Yelling at Cat, Grumpy Cat, or Smudge — and add your own custom captions. Some tools like MemeFast also let you upload your own cat photo and generate a meme from a text prompt using AI.

**Q2: Which cat meme templates are the most popular?**
A: The most widely used cat meme templates are Woman Yelling at Cat, Grumpy Cat, Smudge, I Should Buy a Boat Cat, Crying Cat, Keyboard Cat, Nyan Cat, and Loaf Cat. Each has a distinct emotional range: Grumpy Cat for disapproval, Smudge for confusion, Loaf Cat for passive indifference.

**Q3: How do I make a cat meme with my own cat's photo?**
A: Open MemeFast on iOS, Android, or web, choose the editor, upload your cat's photo from your gallery, add a text caption at the top and bottom, customize the font and color, and share. The whole process takes about 15–20 seconds and requires no account.

**Q4: Is there a free cat meme generator that works on mobile?**
A: Yes — MemeFast is a free cat meme generator that works on iOS, Android, and web without any account. It has 2,000+ meme templates including popular cat meme formats, an AI text-to-meme feature, and one-tap sharing to Instagram, TikTok, WhatsApp, and more.

**Q5: What makes a cat meme funny?**
A: Great cat memes work because cats' natural expressions — confused, contemptuous, unbothered — map directly onto universal human emotions. The funniest cat memes either subvert expectations with an absurd caption, match a relatable frustration with a cat's blank stare, or use the two-panel format where the contrast between human outrage and feline indifference drives the joke.

**Q6: Can I make a cat meme without a watermark?**
A: Yes. MemeFast allows free meme creation without a watermark on most features. The free tier supports standard templates and captions. MemeFast Pro (from $2.99/month) adds a custom watermark option and removes ads.

**Q7: What are good cat meme captions for Instagram?**
A: Short, punchy captions work best on Instagram. Try: "No thoughts. Only nap." / "This is my only personality trait." / "Do not talk to me until I've had my third nap." / "Monday arrived. I did not consent." Keep it under 80 characters for best engagement.

**Q8: What is the Woman Yelling at Cat meme?**
A: Woman Yelling at Cat is a two-panel meme combining a photo of a woman crying and pointing (from a reality TV show) with a photo of Smudge the Cat sitting at a dinner table with a displeased expression. It became one of the most used reaction memes in 2019 and is still widely used today to show the contrast between someone's intense reaction and an indifferent or confused response.

### 10. Final CTA banner

Full-width warm orange CTA section:

Headline: "Make Your Cat Meme Right Now"
Body line: "2,000+ templates. AI text-to-meme. Your cat's photo. Free, no account needed. Works on iOS, Android, and Web."
Button: "Open MemeFast Free →" → https://memefast.app
Small trust note: "No watermark · Works offline · Share to Instagram, TikTok, WhatsApp, Reddit, Discord and more"

### 11. Footer

Simple footer with:

- Logo
- Internal links: Home, Cat Meme Ideas, Famous Templates, FAQ
- External: "Create Memes on MemeFast" → https://memefast.app (do-follow)
- Copyright: © 2026 Cat Meme Generator
- Disclaimer: "We are not affiliated with the creators of the meme templates shown. All template names are referenced for descriptive purposes."

---

## Subpage: cat-meme-ideas.html

This is the only subpage. It must target the secondary keyword cluster around **funny cat meme ideas**, **cat meme captions**, and template-specific long-tail keywords.

### SEO meta — exact spec

```html
<title>Funny Cat Meme Ideas — 30 Captions and Templates for Every Situation</title>
<meta
  name="description"
  content="30 funny cat meme ideas, captions, and template suggestions for work, Monday, food, and savage humor. Find the perfect cat meme and create it free on MemeFast."
/>
<link rel="canonical" href="https://memefastapp.github.io/cat-meme-generator/cat-meme-ideas.html" />
```

### Breadcrumb schema for subpage

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Cat Meme Generator",
      "item": "https://memefastapp.github.io/cat-meme-generator/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Funny Cat Meme Ideas",
      "item": "https://memefastapp.github.io/cat-meme-generator/cat-meme-ideas.html"
    }
  ]
}
```

### H1 for subpage

```
Funny Cat Meme Ideas — 30 Captions for Every Mood
```

### Subpage content sections

**Intro paragraph:**
The best cat memes come from a good idea + the right template. Here are 30 ready-to-use cat meme ideas organized by situation — complete with suggested template, caption text, and a link to create each one instantly on MemeFast. Works for Instagram, TikTok, WhatsApp, Reddit, Discord, and anywhere else you send memes.

**Category 1: Monday and work (8 ideas)**

Each entry format:

- Situation: [trigger]
- Template: [famous cat meme name]
- Caption: [ready-to-use text]
- CTA: "Create this on MemeFast →" → https://memefast.app

Example entries:

1. Situation: Your alarm goes off. Template: Grumpy Cat. Caption: "No."
2. Situation: Someone schedules a 7am meeting. Template: Loaf Cat. Caption: "I will be present physically. That is all I can promise."
3. Situation: You send a great idea and nobody responds. Template: Woman Yelling at Cat. Caption: "FIVE BLUE TICKS" / Cat: reading the message.
4. Situation: It's Wednesday. Template: Crying Cat. Caption: "It is Wednesday. I have been awake since Monday."
5. Situation: The project is "just a few minor changes." Template: Scared Cat. Caption: "A few minor changes."
6. Situation: Video call is scheduled for 8am. Template: Smudge. Caption: "I look professional. I feel like garbage. Welcome to the meeting."
7. Situation: Your coffee machine is broken. Template: Grumpy Cat. Caption: "Today is cancelled."
8. Situation: Long email thread. Template: El Gato. Caption: "Four hundred words. Could have been: yes."

**Category 2: For friends and group chats (7 ideas)**

1. Situation: Your friend says they're 5 minutes away (they are not). Template: I Should Buy a Boat Cat. Caption: "Maybe I should buy a house. I have time."
2. Situation: Friend asks why you haven't replied. Template: Loaf Cat. Caption: "I saw the message. I was going to reply. Then I didn't."
3. Situation: Group chat goes off at 2am. Template: Scared Cat. Caption: "74 messages. Did someone die or is this about pizza."
4. Situation: Someone cancels plans last minute. Template: Nyan Cat. Caption: "Me flying into my free evening."
5. Situation: You're the only one who did the work. Template: Woman Yelling at Cat. Caption: "TEAMWORK" / Cat: did it alone.
6. Situation: Friend wants you to go outside. Template: Grumpy Cat. Caption: "Absolutely not."
7. Situation: Plans are made for 8am on Saturday. Template: Keyboard Cat. Caption: "Play me off."

**Category 3: For pet owners (5 ideas)**

1. Situation: Your cat wakes you up at 4am. Template: Smudge. Caption: "It is 4am and I require your immediate attention."
2. Situation: Your cat ignores expensive cat food. Template: El Gato. Caption: "I didn't approve this brand."
3. Situation: You try to sit down but the cat is already there. Template: Loaf Cat. Caption: "Your seat is my throne now."
4. Situation: Cat stares at the wall for 30 minutes. Template: Scared Cat. Caption: "I see things you cannot see."
5. Situation: Cat brings you a dead leaf at 2am. Template: Crying Cat. Caption: "A gift. For you. You're welcome."

**Category 4: Relatable and savage (10 ideas)**

1. Situation: Someone gives unsolicited advice. Template: Woman Yelling at Cat. Caption: "Have you tried just not being anxious" / Cat: ... ok.
2. Situation: Someone says exercise is fun. Template: Grumpy Cat. Caption: "Lies."
3. Situation: Weekend is over. Template: Crying Cat. Caption: "Sunday 8pm hits different."
4. Situation: You have to be a functioning adult today. Template: Smudge. Caption: "Allegedly."
5. Situation: Someone says they don't like cats. Template: I Should Buy a Boat Cat. Caption: "I should buy more cats."
6. Situation: You made a decision you knew was wrong. Template: Keyboard Cat. Caption: "Play me off."
7. Situation: Someone asks why you're tired. Template: Loaf Cat. Caption: "Existing takes a lot out of me."
8. Situation: You're right and nobody listened. Template: Woman Yelling at Cat. Caption: "I told you so" / Cat: (unfazed).
9. Situation: You're in a bad mood for no reason. Template: Grumpy Cat. Caption: "Today has an atmosphere problem."
10. Situation: Someone suggests a 6am gym session. Template: Scared Cat. Caption: "The audacity."

**Bottom CTA on subpage:**
Headline: "Got the idea? Now make it."
Link: "Create your cat meme free on MemeFast →" → https://memefast.app
Internal link: "← Back to Cat Meme Generator"

---

## Internal linking strategy

Every page must link to the other. Use descriptive anchor text:

From homepage to subpage:

- "See 30 funny cat meme ideas →" (hero section)
- "Browse cat meme ideas by situation" (meme ideas by mood section)
- "cat meme captions" (inline in caption section)

From subpage to homepage:

- "← Back to Cat Meme Generator" (breadcrumb top)
- "See all famous cat meme templates" (bottom of page)
- "Cat Meme Generator home" (footer)

---

## External link strategy to MemeFast

Place at least **4 contextual do-follow links** from the homepage and **4 from the subpage** to https://memefast.app

All links are do-follow by default (standard HTML `<a>` tags). Add `target="_blank" rel="noopener noreferrer"` to open in new tab. Do NOT add `rel="nofollow"`.

Anchor text variety — use each approximately once, not all the same:

- "Create your cat meme on MemeFast"
- "make this meme on MemeFast"
- "open MemeFast to create it"
- "use MemeFast's cat meme templates"
- "turn this caption into a meme"
- "MemeFast — free AI meme generator"

Do not over-optimize anchors. Natural variation looks more editorial.

---

## sitemap.xml

Generate a valid XML sitemap at `/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://memefastapp.github.io/cat-meme-generator/</loc>
    <lastmod>2026-04-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://memefastapp.github.io/cat-meme-generator/cat-meme-ideas.html</loc>
    <lastmod>2026-04-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://memefastapp.github.io/cat-meme-generator/sitemap.xml
```

---

## 404.html

Create a friendly 404 page with:

- Cat-themed message: "This page has escaped. Like a cat."
- Link back to homepage
- Link to cat meme ideas page
- Same nav and footer as other pages

---

## Performance requirements

- Total HTML + CSS + JS must load in under 800KB (no images from CDN, use CSS-only meme mock cards)
- No heavy animation libraries
- No jQuery
- Font loading with `display=swap` and preconnect to api.fontshare.com
- Lazy load any images that exist
- CSS organized with custom properties at root
- Minimal JavaScript: only for FAQ accordion and mobile nav

---

## Accessibility requirements

- One H1 per page
- Proper H2/H3 nesting
- Semantic HTML5 landmarks: `<header>` `<nav>` `<main>` `<section>` `<article>` `<footer>`
- Skip link at top: "Skip to main content"
- All buttons have accessible labels
- Accordion FAQ: proper aria-expanded, aria-controls
- Touch targets minimum 44x44px
- Focus-visible states on all interactive elements
- Alt text on all SVG elements with aria-label
- Keyboard navigable mobile nav

---

## JavaScript requirements

The site needs only two JS behaviors:

**1. FAQ accordion:**
Each FAQ item: click question to expand/collapse answer. One open at a time. Uses aria-expanded.

**2. Mobile navigation:**
Hamburger toggle opens a slide-down navigation panel. Close on outside click or Escape key.

No other JavaScript needed. Keep the script.js file under 30 lines.

---

## GitHub Pages deployment instructions

Include at the top of index.html as an HTML comment:

```
GitHub Pages deployment:
1. Create a new GitHub repo named "cat-meme-generator"
2. Push all files to the main branch at the root
3. Go to Settings > Pages > Source: main branch / root folder
4. Your site will be live at: https://[your-username].github.io/cat-meme-generator/
5. Replace all instances of memefastapp with your actual GitHub username
6. Optionally: add a custom domain in Settings > Pages > Custom domain
```

---

## Copywriting rules

- Write original, never-before-published copy only
- No app store listing tone
- Do NOT position this site as MemeFast itself — it is a separate resource site
- Keep meme template descriptions accurate (Woman Yelling at Cat, Grumpy Cat, etc. are real cultural artifacts but do not reproduce their actual images)
- Keep caption ideas original, creative, and genuinely funny
- Mix informational and transactional intent in every section
- No filler phrases like "in today's digital age" or "unlock the power of"

---

## Anti-patterns (never do these)

- No purple gradients or blue-to-purple color schemes
- No icons in colored rounded squares as feature highlights
- No generic 3-column SaaS feature grid
- No emoji used as decorative bullets
- No generic hero with centered text and gradient background
- No gradient buttons — solid color only
- No watermark on CSS meme mock cards
- No hallucinated cat meme image URLs — only CSS-drawn placeholders

---

## Quality self-check before output

Before generating the final files, verify:

- [ ] Homepage H1 contains primary keyword "cat meme generator"
- [ ] All 10 famous cat meme templates are featured with accurate descriptions
- [ ] hreflang tags are present on all pages
- [ ] FAQ accordion covers 8 questions with FAQPage JSON-LD
- [ ] At least 4 do-follow links to memefast.app on homepage
- [ ] At least 4 do-follow links to memefast.app on subpage
- [ ] sitemap.xml and robots.txt are generated
- [ ] All memefastapp placeholders are used consistently (easy to find/replace)
- [ ] The site would look distinct from a generic SaaS landing page
- [ ] The meme caption copy is original and genuinely funny
- [ ] GEO signals (hreflang, geo meta tags, locale OG tags) are implemented
- [ ] WebSite, Organization, FAQPage, and BreadcrumbList schemas are present

---

## Output format

Output ALL files in full with zero placeholders or TODO comments. Do not summarize or truncate. Every section must be fully written with real content, real captions, and real copy — no "add content here" or "example text." The site must be deployable immediately after replacing memefastapp.
