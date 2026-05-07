**First Impression**
The card layout communicates "data tool" clearly, but the lack of contrast between sections makes it
hard to know where to start. The primary CTA doesn't read as primary.

**Issues**

🔴 Critical
- **Invisible CTA**: The "Submit" button uses the same grey as the background. Users won't see it.
  Fix: Change to #1D4ED8 (blue) with white text. Add 12px horizontal padding minimum.

🟡 Important
- **Spacing inconsistency**: Card padding alternates between 16px and 24px across sections.
  Fix: Standardize to 24px padding on all cards.
- **Typography hierarchy is flat**: Body text (16px/400) and labels (15px/400) are nearly identical.
  Fix: Drop labels to 12px/500/uppercase or 13px/600 to create separation.

🟢 Nice-to-have
- Add a subtle hover shadow (0 4px 12px rgba(0,0,0,0.08)) on interactive cards to signal clickability.

**What's Working**
- The icon set is consistent and well-chosen
- Neutral color palette is clean and doesn't clash
- Grid structure is solid — good bones

**Priority Fix**
**Fix the CTA button contrast immediately.** It's invisible on the current background. Use a saturated
blue (#1D4ED8) or your brand primary, white label, and 44px minimum height.