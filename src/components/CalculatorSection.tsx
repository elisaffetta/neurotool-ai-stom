import { useState, useMemo } from "react";
import { Calculator, TrendingUp, Gift } from "lucide-react";

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
        <div className="text-center mb-6">
          <h2 className="heading-2 mb-2">Вы можете выбрать нужное вам количество статей и узнать стоимость ниже</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Slider card */}
          <div className="card-neurotool">
            <label className="block text-lg font-semibold text-foreground mb-3">
              Количество статей:
            </label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={articles}
              onChange={(e) => setArticles(parseInt(e.target.value))}
              className="slider-neurotool w-full mb-3"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">1 статья</span>
              <span className="big-number text-3xl">{articles}</span>
              <span className="text-sm text-muted-foreground">100 статей</span>
            </div>
          </div>

          {/* Results card */}
          <div className="card-neurotool bg-gradient-to-br from-primary/5 to-accent">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-card rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">За статью</div>
                <div className="text-2xl font-bold text-foreground">${pricePerArticle}</div>
              </div>
              <div className="text-center p-3 bg-card rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">Экономия</div>
                <div className="text-2xl font-bold text-[hsl(var(--success))]">${savings.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="bg-primary rounded-xl p-4 text-center mb-4">
              <div className="text-primary-foreground/80 text-sm mb-1">Итого:</div>
              <div className="text-4xl font-extrabold text-primary-foreground">
                ${total.toLocaleString()}
              </div>
            </div>

            <button className="btn-primary w-full">
              Оформить заказ
            </button>
          </div>
        </div>

        {/* Visual stats row */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="card-flat text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">78%</div>
            <div className="text-sm text-muted-foreground">возвращаются</div>
          </div>
          <div className="card-flat text-center">
            <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">24ч</div>
            <div className="text-sm text-muted-foreground">первая статья</div>
          </div>
          <div className="card-flat text-center">
            <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">95%+</div>
            <div className="text-sm text-muted-foreground">уникальность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
