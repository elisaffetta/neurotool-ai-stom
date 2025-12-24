import { useState, useMemo } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const priceTiers = [
  { min: 1, max: 9, price: 99 },
  { min: 10, max: 19, price: 79 },
  { min: 20, max: 49, price: 69 },
  { min: 50, max: 100, price: 49 },
];

const CalculatorSection = () => {
  const [articles, setArticles] = useState(20);

  const pricePerArticle = useMemo(() => {
    const tier = priceTiers.find((t) => articles >= t.min && articles <= t.max);
    return tier ? tier.price : 49;
  }, [articles]);

  const total = articles * pricePerArticle;
  const fiverrPrice = articles * 150;
  const savings = fiverrPrice - total;

  return (
    <section className="section section-alt" id="calculator">
      <div className="container-neurotool">
        {/* Header with title and subtitle */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Калькулятор стоимости
          </div>
          <h2 className="heading-2 mb-3">
            Рассчитайте стоимость
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите нужное количество статей и узнайте точную цену. Чем больше заказ — тем выгоднее цена за статью.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Slider card */}
          <div className="card-neurotool p-8">
            <label className="block text-xl font-bold text-foreground mb-6">
              Количество статей:
            </label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={articles}
              onChange={(e) => setArticles(parseInt(e.target.value))}
              className="slider-neurotool w-full mb-6"
            />
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-muted-foreground">1 статья</span>
              <span className="big-number text-4xl">{articles}</span>
              <span className="text-sm text-muted-foreground">100 статей</span>
            </div>

            {/* Benefits list */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0" />
                <span>SEO + GEO оптимизация включена</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0" />
                <span>Проверка живыми редакторами</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0" />
                <span>Гарантия возврата 100%</span>
              </div>
            </div>
          </div>

          {/* Results card */}
          <div className="card-neurotool bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 border-2 border-primary/20">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-sm">
                <div className="text-sm text-muted-foreground mb-2">За статью</div>
                <div className="text-3xl font-bold text-foreground">${pricePerArticle}</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-sm">
                <div className="text-sm text-muted-foreground mb-2">Экономия</div>
                <div className="text-3xl font-bold text-[hsl(var(--success))]">${savings.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 text-center mb-6 shadow-lg">
              <div className="text-primary-foreground/80 text-sm mb-2">Итого:</div>
              <div className="text-5xl font-extrabold text-primary-foreground mb-2">
                ${total.toLocaleString()}
              </div>
              <div className="text-primary-foreground/70 text-xs">
                вместо ${fiverrPrice.toLocaleString()} на Fiverr
              </div>
            </div>

            <button className="btn-cta-glow w-full text-lg py-4 mb-4 whitespace-nowrap">
              Оформить заказ
            </button>

            <p className="text-center text-xs text-muted-foreground">
              💳 Безопасная оплата • 🔒 Гарантия возврата • ⚡ Старт за 24 часа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
