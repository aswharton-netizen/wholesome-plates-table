import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import PhotoStrip from '@/components/PhotoStrip'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import QuoteBand from '@/components/QuoteBand'
import ChefCarousel from '@/components/ChefCarousel'
import MenuSection from '@/components/MenuSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

const strip1 = [
  { src: '/images/strip1-a.jpg', caption: 'Citrus-braised pork taco — cochinita pibil-inspired, avocado crema, pickled onion, cotija' },
  { src: '/images/strip1-b.jpg', caption: 'Bún thịt nướng — Vietnamese grilled pork bowl with pickled daikon and carrot' },
  { src: '/images/strip1-c.jpg', caption: 'Blueberry pancakes on cast iron' },
  { src: '/images/strip1-d.jpg', caption: 'Skillet cornbread — heart-shaped Le Creuset' },
]
const strip2 = [
  { src: '/images/strip2-a.jpg', caption: 'Chicken and dumplings — from scratch, Dutch oven' },
  { src: '/images/strip2-b.jpg', caption: "Chef's plate — steak, shrimp, roasted vegetables, ricotta crostini" },
  { src: '/images/strip2-c.jpg', caption: 'Colorful vegetables on a charcoal grill' },
  { src: '/images/strip2-d.jpg', caption: 'Layered buttermilk biscuits' },
]
export default function Home() {
  return (
    <main>
      <Nav /><Hero />
      <PhotoStrip photos={strip1} />
      <Services /><HowItWorks /><QuoteBand /><ChefCarousel />
      <PhotoStrip photos={strip2} />
      <MenuSection /><BookingSection /><Footer />
    </main>
  )
}
