import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Clock, Users, Zap, Target } from "lucide-react";
import { keyAchievements, summaryStats } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  "from-green-500 to-emerald-500": <DollarSign className="w-8 h-8" />,
  "from-blue-500 to-cyan-500": <TrendingUp className="w-8 h-8" />,
  "from-purple-500 to-pink-500": <Zap className="w-8 h-8" />,
  "from-orange-500 to-red-500": <Clock className="w-8 h-8" />,
  "from-indigo-500 to-blue-500": <Target className="w-8 h-8" />,
  "from-teal-500 to-green-500": <Users className="w-8 h-8" />,
};

const KeyAchievements = () => (
  <section id="achievements" className="py-24 px-4 bg-gray-900">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
        </h2>
      </div>

      <div className="relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {keyAchievements.map((a, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${a.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {iconMap[a.gradient]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">{a.category}</Badge>
                          <Badge variant="outline" className="text-xs">{a.company}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{a.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{a.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.metrics.map((m, j) => (
                        <Badge key={j} variant="outline" className="text-xs">{m}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>

      <div className="mt-16">
        <Card className="card-gradient border-primary/20 shadow-elevated">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {summaryStats.map((s, i) => (
                <div key={i}>
                  <div className={`text-3xl font-bold mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default KeyAchievements;
