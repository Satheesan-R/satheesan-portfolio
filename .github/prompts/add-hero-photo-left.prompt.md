---
description: "Add a profile photo to the left side of the hero section in this portfolio app"
name: "Add Hero Photo Left"
argument-hint: "Image path (for example: src/assets/profile.jpg) and optional alt text"
agent: "agent"
---
Update this portfolio website so the hero section shows my photo on the left side.

User input:
{{input}}

Requirements:
- Find the hero component and related styles in this workspace.
- Require an image path in input and add that image on the left side of the hero section.
- Keep the current visual style and spacing consistent with existing design patterns.
- Make the layout responsive:
  - Desktop: photo on the left, text/content on the right.
  - Mobile: stack vertically in a clean order without overlap.
- Use accessible image markup with meaningful alt text (use alt text from input if provided, otherwise use: Portrait photo).
- If the image file path in input does not exist, stop and report that the required path is missing.
- Only make the minimum necessary edits.

Validation steps:
- Run the project checks that already exist in this repo (lint/test/build if available).
- Fix any issues introduced by your changes.

Output format:
- Short summary of what changed.
- Files updated with line-linked references.
- Validation results and any remaining TODO items.
