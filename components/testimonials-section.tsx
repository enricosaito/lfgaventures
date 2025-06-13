import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Success Stories</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Hear what our partners have to say about working with LFGA Ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="border-0 bg-background shadow-md">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-primary/40" />
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    content:
      "LFGA Ventures has transformed our approach to traffic acquisition. Their quality sources have significantly improved our conversion rates and ROI.",
    author: "Alex Johnson",
    role: "Marketing Director, TechCorp",
  },
  {
    content:
      "The team at LFGA Ventures understands our audience better than anyone. They've consistently delivered high-quality traffic that converts.",
    author: "Sarah Williams",
    role: "CEO, Growth Solutions",
  },
  {
    content:
      "Working with LFGA Ventures has been a game-changer for our business. Their in-house traffic quality is unmatched in the industry.",
    author: "Michael Chen",
    role: "Founder, Digital Innovations",
  },
]
