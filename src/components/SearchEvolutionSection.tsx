import { Search, Sparkles, TrendingUp } from "lucide-react";

const SearchEvolutionSection = () => {
  return (
    <section className="section section-alt">
      <div className="container-neurotool">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Как изменился поиск пациентов
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Пациенты больше не ищут через обычный Google. Они спрашивают у нейроблоков — и получают готовые ответы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="card-neurotool p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
              <Search className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Нейроблоки в Google</h3>
            <p className="text-base leading-relaxed text-foreground/80 flex-grow">
              Google показывает AI-ответы прямо в результатах. Пациенты видят информацию ещё до клика на сайт.
            </p>
            <div className="text-sm text-primary font-semibold pt-4 border-t border-border">
              → Если вас нет в нейроблоке — вы теряете видимость
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-neurotool p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">ChatGPT и Perplexity</h3>
            <p className="text-base leading-relaxed text-foreground/80 flex-grow">
              Люди спрашивают напрямую у нейроблоков. Они цитируют только сайты с экспертной информацией.
            </p>
            <div className="text-sm text-primary font-semibold pt-4 border-t border-border">
              → Нужна структура и глубина контента
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-neurotool p-8 hover:shadow-xl transition-shadow border-2 border-primary/20 bg-primary/5 flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Что такое GEO</h3>
            <p className="text-base leading-relaxed text-foreground/80 flex-grow">
              <strong>Generative Engine Optimization</strong> — оптимизация под нейроблоки. Новый стандарт продвижения.
            </p>
            <div className="text-sm text-primary font-semibold pt-4 border-t border-border">
              → SEO + GEO = двойной трафик
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="card-neurotool bg-gradient-to-br from-primary/5 via-primary/3 to-background border-2 border-primary/20 p-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Двойная оптимизация
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Neurotool AI оптимизирует под SEO + GEO одновременно
          </h3>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Вы получаете трафик из классического Google-поиска <strong>и</strong> из нейроблоков — ChatGPT, Perplexity, AI Overview. Ваш контент работает на всех платформах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchEvolutionSection;
