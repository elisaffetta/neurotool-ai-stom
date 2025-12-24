import { Star, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section" id="pricing">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-6">
          Тарифы на SEO + GEO тексты<br />для стоматологий
        </h2>

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

        {/* Main Packages - 3 равных тарифа */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Start */}
          <div className="card-neurotool text-center p-8 flex flex-col h-full">
            <h3 className="text-3xl font-extrabold text-foreground mb-3">10 статей</h3>
            <div className="text-5xl font-bold text-primary mb-2">$790</div>
            <p className="text-base text-primary font-semibold mb-3">$79 за статью</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Срок: 7-10 дней</p>
            
            <button className="btn-secondary w-full mt-auto">
              Выбрать
            </button>
          </div>

          {/* Growth - Featured */}
          <div className="card-neurotool text-center relative border-2 border-primary shadow-[var(--shadow-hover)] p-8 flex flex-col h-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[hsl(var(--brand-blue-dark))] text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> ХИТ
            </div>
            
            <h3 className="text-3xl font-extrabold text-foreground mb-3 mt-2">20 статей</h3>
            <div className="text-5xl font-bold text-primary mb-2">$1,180</div>
            <p className="text-base text-primary font-semibold mb-1">$59 за статью</p>
            <p className="text-sm text-[hsl(var(--success))] font-medium mb-3">Экономия $400</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Срок: 2-3 недели</p>
            
            <button className="btn-cta-glow w-full mt-auto py-3 px-6 text-base whitespace-nowrap">
              Выбрать
            </button>
          </div>

          {/* Scale */}
          <div className="card-neurotool text-center p-8 flex flex-col h-full">
            <h3 className="text-3xl font-extrabold text-foreground mb-3">50 статей</h3>
            <div className="text-5xl font-bold text-primary mb-2">$2,450</div>
            <p className="text-base text-primary font-semibold mb-1">$49 за статью</p>
            <p className="text-sm text-[hsl(var(--success))] font-medium mb-3">Экономия $1,500</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Срок: 4-6 недель</p>
            
            <button className="btn-secondary w-full mt-auto">
              Выбрать
            </button>
          </div>
        </div>

        {/* Test Article - отдельный блок */}
        <div className="max-w-4xl mx-auto">
          <div className="card-neurotool bg-gradient-to-br from-primary/10 via-accent to-primary/5 border-2 border-primary/30 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Левая часть - основная инфа */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                  ПРОСТОЙ СТАРТ
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                  Начните с одной тестовой статьи
                </h3>
                <div className="text-5xl font-bold text-primary mb-4">$9.99</div>
                <p className="text-lg text-muted-foreground mb-6">
                  Попробуйте качество нашей работы без больших вложений
                </p>
              </div>

              {/* Правая часть - преимущества */}
              <div className="flex-1">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">
                      <strong>Готово за 24 часа</strong> — быстрый результат
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">
                      <strong>Живые копирайтеры</strong> проверят каждое слово
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">
                      <strong>2-3 итерации правок</strong> бесплатно
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">
                      <strong>Удобная платформа</strong> для заказа и общения
                    </span>
                  </li>
                </ul>
                
                <button className="btn-cta-glow w-full mt-6 text-base md:text-lg py-3 px-6 whitespace-nowrap">
                  Заказать тестовую статью
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
