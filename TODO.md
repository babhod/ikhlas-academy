# Improve Final CTA Section layered depth in HomePage

Status: ✅ COMPLETE

**Steps:**

1. [x] Confirmed existing implementation
2. [x] Enhanced pattern (::before): #2750A9 Islamic stars opacity 0.10-0.15, drift anim, denser
3. [x] Strengthened radial (.cta-radial-light): opacity 0.20 peak, dual ellipses, pulse anim
4. [x] Updated gradient (::after): richer primary + texture
5. [x] Edited src/styles/custom.css (3 precise replacements)
6. [x] Verified HomePage.tsx (no changes needed)
7. [x] Dev server running - preview bottom section (hard refresh Ctrl+F5 if needed)
8. [x] Task complete

Layers: pattern(z1) → gradient(z2) → light(z3) → content(z10). Visible depth achieved!

**Primary color:** #2750A9
**Goal:** Subtle but visible layers for elegance/depth, non-distracting.
