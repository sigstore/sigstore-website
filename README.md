# sigstore-website

Sign, verify and protect your software

The Sigstore website is built with [Next.js 15](https://nextjs.org/) (App Router) and [Tailwind CSS v4](https://tailwindcss.com/), exported as a fully static site. Content is managed through Markdown and JSON files in the `content/` directory.

**NOTE**: The docs page ([docs.sigstore.dev](https://docs.sigstore.dev)) is hosted on [sigstore/docs](https://github.com/sigstore/docs). Please go there to review the docs repo or contribute to the Sigstore docs.

## Build setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build static site to out/
npm run build

# lint
npm run lint
```

## Project structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx          # Root layout (header, footer, fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind v4 theme and global styles
│   └── [slug]/page.tsx     # Dynamic content pages
├── components/
│   ├── layout/             # Header, Footer, Navigation, MobileNavigation
│   ├── sections/           # Section components (TextBanner, Carousel, etc.)
│   └── SectionRenderer.tsx # Maps section types to components
└── lib/
    └── content.ts          # Markdown/JSON content loading utilities

content/
├── home.md                 # Home page section definitions (frontmatter)
├── caseStudies/            # Case study markdown files
├── newsEvents/             # News and events JSON files
└── docs/                   # Documentation markdown files

public/                     # Static assets (images, fonts, favicons)
```

### Content system

Page content is defined in Markdown files using frontmatter. The home page (`content/home.md`) defines an array of sections, each with a `type` field that maps to a React component via `SectionRenderer`. Section types include `TextBanner`, `TwoColumnBanner`, `Carousel`, `SponsorsListSection`, and others.

### Styling

Tailwind CSS v4 is configured via CSS-first configuration in `src/app/globals.css` using `@theme` blocks. Custom spacing, font sizes, and colors are defined as theme variables. The site uses a `62.5%` root font-size so that `1rem = 10px`, with custom numeric utility classes (e.g., `text-24` = `2.4rem` = `24px`).

Custom fonts (GT Maru Medium for headings, Inter for body text) are loaded in `src/app/layout.tsx`.

## Tips for contributing to website content

As website content grows, matures and adapts, it can be tricky to keep the content's style and tone of voice consistent. This is crucial in making things feel they've been written by one single author, which helps create trust and authority, and keeps the user experience streamlined. Here's a few pointers to help guide your changes:

- Write like you're onboarding a new colleague. You want to help them get up to speed. Prioritise your points and be action-focused, cut anything that's not really necessary. Be friendly but direct, and focus on the end goal together.

- Who's your audience? They're a wide mix of readers with different levels of know-how. Good, accessible website content tends to keep things simple and more entry level rather than diving straight in at the deep end.

- Branded terms. Sigstore, Cosign, Fulcio, Rekor, and Gitsign are title case. Meanwhile, `policy-controller` is all lower-case with a hyphen. Keeping these consistent establishes the branding and can prevent confusion.

- Compare similar content before making new changes. This will help pick out things like syntax and grammar, which should help you know what conventions to follow and keep things consistent.

- Let the context do some of the work. A sentence doesn't have to overwork or spell out every single subtext. You can let the surrounding parts do their job to carry the weight, and that way you keep things simple.

- Read things out loud! Does something you've written sound like what you'd expect from a regular conversation? Aim for this - website content lands best when it matches your reader's inner monologue and expected patterns of speech.

- The more prominent something is in design, the more risky it is to change. That's because their impact is partly down to what the words mean, and partly about their visual, subtle impact. Only change these if it's absolutely crucial.

- Always check your assumptions. It's easy to assume your reader knows exactly what you do. If you're introducing something difficult for the first time, state it, explain it as simply as you can, and then move to its application using consistent language.

- And above all, be consistent. This applies both to the words you use, and the way you use them - so things like grammar and formatting, whether you capitalise a word or not, etc.

## How to Get Involved

Community contributions are welcome. To suggest a new feature or report a bug, please feel free to submit an issue. Prior to contributing, please review our [Contributor Guidelines](https://github.com/CONTRIBUTORS.md).

## Security

Should you discover any security issues, please refer to Sigstore's [security
process](https://github.com/sigstore/.github/blob/main/SECURITY.md)
