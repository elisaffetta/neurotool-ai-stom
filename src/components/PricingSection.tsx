import { Star, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section" id="pricing">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Тарифы на SEO + GEO тексты<br />для стоматологий
        </h2>
        <p className="text-large text-center mb-6 max-w-2xl mx-auto">
          Прозрачные цены без скрытых платежей
        </p>

        {/* Общие условия для всех тарифов */}
        <div className="card-neurotool bg-gradient-to-br from-primary/5 to-accent max-w-4xl mx-auto mb-8 p-6">
          <h3 className="text-lg font-bold text-center mb-4">Что входит во все тарифы:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>До 3000 слов</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>SEO + GEO оптимизация</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>Живой менеджер в чате</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>Возврат 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>Срок действия: 365 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--success))]" />
              <span>Гарантия качества</span>
            </div>
          </div>
        </div>

        {/* Welcome + Packages grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {/* Welcome offer */}
          <div className="card-neurotool relative text-center border-2 border-primary bg-gradient-to-br from-primary/5 to-accent p-6 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              ТЕСТ
            </div>
            
            <h3 className="text-3xl font-extrabold text-foreground mb-2 mt-2">1 статья</h3>
            <div className="text-4xl font-bold text-primary mb-2">$9.99</div>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">Срок: 24 часа</p>
            
            <button className="btn-primary w-full mt-auto">
              Заказать
            </button>
          </div>

          {/* Start */}
          <div className="card-neurotool text-center p-6 flex flex-col">
            <h3 className="text-3xl font-extrabold text-foreground mb-2">10 статей</h3>
            <div className="text-4xl font-bold text-primary mb-1">$790</div>
            <p className="text-sm text-primary font-semibold mb-2">$79 за статью</p>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">Срок: 7-10 дней</p>
            
            <button className="btn-secondary w-full mt-auto">
              Выбрать
            </button>
          </div>

          {/* Growth - Featured */}
          <div className="card-neurotool text-center relative border-2 border-primary scale-105 p-6 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[hsl(var(--brand-blue-dark))] text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> ХИТ
            </div>
            
            <h3 className="text-3xl font-extrabold text-foreground mb-2 mt-2">20 статей</h3>
            <div className="text-4xl font-bold text-primary mb-1">$1,180</div>
            <p className="text-sm text-primary font-semibold mb-1">$59 за статью</p>
            <p className="text-xs text-[hsl(var(--success))] font-medium mb-2">Экономия $400</p>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">Срок: 2-3 недели</p>
            
            <button className="btn-primary w-full mt-auto">
              Выбрать
            </button>
          </div>

          {/* Scale */}
          <div className="card-neurotool text-center p-6 flex flex-col">
            <h3 className="text-3xl font-extrabold text-foreground mb-2">50 статей</h3>
            <div className="text-4xl font-bold text-primary mb-1">$2,450</div>
            <p className="text-sm text-primary font-semibold mb-1">$49 за статью</p>
            <p className="text-xs text-[hsl(var(--success))] font-medium mb-2">Экономия $1,500</p>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">Срок: 4-6 недель</p>
            
            <button className="btn-secondary w-full mt-auto">
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
