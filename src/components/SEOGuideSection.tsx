const SEOGuideSection = () => {
  return (
    <section id="blog" className="section">
      <div className="container-neurotool">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3">
            📝 Какие статьи приносят пациентов
          </h2>
          <p className="text-large text-muted-foreground">
            4 типа контента для стоматологических клиник
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Content Type 1 */}
          <div className="card-neurotool p-5">
            <div className="text-3xl mb-2">🦷</div>
            <h3 className="text-lg font-bold mb-2">Статьи про услуги</h3>
            <p className="text-sm text-muted-foreground mb-3">
              "Имплантация зубов: виды, этапы, цены" — отвечаем на вопросы пациентов
            </p>
            <div className="bg-accent/20 rounded p-3 text-xs mb-2">
              <strong>Примеры:</strong> "Имплантация зубов цена" (8,900 запросов/мес), "Сколько стоит имплант" (3,200/мес)
            </div>
            <p className="text-xs text-muted-foreground">
              → 10-30 переходов/месяц, 1-3 заявки
            </p>
          </div>

          {/* Content Type 2 */}
          <div className="card-neurotool p-5">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="text-lg font-bold mb-2">Локальные статьи</h3>
            <p className="text-sm text-muted-foreground mb-3">
              "Стоматология в Академическом районе" — привлекаем пациентов из вашего района
            </p>
            <div className="bg-accent/20 rounded p-3 text-xs mb-2">
              <strong>Примеры:</strong> "Стоматология [район]" (1,200/мес), "Детская стоматология [район]" (890/мес)
            </div>
            <p className="text-xs text-muted-foreground">
              → Высокая конверсия (ищут рядом с домом)
            </p>
          </div>

          {/* Content Type 3 */}
          <div className="card-neurotool p-5">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-lg font-bold mb-2">Срочные проблемы</h3>
            <p className="text-sm text-muted-foreground mb-3">
              "Что делать если болит зуб" — привлекаем пациентов с острой болью
            </p>
            <div className="bg-accent/20 rounded p-3 text-xs mb-2">
              <strong>Примеры:</strong> "Болит зуб что делать" (22,000/мес), "Опухла десна чем лечить" (8,100/мес)
            </div>
            <p className="text-xs text-muted-foreground">
              → Большой трафик, средняя конверсия
            </p>
          </div>

          {/* Content Type 4 */}
          <div className="card-neurotool p-5">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-lg font-bold mb-2">Сравнения методов</h3>
            <p className="text-sm text-muted-foreground mb-3">
              "Виниры или люминиры: что выбрать" — помогаем принять решение
            </p>
            <div className="bg-accent/20 rounded p-3 text-xs mb-2">
              <strong>Примеры:</strong> "Что лучше виниры или люминиры" (2,400/мес), "Элайнеры или брекеты" (1,600/мес)
            </div>
            <p className="text-xs text-muted-foreground">
              → Средний трафик, высокая конверсия
            </p>
          </div>
        </div>

        {/* Content Strategy */}
        <div className="card-neurotool bg-primary/5 border-2 border-primary/20 p-6 mb-6">
          <h3 className="text-xl font-bold mb-3">🎯 Оптимальный контент-план на старте</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
            <div>
              <strong className="text-primary">50% — услуги</strong>
              <p className="text-muted-foreground">Имплантация, отбеливание, брекеты (10-15 статей)</p>
            </div>
            <div>
              <strong className="text-primary">30% — локальное SEO</strong>
              <p className="text-muted-foreground">Статьи про ваш район/город (6-9 статей)</p>
            </div>
            <div>
              <strong className="text-primary">20% — срочные проблемы</strong>
              <p className="text-muted-foreground">"Болит зуб", "Что делать если..." (4-6 статей)</p>
            </div>
          </div>
          <p className="text-sm text-center">
            <strong>Частота:</strong> минимум 2-4 статьи/месяц, оптимально 8-10 для быстрого роста
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-body mb-4">
            <strong>Не знаете, с чего начать?</strong> Закажите контент-план — мы проанализируем вашу нишу и составим стратегию.
          </p>
          <button className="btn-cta-glow text-base md:text-lg py-4 px-10 whitespace-nowrap">
            Заказать контент-план
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOGuideSection;
