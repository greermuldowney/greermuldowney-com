---
layout: post-photography
title: Monetary Violence (grid caption test)
date: 2017-01-01
permalink: /webkit-testcase/monetary-violence-grid/
custom-css: post-photography-grid
sitemap: false
noindex: true
photo-directory-prefix: monetary-violence/
photos:
    - filename: Muldowney_MonetaryViolence_01.avif
      notes: Short caption, landscape image.
    - filename: Muldowney_MonetaryViolence_02.avif
      notes: Short caption, portrait image.
    - filename: Muldowney_MonetaryViolence_07.avif
      notes: A medium-length caption that fits on one line but is wider than a narrow photo, to show how the slide width follows the caption.
    - filename: Muldowney_MonetaryViolence_11.avif
      notes: A long caption on a portrait image, to show the photo shrinking to leave room for it. Because of this much text, the caption wraps to several lines, balanced, and the photo has to give up height. In Safari the slide width does not follow the shrunken photo, leaving a large empty gap beside it.
    - filename: Muldowney_MonetaryViolence_12.avif
      notes: A long caption on a landscape image, to show the photo shrinking to leave room for it. Because of this much text, the caption wraps to several lines, balanced, and the photo has to give up height. In Safari the slide width does not follow the shrunken photo, leaving a large empty gap beside it.
---

**This is a test case, not part of the portfolio.**

The current production page requires calculating the caption height, so you see the CSS variable defined in each div, but it isn't used. The idea was that aspect ratios for every image would be calculated once loaded. The caption takes as much width as it needs, and then the image takes up the rest of the vertical space if needed, or fills the horizontal space, and the entire grid column is vertically centered.

Looks correct on Chrome and Firefox.