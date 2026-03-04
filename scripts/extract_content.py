#!/usr/bin/env python3
"""
Content Extraction Script for Redeemed Kingdom Bible SvelteKit migration.

Processes static HTML chapter files and extracts content fragments:
1. Strips navigation chrome (head, sidebar, top-nav, scripts)
2. Keeps <main> and <footer class="footnote"> content
3. Transforms .rkb-name spans into structured .rkb-ann spans for name mode switching
4. Outputs minimal HTML fragments to static/content/books/
5. Also extracts article content to static/content/articles/

Usage:
  python3 scripts/extract_content.py
  python3 scripts/extract_content.py --source ../Redeemed-Bible
"""

import argparse
import os
import re
import sys
import json


SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

# Default source location (sibling to rkb-svelte)
DEFAULT_SOURCE = os.path.join(os.path.dirname(PROJECT_ROOT), 'Redeemed-Bible-static')


def extract_main_and_footnotes(html):
    """Extract <main>...</main> and <footer class="footnote">...</footer> content."""
    parts = []

    # Extract main content
    main_match = re.search(r'<main\b[^>]*>(.*?)</main>', html, re.DOTALL)
    if main_match:
        parts.append(f'<main class="main">{main_match.group(1)}</main>')

    # Extract footnote footer
    fn_match = re.search(r'<footer class="footnote">(.*?)</footer>', html, re.DOTALL)
    if fn_match:
        parts.append(f'<footer class="footnote">{fn_match.group(1)}</footer>')

    # Extract copyright footer
    cr_match = re.search(r'<footer class="copyright">(.*?)</footer>', html, re.DOTALL)
    if cr_match:
        parts.append(f'<footer class="copyright">{cr_match.group(1)}</footer>')

    return '\n\n'.join(parts)


def is_similar(english, translit):
    """Check if transliteration is effectively identical to English."""
    e = english.lower().replace("'", "").replace("-", "").replace(" ", "")
    t = translit.lower().replace("'", "").replace("-", "").replace(" ", "")
    return e == t


def transform_name_annotations(html):
    """
    Transform old-style .rkb-name spans into structured .rkb-ann spans.

    Old format:
      Jesus <span class="rkb-name">(Yehoshua, 'Yahweh is salvation')</span>

    New format:
      <span class="rkb-ann" data-std="Jesus" data-cor="Yehoshua">
        <span class="rkb-s">Jesus</span>
        <span class="rkb-c">Yehoshua</span>
        <span class="rkb-d"> (Yehoshua, 'Yahweh is salvation')</span>
      </span>

    For meaning-only annotations (transliteration ≈ English):
      Adam <span class="rkb-name">('Red earth / Mankind')</span>

    New format:
      <span class="rkb-ann" data-std="Adam" data-cor="Adam">
        <span class="rkb-s">Adam</span>
        <span class="rkb-d"> ('Red earth / Mankind')</span>
      </span>
    """
    # Pattern: word(s) before the span, then the rkb-name span
    # The English name is the word(s) immediately before the span
    # Uses greedy .+ to handle nested parentheses like (Mosheh, 'Drawn out (of water)')
    pattern = re.compile(
        r'(\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)?)'   # English name (1-2 capitalized words)
        r'\s*'
        r'<span class="rkb-name">'
        r'\((.+?)\)'                              # Parenthetical content (non-greedy, backtracks to find )</span>)
        r'</span>'
    )

    def replace_match(m):
        english_name = m.group(1)
        paren_content = m.group(2)

        # Parse the parenthetical: either "Transliteration, 'meaning'" or "'meaning'"
        meaning_only_match = re.match(r"^'(.+)'$", paren_content)
        full_match = re.match(r"^(.+?),\s*'(.+)'$", paren_content)

        if full_match:
            translit = full_match.group(1).strip()
            meaning = full_match.group(2).strip()
            original_paren = f" ({translit}, '{meaning}')"

            if is_similar(english_name, translit):
                # Transliteration same as English — no corrected span needed
                return (
                    f'<span class="rkb-ann" data-std="{english_name}" data-cor="{english_name}">'
                    f'<span class="rkb-s">{english_name}</span>'
                    f'<span class="rkb-d">{original_paren}</span>'
                    f'</span>'
                )
            else:
                return (
                    f'<span class="rkb-ann" data-std="{english_name}" data-cor="{translit}">'
                    f'<span class="rkb-s">{english_name}</span>'
                    f'<span class="rkb-c">{translit}</span>'
                    f'<span class="rkb-d">{original_paren}</span>'
                    f'</span>'
                )
        elif meaning_only_match:
            meaning = meaning_only_match.group(1).strip()
            original_paren = f" ('{meaning}')"
            return (
                f'<span class="rkb-ann" data-std="{english_name}" data-cor="{english_name}">'
                f'<span class="rkb-s">{english_name}</span>'
                f'<span class="rkb-d">{original_paren}</span>'
                f'</span>'
            )
        else:
            # Fallback: keep as-is if we can't parse
            return m.group(0)

    return pattern.sub(replace_match, html)


def extract_article_content(html):
    """Extract article content from full HTML page."""
    parts = []

    # Articles have: header, <article class="article-content">...</article>, footer.fine
    header_match = re.search(r'(<header>.*?</header>)', html, re.DOTALL)
    if header_match:
        parts.append(header_match.group(1))

    # Extract article content — source uses <article class="article-content">
    article_match = re.search(r'<article class="article-content">(.*?)</article>', html, re.DOTALL)
    if article_match:
        parts.append(f'<div class="article-content">{article_match.group(1)}</div>')

    # Extract footer
    footer_match = re.search(r'(<footer class="fine">.*?</footer>)', html, re.DOTALL)
    if footer_match:
        parts.append(footer_match.group(1))

    result = '\n\n'.join(parts) if parts else ''

    # Rewrite internal links to SvelteKit routes
    result = re.sub(r'href="../../copyright\.html"', 'href="/copyright"', result)
    # Article cross-links: "the-name-of-jesus.html" -> "/articles/the-name-of-jesus"
    result = re.sub(r'href="([\w-]+)\.html"', r'href="/articles/\1"', result)

    return result


def process_books(source_dir, output_dir):
    """Process all chapter HTML files."""
    books_dir = os.path.join(source_dir, 'books')

    if not os.path.isdir(books_dir):
        print(f"Error: Books directory not found: {books_dir}")
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)

    files = sorted(f for f in os.listdir(books_dir) if f.endswith('.html'))
    count = 0

    for filename in files:
        filepath = os.path.join(books_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        # Extract main content + footnotes
        content = extract_main_and_footnotes(html)

        if not content:
            print(f"  Warning: No <main> found in {filename}, skipping")
            continue

        # Transform name annotations for name-mode switching
        content = transform_name_annotations(content)

        # Write output fragment
        out_path = os.path.join(output_dir, filename)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1

    print(f"Extracted {count} chapter files to {output_dir}")
    return count


def process_articles(source_dir, output_dir):
    """Process article HTML files."""
    articles_dir = os.path.join(source_dir, 'docs', 'articles')

    if not os.path.isdir(articles_dir):
        print(f"  No articles directory found at {articles_dir}")
        return 0

    os.makedirs(output_dir, exist_ok=True)

    files = sorted(f for f in os.listdir(articles_dir) if f.endswith('.html'))
    count = 0

    for filename in files:
        filepath = os.path.join(articles_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        content = extract_article_content(html)

        if not content:
            print(f"  Warning: No article content found in {filename}, skipping")
            continue

        out_path = os.path.join(output_dir, filename)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1

    print(f"Extracted {count} article files to {output_dir}")
    return count


def copy_copyright(source_dir, output_dir):
    """Extract copyright page content."""
    filepath = os.path.join(source_dir, 'copyright.html')
    if not os.path.isfile(filepath):
        print("  No copyright.html found")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract main content area
    parts = []
    header_match = re.search(r'(<header>.*?</header>)', html, re.DOTALL)
    if header_match:
        parts.append(header_match.group(1))

    mainindex_match = re.search(r'(<div class="mainindex">.*?</div>)\s*(?:</body|$)', html, re.DOTALL)
    if mainindex_match:
        parts.append(mainindex_match.group(1))

    content = '\n\n'.join(parts) if parts else ''
    if content:
        os.makedirs(output_dir, exist_ok=True)
        out_path = os.path.join(output_dir, 'copyright.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Extracted copyright page to {out_path}")


def main():
    parser = argparse.ArgumentParser(description='Extract content for SvelteKit migration')
    parser.add_argument('--source', default=DEFAULT_SOURCE,
                        help='Path to Redeemed-Bible source directory')
    args = parser.parse_args()

    source_dir = os.path.abspath(args.source)
    print(f"Source: {source_dir}")

    if not os.path.isdir(source_dir):
        print(f"Error: Source directory not found: {source_dir}")
        sys.exit(1)

    books_output = os.path.join(PROJECT_ROOT, 'static', 'content', 'books')
    articles_output = os.path.join(PROJECT_ROOT, 'static', 'content', 'articles')
    pages_output = os.path.join(PROJECT_ROOT, 'static', 'content')

    print("\n--- Extracting book chapters ---")
    process_books(source_dir, books_output)

    print("\n--- Extracting articles ---")
    process_articles(source_dir, articles_output)

    print("\n--- Extracting copyright ---")
    copy_copyright(source_dir, pages_output)

    print("\nDone!")


if __name__ == '__main__':
    main()
