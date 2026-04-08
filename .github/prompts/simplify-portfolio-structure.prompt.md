---
name: Simplify Portfolio Structure
description: Refactor portfolio folder/code structure to look clean and human-crafted while preserving the exact UI, content, and behavior.
argument-hint: What should be simplified or cleaned up?
agent: agent
---
You are refactoring this portfolio codebase to make its structure simpler, cleaner, and more human-crafted.

Primary rule:
- Keep the same visual design, page content, routes, and behavior.
- Do not change branding text, section copy, project details, or legal page content.
- Do not change the portfolio format seen by users.

Task:
1. Inspect the current folder structure and component organization.
2. Identify AI-looking complexity (too many tiny wrappers, over-segmentation, redundant layers, confusing file placement).
3. Propose a minimal simplification plan with clear tradeoffs.
4. Implement the simplification safely.
5. Validate by checking build/lint/tests when available.

Implementation constraints:
- Preserve public behavior and page output.
- Prefer reducing indirection over adding abstractions.
- Keep names practical and readable.
- Avoid broad rewrites; focus on high-value simplification.
- Keep edits scoped and reversible.

Required output format:
- Goal summary (2-4 lines)
- Before -> After structure (only affected folders/files)
- Files changed and why
- Validation results
- Risk notes (if anything could still affect layout/content)

If a requested simplification might change the UI/content, stop and provide a safer alternative that preserves the exact portfolio result.
