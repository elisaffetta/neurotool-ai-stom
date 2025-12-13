import { Search, Bot, Zap, CheckCircle, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-background via-background to-accent/40 py-12 md:py-16">
      <div className="container-neurotool">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Копирайтинг-агентство с AI-технологиями для стоматологий
          </div>
          
          <h1 className="heading-1 mb-4 text-balance max-w-4xl mx-auto">
            SEO + GEO тексты для <span className="text-primary">стоматологических клиник</span>
          </h1>
          
          <p className="text-large mb-3 max-w-2xl mx-auto">
            Гибридный подход: живые копирайтеры + 15 AI-агентов
          </p>
          
          <p className="text-base mb-6 max-w-2xl mx-auto text-muted-foreground">
            Привлекайте пациентов из Google и AI-поиска. 
            Двойная оптимизация для поисковиков и нейросетей — <span className="text-primary font-semibold">от $49 за статью</span>.
          </p>
          
          {/* USP строка */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              🤝 <span className="font-medium">Живые копирайтеры</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              🤖 <span className="font-medium">15 AI-агентов</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              ⚡ <span className="font-medium">От $49/статья</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
              💰 <span className="font-medium">PayPal — гарантия возврата</span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary-lg">
              Первая статья за $9.99
            </button>
            <a href="#technology" className="btn-secondary inline-flex items-center justify-center">
              Наша технология
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
