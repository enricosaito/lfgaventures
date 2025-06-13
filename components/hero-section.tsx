import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-32">
      <div className="container flex flex-col items-center justify-center space-y-10 pb-20 text-center md:pb-32">
        <div className="mx-auto flex max-w-[800px] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Your Partner in <span className="text-primary">Quality Traffic</span> Solutions
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            LFGA Ventures connects offer owners with high-quality traffic sources, optimizing conversions and maximizing
            ROI.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/#contact">
            <Button size="lg" className="gap-2">
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/#how-it-works">
            <Button size="lg" variant="outline">
              Learn How It Works
            </Button>
          </Link>
        </div>

        <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-lg border bg-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className="text-lg font-medium">LFGA Ventures Dashboard Preview</div>
              <div className="text-sm">Traffic analytics and campaign performance visualization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
