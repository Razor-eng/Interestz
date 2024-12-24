"use client"
import { HeroSection } from '@/components/hero-section'
import { CalculatorForm } from '@/components/calculator-form'
import { BankList } from '@/components/bank-list'
import { Footer } from '@/components/footer'
import { banks } from '@/data/banks'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <section className="container mx-auto py-12">
        <CalculatorForm banks={banks} />
      </section>
      <section className="container mx-auto py-12 bg-secondary/50">
        <h2 className="text-2xl font-bold text-center mb-8">Available Banks</h2>
        <BankList banks={banks} />
      </section>
      <Footer />
    </main>
  )
}