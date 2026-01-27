import { Hero } from './components/Hero'
import { About } from './components/About'
import { Brands } from './components/Brands'
import { WhyPartner } from './components/WhyPartner'
import { Contact } from './components/Contact'

export default async function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Brands />
            <WhyPartner />
            <About />
            <Contact />
        </div>
    )
}