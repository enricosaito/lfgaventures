import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Layers, Target, Users } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          LFGA Ventures specializes in connecting quality traffic with high-converting offers, creating a powerful
          ecosystem for digital marketing success.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>In-House Quality Traffic</CardTitle>
            <CardDescription>Our core specialty</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We've developed proprietary channels and methods to generate high-quality, targeted traffic that converts.
              Our in-house traffic sources are carefully cultivated to ensure maximum engagement and response rates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Offer Partnerships</CardTitle>
            <CardDescription>Strategic collaborations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We partner with offer owners to promote their products and services through our traffic network. Our team
              works closely with partners to optimize offers for maximum conversion and profitability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>In-House Offer Development</CardTitle>
            <CardDescription>End-to-end solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Beyond traffic, we develop and run our own in-house offers, giving us unique insights into what works.
              This expertise translates into better performance for all our partners.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Traffic Hub Management</CardTitle>
            <CardDescription>Optimized connections</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              As a traffic hub, we connect the right offers with the right audiences. Our sophisticated matching
              algorithms ensure that traffic is directed to offers with the highest potential for conversion.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
