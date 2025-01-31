# Portfolio

This repository contains my portfolio, built with Next.js and shipped on Vercel.

## Project Setup

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/Shonned/portfolio
npm install
npm run dev
```

## Adding and Modifying Blog Posts

Blog posts are written in MDX format and are located in the `content/blog` directory. You can add or remove posts as needed. 

Additionally, you need to manually add the slug, corresponding to the filename, to the `generateStaticParams()` function for proper association, as follows:
```typescript
export function generateStaticParams() {
    return [
        { slug: "aberdeen-internship" },
        { slug: "leitlearn-announcement" },
    ];
}
```

The backend API automatically fetches all posts found in this folder.

You also need to export the metadata for each blog post in the MDX file. For example:

```typescript
export const metadata = { title: "My internship in Aberdeen, Scotland", date: "Jan 10, 2025", author: "Kilian Peyron", };
```

For inquiries, please contact: kilian@xra.fr