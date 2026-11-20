# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/vanilla JS on GitHub Pages, deployed by GitHub Actions (the workflow also compiles the LaTeX CV). No framework, no bundler, no external scripts or trackers. Confirmed by Rodolfo in the first session.

## Users

- Primary: people hiring, academic and non-academic. PIs and committees looking at a post-PhD candidate, and industry recruiters looking at a quantum-hardware / FPGA / Python engineer. They arrive from a CV, an application, a paper or a talk, and want to know who he is, what he does, and get the CV in seconds.
- Secondary: students who want to do a thesis with him (bachelor and master in Physics at Milano-Bicocca). They want to see what he works on and how to reach him.

## Product Purpose

Personal home page of Rodolfo Carobene, PhD candidate in Physics at the University of Milano-Bicocca. It makes the case for him as a researcher-engineer, gives the up-to-date CV as PDF, his contacts and research profiles (ORCID, Scopus, Google Scholar), and his open-source GitHub projects. Success: a visitor understands his profile and gets the CV or a contact without hunting.

## Positioning

A physicist who builds his own instruments: works on superconducting qubits and qudits (fermionic simulation, dark-matter searches) and also writes the RFSoC FPGA firmware and open-source control software (Qibosoq, Qibolab, multi-board QICK sync, BAWSHA lock-in firmware) that runs the experiments.

## Capabilities and Constraints

- Content is limited to: short bio, CV PDF, contacts, ORCID/Scopus/Scholar links, open-source repo list. No publications list, research themes or talks on the page (Rodolfo's choice). They live in the CV.
- Repo list is loaded live from the GitHub API, sorted by stars (descending), with a static fallback.
- The site is also the root of all project pages under rodolfocarobene.github.io. Its logo at `assets/logo.svg` is the shared mark and its URL must stay stable.

## Brand Commitments

- Name: Rodolfo Carobene. Tone: concise, factual, first person.
- The logo may be redesigned to fit the site, but must stay at `assets/logo.svg`.

## Evidence on Hand

- `cv/curriculum.tex` and `cv/sample.bib`: source of every factual claim (positions, internships at TII and Intermodulation Products, projects, publications, talks).
- No photo of Rodolfo is in the project. Do not invent one, testimonials, metrics or affiliations.

## Product Principles

1. The CV is one click away from the first viewport.
2. Every claim on the page is traceable to the CV.
3. Show the physicist-who-builds-instruments angle, not a generic academic template.
4. Readable and fast for a busy reviewer, on desktop and phone.
