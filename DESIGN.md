---
name: Rodolfo Carobene, engineering logbook
description: One sheet of green computation paper from a physicist's logbook, with taped printouts, ballpoint ink and a single red stamp.
colors:
  paper: "#e4eedc"
  grid: "#c9dbbd"
  grid-major: "#b0c99f"
  print-green: "#3f6b4a"
  ink: "#22303a"
  pen-blue: "#1e3c8c"
  pen-soft: "#4a5f9c"
  graphite: "#5d6660"
  stamp-red: "#c8352b"
  highlight-yellow: "#f2c230"
  slip-white: "#fbfcf8"
  slip-muted: "#56615a"
  paper-dark: "#18221c"
  grid-dark: "#223027"
  grid-major-dark: "#2c3d31"
  print-green-dark: "#7fae86"
  ink-dark: "#dbe5d5"
  pen-blue-dark: "#a9c0ff"
  pen-soft-dark: "#8ea3db"
  graphite-dark: "#9aa69c"
  stamp-red-dark: "#ff6a5c"
  slip-white-dark: "#eef1e8"
typography:
  display:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(2.4rem, 5.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(1.7rem, 3.4vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.1
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.65
  annotation:
    fontFamily: "Kalam, cursive"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.3
  slip-title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  field-label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  focus: "2px"
spacing:
  cell: "20px"
  cell-phone: "16px"
  field-pad: "14px"
  sheet-gutter: "32px"
  margin-offset: "88px"
components:
  pad-header:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  field-label:
    textColor: "{colors.print-green}"
    typography: "{typography.field-label}"
  slip:
    backgroundColor: "{colors.slip-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px 18px 14px"
  slip-rank-1:
    backgroundColor: "{colors.slip-white}"
    padding: "26px 24px 18px"
  cv-printout:
    backgroundColor: "{colors.slip-white}"
    rounded: "{rounded.none}"
    padding: "10px"
  link:
    textColor: "{colors.pen-blue}"
  pencil-list:
    textColor: "{colors.graphite}"
    typography: "{typography.annotation}"
---

# Design System: Rodolfo Carobene, engineering logbook

## Overview

**Creative North Star: "The Engineering Logbook"**

The page is one sheet of pale green computation paper from the notebook of a physicist who builds his own instruments. The whole viewport is the sheet: a 20px grid, heavier every fifth line, with printed pad furniture (a header box, a ruled margin with punched holes) that never moves. Content sits on it as it would in a lab book: typeset text in dark slate, handwriting in ballpoint blue, white printouts held by translucent tape.

Density is calm and ruled, not busy. Hierarchy comes from the paper's own conventions: printed boxes and rules for structure, handwriting for the person, printouts for things you can take away. Tilts are small (about 0.6 to 2.2 degrees) and belong to the hand-placed objects only. Printed furniture stays square.

**Key Characteristics:**
- Grid paper as the page background, in light and dark (night-lamp) variants.
- Printed structure in pad green, content in slate, personal voice in ballpoint blue.
- White slips and printouts are the only raised objects, always taped.
- One red rubber stamp is the only red. Highlighter yellow appears only as text selection.
- Billing rank: repo printouts are sized by GitHub stars.

## Colors

Green-tinted paper with a printed-green rule system, slate type and blue ballpoint, with exactly one red.

### Primary
- **Ballpoint Blue** (`pen-blue`): links, handwriting (`.hand`), headline underline stroke, slip titles, focus ring. Soft variant `pen-soft` for annotations, sketch ink and the margin arrow.

### Secondary
- **Rubber-Stamp Red** (`stamp-red`): the single "CV / PDF" stamp. The stamp itself sits on the white printout in both themes.

### Tertiary
- **Highlighter Yellow** (`highlight-yellow`): `::selection` background only.

### Neutral
- **Computation Paper** (`paper`) with **Grid** and **Grid Major** lines: page background, fine cells every 20px, heavier every 100px.
- **Pad Green** (`print-green`): header box, ledger rules, field labels, margin rule. Printed furniture only.
- **Typeset Slate** (`ink`): body text.
- **Graphite** (`graphite`): dashed sketch lines, pencilled list text.
- **Slip White** (`slip-white`) and **Slip Muted** (`slip-muted`): printouts and slip text. Slips stay near-white in dark mode and carry their own dark text.
- **Dark variants** (`*-dark`): swapped in by `prefers-color-scheme: dark` or `data-theme="dark"`. Tape and punched holes also swap (tape is `rgba(232,220,150,0.78)` light, `rgba(222,214,160,0.38)` dark).

### Named Rules
**The One Red Rule.** Red belongs to the stamp and nothing else. No red errors, badges or links.
**The Ink Roles Rule.** Slate is typeset, blue is the hand, green is the printed pad. A new element picks the role it would have on paper.

## Typography

**Display Font:** Kalam (handwriting, cursive fallback), 400 and 700
**Body Font:** Barlow (system-ui fallback), 400, 400 italic, 500
**Label Font:** Barlow Condensed, 500 and 600

**Character:** Typeset Barlow reads as the engineer's clean notes, Kalam as his hand, Barlow Condensed as the pad's printed form labels. All three are self-hosted (@fontsource 5.3.0, OFL). Tabular numerals are on for the whole page.

### Hierarchy
- **Display** (Kalam 700, clamp 2.4rem to 4.4rem, 1.05): the name in the NAME field, rotated -1deg.
- **Headline** (Kalam 700, clamp 1.7rem to 2.2rem, 1.1): entry titles with a hand-drawn blue underline.
- **Lede** (Barlow 500, clamp 1.3rem to 1.6rem, 1.4): first bio paragraph.
- **Body** (Barlow 400, 1.08rem, 1.65): bio at max 62ch.
- **Annotation** (Kalam 400, 1.05rem, 1.3, `pen-soft`): margin notes and captions, rotated about -1 to -2deg.
- **Slip title** (Barlow Condensed 600, 1.35rem, 1.8rem for rank 1): repo names.
- **Label** (Barlow Condensed 600, 0.74 to 0.78rem, 0.14em, uppercase, `print-green`): the printed labels of header-box fields and ledger rows (NAME, SUBJECT, DATE, SHEET, contact rows). Slip metadata uses Condensed 500 at 0.82rem, 0.06em, uppercase.

### Named Rules
**The Hand Is Personal Rule.** Kalam is for the name, entry titles, annotations and the signature. It never sets running prose.
**The Printed Label Rule.** Uppercase tracked Condensed exists only as a label inside a printed box or ledger row. It is never a free-floating label above a heading.

## Layout

A single column sheet, max 1160px, centred, with a left offset of 88px (16px top, 34px left on phones) that leaves room for the ruled margin at 60px and the punched holes. Vertical rhythm is multiples of the grid cell (`--cell`, 20px, 16px under 560px): entries 4 cells apart, intro gap 3 cells, slip gaps 1.5 by 1.25 cells. The header box is a four-column grid (mark, name, date, sheet) with a full-width SUBJECT row.

The intro is two columns: bio (flexible) and the CV printout (320px). At 820px and below it stacks with the printout first, floated right at up to 250px wide. At 560px and below the header box collapses to two columns, the logo field is hidden, slips go single column, punched holes are dropped and the wide sketch swaps for a tall one. Projects use auto-fit grids (minmax 300px for top tier, 220px for starred), with unstarred repos as a ruled pencilled list.

## Elevation & Depth

Flat paper, raised printouts. The sheet and its printed furniture have no shadows. Only taped white objects lift, with a two-layer soft shadow (`0 1px 1px` plus `0 10px 24px -10px` for the CV, `0 8px 18px -10px` for slips) in `--shadow`. On hover or focus a printout straightens and rises 3 to 4px with a deeper shadow over 0.35s, easing `cubic-bezier(0.16, 1, 0.3, 1)`.

### Named Rules
**The Taped Object Rule.** Only things that could be physically taped to the page (printouts, slips) cast shadows, and each carries translucent tape with a fibrous torn-edge mask.
**The Flat Furniture Rule.** Header box, ledger and margin are printed on the paper. They get lines, never shadows or fills.
**The Fixed Regions Rule.** Header box and margin rule never move or animate.

## Shapes

Square. Printouts, slips, boxes and rules have no corner radius (focus outlines use 2px). Structure is drawn with 1px lines and 1.5px box outlines in pad green, plus dashed lines for pencilled or sketched content. Hand-placed objects tilt by small stable per-item angles (`--tilt`, hashed from the repo name so slips keep their position). The margin rule is a 1px line with a 3px echo.

## Components

### Pad header and footer
Printed grid of fields with 1.5px outer border and 1px dividers in pad green, small uppercase labels positioned in the top-left of each field, handwritten values. The footer is a two-field sign-off row with a rotated signature.

### Ledger (contacts)
Definition list ruled like an accounting ledger: 140px label column (88px on phones) separated by a 1px rule, values in Barlow 500, rows at least 2 cells tall, top rule 1.5px.

### Printout (CV)
The primary action. A slip-white sheet with 10px padding holding the real CV thumbnail, rotated 2.2deg, two tapes at the top corners and the red stamp over its lower right corner. The whole printout is the link. Hover or focus straightens to 0.6deg and lifts 4px.

### Slip (repo)
White card, 22px 18px 14px padding, centred tape, rotation from `--tilt`, Condensed title in blue, muted description, dashed rule over uppercase metadata with star count. Rank 1 slips are larger (padding 26px 24px 18px, 1.8rem title). The title's pseudo-element makes the whole slip the link. Archived repos carry a small handwritten flag at top right.

### Pencil list
Unstarred repos and the offline fallback. Kalam 1.1rem in graphite, ruled by `grid-major` lines, links in bold blue.

### Links and focus
Links are ballpoint blue, 1px underline thickening to 2px on hover. Focus is a 2px dashed blue outline offset 4px.

### Margin note and arrow
Handwritten note with an ink arrow pointing at the CV. The arrow draws itself (0.9s, then a 0.4s second stroke), then the stamp lands (0.45s, scale 1.35 to 1). This is the page's one authored motion and it is disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** build new content as something that exists on a logbook page: a printed box, a ledger row, a taped printout, a handwritten note or a pencilled line.
- **Do** place structure on the 20px cell grid and use multiples of `--cell` for vertical spacing.
- **Do** keep square corners and tilt only hand-placed objects, by small angles.
- **Do** keep every theme value as a custom property with a dark variant, and check text on slips against `slip-ink` and `slip-muted`.
- **Do** keep the single entrance motion as the only authored animation and honour reduced motion.

### Don't:
- **Don't** add red anywhere but the stamp, or yellow anywhere but text selection.
- **Don't** return to the academic-template column of photo, name, icon row and news list.
- **Don't** use rounded cards, blur, gradients or glass. Depth comes only from taped paper.
- **Don't** set running text in Kalam or tilt printed furniture.
- **Don't** load external fonts, scripts or trackers. All assets are self-hosted.

## Not canonized

Build values recorded as defects, not rules: slip title colour `#1e3c8c` and stamp `#b8291f` are hardcoded instead of using `--pen` and `--stamp` (the slip title stays dark blue in dark mode because slips are white, which is correct, but should be tokenized), slip border colours `#e3e6df` and `#c9d2c4` are one-off literals, and the dark palette is duplicated in two CSS blocks.
