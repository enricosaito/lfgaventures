export function PartnersSection() {
  return (
    <section id="partners" className="container py-24 sm:py-32">
      <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Our Partners</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We collaborate with industry leaders to deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center rounded-lg border bg-background p-8">
            <div className="text-center text-sm font-medium">Partner {i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
