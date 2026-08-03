"use client"

import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

    scroll.lenisInstance?.on("scroll", ScrollTrigger.update)

    ScrollTrigger.refresh()

    return () => {
      scroll.destroy()
    }
  }, [])

  return null
}
