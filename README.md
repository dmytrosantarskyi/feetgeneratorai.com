# Feet Generator AI - Affiliate Landing Page

A premium, SEO-optimized Next.js affiliate landing page for an AI feet generator tool. Built with Next.js 14 (App Router), React, Tailwind CSS, Framer Motion, and OpenAI DALL-E 3 integration.

## Features

- 🎨 **Premium Dark Theme** - Modern, conversion-optimized design with neon accents
- 🚀 **SEO Optimized** - Complete metadata, semantic HTML, and keyword optimization
- 🤖 **OpenAI Integration** - Real DALL-E 3 API integration for image generation
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Framer Motion for engaging user experience
- 💰 **Affiliate Ready** - Built-in redirect flow to affiliate partner
- 🎯 **Conversion Focused** - Strategic CTAs and premium overlays

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **OpenAI API** (DALL-E 3)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key
- Affiliate partner URL

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_AFFILIATE_URL=https://your-affiliate-partner.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # OpenAI API integration
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with SEO metadata
│   └── page.tsx                   # Main landing page
├── components/
│   ├── Generator.tsx              # Interactive generator component
│   └── FAQ.tsx                    # FAQ accordion component
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features Explained

### Generator Component
- Text input for user prompts
- Real-time progress bar during generation
- Watermarked preview of generated images
- Affiliate redirect CTA button

### SEO Optimization
- Optimized meta title and description
- Semantic HTML structure
- Natural keyword distribution (LSI keywords)
- Open Graph and Twitter Card metadata

### Affiliate Flow
1. User generates a free preview image
2. Image is displayed with watermark/overlay
3. Large CTA button redirects to affiliate partner
4. Environment variable controls affiliate URL

## Customization

### Change Affiliate URL
Update the `NEXT_PUBLIC_AFFILIATE_URL` in your `.env.local` file.

### Modify Colors
Edit `tailwind.config.ts` to change the color scheme. The current theme uses:
- Background: `slate-950`
- Accents: Purple (`#a855f7`) and Blue (`#3b82f6`)

### Update Content
All content sections are in `app/page.tsx`. Edit the text directly to match your brand voice.

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key for DALL-E 3 | Yes |
| `NEXT_PUBLIC_AFFILIATE_URL` | Your affiliate partner URL | Yes |

## Notes

- The generator shows a watermarked preview for free users
- Full-resolution, watermark-free images require premium access via affiliate link
- All images are generated in real-time using OpenAI's DALL-E 3 API
- The page is fully responsive and optimized for mobile devices

## License

This project is for affiliate marketing purposes. Ensure compliance with OpenAI's usage policies and your affiliate partner's terms of service.
