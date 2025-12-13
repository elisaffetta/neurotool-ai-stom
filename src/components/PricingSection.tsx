import { Star, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section" id="pricing">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Тарифы на SEO + GEO тексты для стоматологий
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Прозрачные цены без скрытых платежей
        </p>

        {/* Welcome + Packages grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {/* Welcome offer */}
          <div className="card-neurotool relative text-center border-2 border-primary bg-gradient-to-br from-primary/5 to-accent flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              ТЕСТ
            </div>
            
            <div className="mb-2 mt-2">
              <span className="text-3xl font-extrabold text-primary">$9.99</span>
            </div>
            
            <h3 className="font-semibold text-foreground mb-3">1 статья</h3>
            
            <ul className="space-y-2 text-left mb-4 text-sm flex-grow">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> До 3000 слов</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> SEO + GEO</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> 24 часа</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Возврат 100%</li>
            </ul>
            
            <button className="btn-primary w-full text-sm py-2 mt-auto">
              Заказать
            </button>
          </div>

          {/* Start */}
          <div className="card-neurotool text-center flex flex-col">
            <h3 className="text-3xl font-extrabold text-foreground mb-1">10 статей</h3>
            <div className="mb-3">
              <span className="text-xl font-bold text-primary">$790</span>
              <span className="text-sm text-muted-foreground ml-1">($79/шт)</span>
            </div>
            
            <ul className="space-y-2 text-left mb-4 text-sm flex-grow">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> SEO + GEO</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> 7-10 дней</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Контент-план</li>
              <li className="invisible flex items-center gap-2"><Check className="w-4 h-4" /> —</li>
            </ul>
            
            <button className="btn-secondary w-full text-sm py-2 mt-auto">
              Выбрать
            </button>
          </div>

          {/* Growth - Featured */}
          <div className="card-neurotool text-center relative border-2 border-primary scale-105 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[hsl(var(--brand-blue-dark))] text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> ХИТ
            </div>
            
            <h3 className="text-3xl font-extrabold text-primary mt-2 mb-1">20 статей</h3>
            <div className="mb-1">
              <span className="text-xl font-bold text-foreground">$1,380</span>
              <span className="text-sm text-muted-foreground ml-1">($69/шт)</span>
            </div>
            <p className="text-xs text-[hsl(var(--success))] font-medium mb-3">Экономия $200</p>
            
            <ul className="space-y-2 text-left mb-4 text-sm flex-grow">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> SEO + GEO</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> 2-3 недели</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Контент + ТЗ</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Менеджер</li>
            </ul>
            
            <button className="btn-primary w-full text-sm py-2 mt-auto">
              Выбрать
            </button>
          </div>

          {/* Scale */}
          <div className="card-neurotool text-center flex flex-col">
            <h3 className="text-3xl font-extrabold text-foreground mb-1">50 статей</h3>
            <div className="mb-1">
              <span className="text-xl font-bold text-primary">$2,450</span>
              <span className="text-sm text-muted-foreground ml-1">($49/шт)</span>
            </div>
            <p className="text-xs text-[hsl(var(--success))] font-medium mb-3">Экономия $1,500</p>
            
            <ul className="space-y-2 text-left mb-4 text-sm flex-grow">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> SEO + GEO</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> 4-6 недель</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Стратегия</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[hsl(var(--success))]" /> Команда</li>
            </ul>
            
            <button className="btn-secondary w-full text-sm py-2 mt-auto">
              Выбрать
            </button>
          </div>
        </div>

        {/* Addons row */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="card-flat flex items-center gap-4 p-4">
            <div className="text-2xl font-bold text-primary">+$300</div>
            <div>
              <div className="font-semibold text-foreground">Контент-план</div>
              <div className="text-sm text-muted-foreground">20 тем с ключами и структурой</div>
            </div>
          </div>
          <div className="card-flat flex items-center gap-4 p-4">
            <div className="text-2xl font-bold text-primary">+$500</div>
            <div>
              <div className="font-semibold text-foreground">Детальные ТЗ</div>
              <div className="text-sm text-muted-foreground">Референсы, tone of voice, примеры</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
