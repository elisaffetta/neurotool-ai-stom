import { CheckCircle, Lightbulb, Zap, ArrowRight } from "lucide-react";

const benefits = [
  "Статьи до 3000 слов с ключевыми словами",
  "Двойная оптимизация: SEO + GEO",
  "Структура для цитирования AI",
  "Готовность первой статьи за 24 часа",
  "Цена в 2-3 раза ниже Fiverr",
];

const SolutionSection = () => {
  return (
    <section id="solutions" className="section py-12 md:py-16">
      <div className="container-neurotool">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Neurotool AI решает проблему привлечения пациентов в стоматологические клиники
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            SEO + GEO тексты, которые ранжируются в Google И цитируются нейроблоками
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          {/* Benefits */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Visual cards */}
          <div className="space-y-3">
            <div className="card-neurotool p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">40% запросов через AI</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  В 2024-2025 почти половина поиска идет через AI-ассистентов. 
                  Без GEO-оптимизации вы теряете этих пациентов.
                </p>
              </div>
            </div>
            
            <div className="card-neurotool p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">AI + человеческий контроль</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Гибрид технологий: скорость AI и качество ручной проверки. 
                  Это наше преимущество в цене и скорости.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-cta-glow text-base md:text-lg py-4 px-10 inline-flex items-center gap-2 whitespace-nowrap">
            Заказать тестовую статью за $9.99
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
