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
    <section id="solutions" className="section">
      <div className="container-neurotool">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">
            Neurotool AI решает проблему привлечения пациентов в стоматологические клиники
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            SEO + GEO тексты, которые ранжируются в Google И цитируются AI-поисковиками
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          {/* Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-accent/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--success))] shrink-0" />
                <span className="text-body font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Visual cards */}
          <div className="space-y-4">
            <div className="card-neurotool flex items-start gap-4">
              <div className="icon-box-light shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">40% запросов через AI</h4>
                <p className="text-sm text-muted-foreground">
                  В 2024-2025 почти половина поиска идет через AI-ассистентов. 
                  Без GEO-оптимизации вы теряете этих пациентов.
                </p>
              </div>
            </div>
            
            <div className="card-neurotool flex items-start gap-4">
              <div className="icon-box-light shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AI + человеческий контроль</h4>
                <p className="text-sm text-muted-foreground">
                  Гибрид технологий: скорость AI и качество ручной проверки. 
                  Это наше преимущество в цене и скорости.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-primary-lg inline-flex items-center gap-2">
            Заказать тестовую статью за $9.99
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
