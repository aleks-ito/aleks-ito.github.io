import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Services from "@/components/Services"
import WorkStyle from "@/components/WorkStyle"
import CaseStudies from "@/components/CaseStudies"
import WorkingWithAgencies from "@/components/WorkingWithAgencies"
import TechStack from "@/components/TechStack"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SectionReveal from "@/components/SectionReveal"

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionReveal>
        <AboutMe />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <WorkStyle />
      </SectionReveal>
      <SectionReveal>
        <CaseStudies />
      </SectionReveal>
      <SectionReveal>
        <WorkingWithAgencies />
      </SectionReveal>
      <SectionReveal>
        <TechStack />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
      <Footer />
    </main>
  )
}
