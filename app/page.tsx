import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import UpcomingEvents from "@/components/upcoming-events"
import LatestNews from "@/components/latest-news"
import Committees from "@/components/committees"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <UpcomingEvents />
      <LatestNews />
      <Committees />
      <Footer />
    </main>
  )
}
