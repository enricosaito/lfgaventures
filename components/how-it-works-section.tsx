import { CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">How LFGA Ventures Works</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our streamlined process ensures efficient traffic management and optimal results for all partners.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Timeline */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

        {/* Step 1 */}
        <div className="relative mb-12 md:mb-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8 lg:pr-16">
              <div className="relative rounded-lg border bg-card p-6 shadow-sm md:ml-0">
                <h3 className="text-xl font-bold">1. Partnership Initiation</h3>
                <p className="mt-2 text-muted-foreground">
                  We begin by understanding your goals, whether you&apos;re an offer owner looking for traffic or a
                  traffic source seeking monetization opportunities.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Comprehensive needs assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Partnership structure definition</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              1
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative mb-12 md:mb-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:ml-auto md:w-1/2 md:pl-8 lg:pl-16">
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">2. Strategic Planning</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team develops a customized strategy to match the right traffic with the right offers for maximum
                  performance.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Audience analysis and segmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Offer optimization recommendations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              2
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative mb-12 md:mb-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8 lg:pr-16">
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">3. Implementation & Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  We deploy campaigns and continuously monitor performance, making real-time adjustments to maximize
                  results.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Real-time performance tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Continuous optimization</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              3
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:ml-auto md:w-1/2 md:pl-8 lg:pl-16">
              <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">4. Scaling & Growth</h3>
                <p className="mt-2 text-muted-foreground">
                  Based on performance data, we scale successful campaigns and explore new opportunities for growth and
                  expansion.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Data-driven scaling strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>New market and channel exploration</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
