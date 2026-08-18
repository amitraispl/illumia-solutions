"use client"

import { useEffect } from "react"
import type LocomotiveScroll from "locomotive-scroll"

// Site-wide scroll is driven by this single Locomotive/Lenis instance, which
// hijacks native wheel/touch scrolling and animates position itself. Any code
// that needs to scroll the page (e.g. an anchor-jump button) has to go
// through this instance instead of native APIs like `location.hash` or
// `scrollIntoView` — those fight Lenis's own RAF loop and produce janky,
// inconsistent results. Exposed as a module-level singleton since the
// instance is only ever created here.
//
// On touch devices there is no instance at all (see DESKTOP_QUERY below), so
// every consumer must handle `null` by falling back to native scrolling.
let activeInstance: LocomotiveScroll | null = null

export function getSmoothScroll() {
  return activeInstance
}

// Lenis only earns its cost on pointer devices. Touch platforms already scroll
// smoothly and with the right physics; overriding that with a JS RAF loop makes
// the page feel worse, not better, on top of downloading locomotive-scroll.
// Gating on width *and* pointer keeps a narrow desktop window smooth while
// phones and tablets stay native. Everything Locomotive needs is imported
// inside the effect so the chunk is never requested on the devices that skip it.
const DESKTOP_QUERY = "(min-width: 1024px) and (pointer: fine)"

export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia(DESKTOP_QUERY).matches) return

    let scroll: LocomotiveScroll | null = null
    let cancelled = false

    void (async () => {
      const [locomotiveModule, gsapModule, scrollTriggerModule] = await Promise.all([
        import("locomotive-scroll"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])
      // The effect can be torn down while these are still in flight.
      if (cancelled) return

      const LocomotiveScrollCtor = locomotiveModule.default
      const { gsap } = gsapModule
      const { ScrollTrigger } = scrollTriggerModule

      gsap.registerPlugin(ScrollTrigger)

      scroll = new LocomotiveScrollCtor({
        lenisOptions: {
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1,
        },
        initCustomTicker: (render) => {
          gsap.ticker.add(render)
          gsap.ticker.lagSmoothing(0)
        },
        destroyCustomTicker: (render) => {
          gsap.ticker.remove(render)
        },
      })
      activeInstance = scroll

      scroll.lenisInstance?.on("scroll", ScrollTrigger.update)

      ScrollTrigger.refresh()
    })()

    return () => {
      cancelled = true
      activeInstance = null
      scroll?.destroy()
    }
  }, [])

  return null
}
