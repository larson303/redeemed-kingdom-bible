# Redeemed Kingdom Bible

The Redeemed Kingdom Bible is a modern English Bible translation derived from the [World English Bible](https://worldenglish.bible/) (WEB), which is in the Public Domain.

## About

This project is maintained by [Bible Intelligence](https://bible-intelligence.com).

## Why the Redeemed Kingdom Bible?

Most modern Bible translations suffer from three issues that the Redeemed Kingdom Bible aims to address:

### 1. Copyright Restrictions

The majority of Bible translations today are copyrighted, restricting how God's Word can be shared, reproduced, and distributed. We believe this is un-Biblical. Scripture belongs to God and should be freely available to all. The World English Bible addressed this by placing the text in the Public Domain, and we carry that spirit forward under a CC BY-SA 4.0 license.

### 2. Removal of the Divine Name (Yahweh)

Most translations replace the name **Yahweh** (יהוה) with "the LORD" — a tradition inherited from ancient Jewish practices that avoided speaking the divine name aloud. However, this directly contradicts Exodus 3:15, where God Himself declares:

> *"This is my name forever, and this is my memorial to all generations."*

The World English Bible partially addressed this by restoring "Yahweh" in the Old Testament. The Redeemed Kingdom Bible continues and builds on this practice.

### 3. Transliteration of Names

Since ancient times, translators have *translated* personal names and place names rather than *transliterating* them. Good linguistic practice calls for transliteration — preserving the sound of a name across languages, not converting its meaning.

For example: a woman named **Yukiko** (雪子) in Japanese would be *translated* as "Snow Child," but no one would actually call her that. Yet this is essentially what has been done to Biblical names for centuries, and most seminary-trained scholars who study Greek and Hebrew have continued this tradition rather than questioning it.

The Redeemed Kingdom Bible adds parenthetical transliterations of the original Hebrew and Greek names for people and places, easing readers back toward the correct pronunciation while keeping the familiar forms accessible.

## Development

Built with [SvelteKit](https://svelte.dev/) and the static adapter for PWA-capable offline reading.

```bash
npm install               # Install dependencies
npm run extract           # Extract content from source HTML (requires Redeemed-Bible-static/)
npm run dev               # Development server at localhost:5173
npm run build             # Production build to ./build/
npm run preview           # Preview production build
```

### Features

- **Name display switcher** — toggle between English Only, Hebrew Only, or Both Names
- **4 themes** — Parchment, Night, Classic, Olive
- **PWA support** — installable, offline-capable for previously visited chapters
- **Keyboard navigation** — arrow keys for prev/next chapter

## Original Source

The World English Bible was created by Michael Paul Johnson and volunteers:
- https://ebible.org/
- https://worldenglish.bible/

Please consider supporting their work.

## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0).

"World English Bible" is a trademark of eBible.org.
