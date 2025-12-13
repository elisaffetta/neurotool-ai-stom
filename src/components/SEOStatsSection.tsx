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
            <div className="text-4xl font-bold text-primary mb-2">68%</div>
            <h3 className="font-semibold mb-2">Пациенты ищут стоматолога в Google</h3>
            <p className="text-sm text-muted-foreground">
              Если вашей клиники нет в топ-10 по запросам "имплантация зубов" — эти пациенты идут к конкурентам
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">42%</div>
            <h3 className="font-semibold mb-2">Ищут через ChatGPT и Perplexity</h3>
            <p className="text-sm text-muted-foreground">
              Почти половина запросов идёт через AI-поисковики. Без специальной оптимизации вас там не найдут
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">$30-50</div>
            <h3 className="font-semibold mb-2">Стоит 1 клик по рекламе</h3>
            <p className="text-sm text-muted-foreground">
              Контекстная реклама в стоматологии стоит дорого. SEO-статьи работают годами и окупаются в 5-8 раз
            </p>
          </div>

          <div className="card-neurotool p-5">
            <div className="text-4xl font-bold text-primary mb-2">2-4</div>
            <h3 className="font-semibold mb-2">Заявки в месяц с одной статьи</h3>
            <p className="text-sm text-muted-foreground">
              Статья в топ-10 Google приносит 10-30 переходов. При конверсии 5-8% это 2-4 заявки на услугу
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
