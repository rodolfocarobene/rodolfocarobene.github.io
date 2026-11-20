# rodolfocarobene.github.io

Personal GitHub Pages site (user site, served at https://rodolfocarobene.github.io).

## Goal and scope

- One-page site: short bio, CV (PDF), contacts, links to ORCID / Scopus / Google Scholar, and an auto-updating list of open-source GitHub repos.
- The logo (`assets/logo.svg`) is the shared brand mark for all project pages under rodolfocarobene.github.io. Keep its URL stable.
- The CV is LaTeX source in `cv/` (`curriculum.tex` + `sample.bib`, biblatex/biber). CI compiles it and deploys `cv.pdf` with the site. The PDF is never committed.

## Stack

- Plain static HTML/CSS/vanilla JS. No framework, no bundler, no Jekyll.
- Projects list: `assets/main.js` fetches public, non-fork, non-archived repos from the GitHub REST API at page load. `index.html` holds a static fallback list.
- Deploy: `.github/workflows/pages.yml` (build CV with latexmk, then deploy via GitHub Pages Actions). Repo setting Pages -> Source must be "GitHub Actions".

## Build / test

- CV locally: `cd cv && latexmk -pdf curriculum.tex` (needs texlive + biber). Clean with `latexmk -C`.
- Site locally: `python3 -m http.server 8000` from the repo root, open http://localhost:8000.
- Before committing: build the CV locally with no errors and check the page renders in light and dark mode and at phone width.

## Conventions

- Accent color #214F77 (same as the CV). Colors as CSS custom properties with light/dark variants.
- Prose on the page: concise, no semicolons unless necessary.
- Keep the page self-contained: no external scripts or trackers.

## Git

- Co-authoring allowed: Claude may commit at sensible milestones (with the Co-Authored-By line).
- Never push. Rodolfo pushes.
- Check staged files before every commit: no `cv.pdf`, no LaTeX aux files, no secrets.

## Safety

- Secrets: never print, commit, or send API keys, tokens, passwords or credentials anywhere. If one is found in a file, report it and don't copy it.
- Git: never force-push, never rewrite pushed history, never `git reset --hard` / `git clean -f` / `git checkout .` on uncommitted work, never `git push`, no PRs unless asked.
- Deletion: never delete, overwrite or move files without asking first. Look at the target before any such action.
- Off-limits: anything outside this directory. The originals in `~/Downloads` (`curriculum.tex`, `sample.bib`) and `~/Documents/old/curriculum` are read-only sources.
- No repo creation, settings changes, or other actions on GitHub without explicit approval.
