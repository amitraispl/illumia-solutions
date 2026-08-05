"use client"

import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Site-wide scroll is driven by this single Locomotive/Lenis instance, which
// hijacks native wheel/touch scrolling and animates position itself. Any code
// that needs to scroll the page (e.g. an anchor-jump button) has to go
// through this instance instead of native APIs like `location.hash` or
// `scrollIntoView` — those fight Lenis's own RAF loop and produce janky,
// inconsistent results. Exposed as a module-level singleton since the
// instance is only ever created here.
let activeInstance: LocomotiveScroll | null = null

export function getSmoothScroll() {
  return activeInstance
}

export default function SmoothScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
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

    return () => {
      activeInstance = null
      scroll.destroy()
    }
  }, [])

  return null
}
