import type { StaticImageData } from "next/image"

// Just My Look
import justmylookHomepage from "./justmylook-homepage.png"
import justmylookSearchpage from "./justmylook-searchpage.png"

// Base London
import baselondonHomepage from "./baselondon-homepage.png"

// Close Company Living (filename: colsecompanyliving)
import colsecompanylivingHomepage from "./colsecompanyliving-homepage.png"
import colsecompanylivingProductpage from "./colsecompanyliving-productpage.png"

// Reboxed
import reboxedProductpage from "./reboxed-productpage.png"

const justmylookImages: StaticImageData[] = [
  justmylookHomepage,
  justmylookSearchpage,
]

const baselondonImages: StaticImageData[] = [baselondonHomepage]

const closecompanyImages: StaticImageData[] = [
  colsecompanylivingHomepage,
  colsecompanylivingProductpage,
]

const reboxedImages: StaticImageData[] = [reboxedProductpage]

export const caseStudyAssetImages: Record<string, StaticImageData[]> = {
  "justmylook-algolia-theme": justmylookImages,
  "baselondon-algolia": baselondonImages,
  "closecompany-headless": closecompanyImages,
  "reboxed-custom-features": reboxedImages,
}
