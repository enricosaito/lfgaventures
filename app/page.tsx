import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, MessageSquare, Share2, Target, Users } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />

        {/* Benefits Section */}
        <section className="container py-24 sm:py-32">
          <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
              Why Partner With LFGA Ventures
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join forces with us and experience the advantages of working with a traffic hub that prioritizes quality
              and results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Precision Targeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced targeting capabilities ensure your offers reach the most relevant and responsive
                  audiences, maximizing conversion potential.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data-Driven Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We leverage comprehensive analytics and insights to continuously optimize traffic quality and campaign
                  performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're looking to test a new offer or scale an existing campaign, our traffic solutions can
                  adapt to your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <PartnersSection />
        <TestimonialsSection />

        {/* Contact Section */}
        <section id="contact" className="container py-24 sm:py-32 border-t">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Ready to Drive Results?</h2>
                <p className="max-w-[85%] text-lg text-muted-foreground">
                  Connect with our team to discuss how LFGA Ventures can help you achieve your traffic and conversion
                  goals.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="h-6 w-6 text-primary" />
                  <span>Tailored partnership opportunities</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
