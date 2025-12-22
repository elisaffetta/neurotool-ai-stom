const SEOStatsSection = () => {
  return (
    <section className="section">
      <div className="container-neurotool">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3">
            📊 Почему стоматологиям нужен контент
          </h2>
          <p className="text-large text-muted-foreground">
            Цифры, которые объясняют всё
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">87%</div>
            <h3 className="font-semibold mb-2">Пациенты ищут стоматолога в Google</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Если вашей клиники нет в топ-10 по запросам "имплантация зубов" — эти пациенты идут к конкурентам
            </p>
            <p className="text-xs text-muted-foreground italic">
              Источник: BrightLocal Consumer Review Survey, 2022
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">15M+</div>
            <h3 className="font-semibold mb-2">Пользователей Perplexity AI ежемесячно</h3>
            <p className="text-sm text-muted-foreground mb-2">
              100M+ запросов в неделю через нейроблоки. Без специальной оптимизации вас там не найдут
            </p>
            <p className="text-xs text-muted-foreground italic">
              Источник: Exploding Topics, 2025
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">$6.82</div>
            <h3 className="font-semibold mb-2">Стоит 1 клик по рекламе для стоматологов</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Контекстная реклама в стоматологии — одна из самых дорогих. SEO-статьи работают годами и окупаются в 5-8 раз
            </p>
            <p className="text-xs text-muted-foreground italic">
              Источник: WordStream Google Ads Benchmarks, 2024
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">88%</div>
            <h3 className="font-semibold mb-2">Локальных поисков приводят в клинику</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Статья в топ-10 Google по локальному запросу приводит реальных пациентов в вашу клинику
            </p>
            <p className="text-xs text-muted-foreground italic">
              Источник: My Social Practice, 2024
            </p>
          </div>
        </div>

        <div className="card-neurotool bg-primary/5 border-2 border-primary/20 p-6 text-center">
          <p className="text-body">
            <strong>Итог:</strong> 20 статей = ~30 заявок в месяц. Средний чек услуги $3,000-5,000. 
            Это $90,000-150,000 дополнительной выручки при вложениях $1,500-2,000 в контент.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOStatsSection;
