const SEOTrendsSection = () => {
  return (
    <section className="section section-alt">
      <div className="container-neurotool">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3">
            📈 Как изменился поиск пациентов
          </h2>
          <p className="text-large text-muted-foreground">
            Что работает сейчас и что перестало работать
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Rising Trends */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-600 mb-4">✅ Что работает</h3>
            
            <div className="card-neurotool p-4 border-l-4 border-l-green-500">
              <h4 className="font-bold mb-1">Пациенты ищут через ChatGPT</h4>
              <p className="text-sm text-muted-foreground">
                Почти половина запросов идёт через AI-поисковики (ChatGPT, Perplexity). Если вас там нет — теряете пациентов.
              </p>
            </div>

            <div className="card-neurotool p-4 border-l-4 border-l-green-500">
              <h4 className="font-bold mb-1">Локальный поиск растёт</h4>
              <p className="text-sm text-muted-foreground">
                Запросы "стоматология рядом со мной" выросли в 3 раза. Google показывает клиники из вашего района в первую очередь.
              </p>
            </div>

            <div className="card-neurotool p-4 border-l-4 border-l-green-500">
              <h4 className="font-bold mb-1">Контент выгоднее рекламы</h4>
              <p className="text-sm text-muted-foreground">
                Клик по рекламе стоит $30-50. Статьи работают годами и окупаются в 5-8 раз.
              </p>
            </div>
          </div>

          {/* Declining Trends */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-destructive mb-4">❌ Что не работает</h3>
            
            <div className="card-neurotool p-4 border-l-4 border-l-destructive">
              <h4 className="font-bold mb-1">Короткие статьи</h4>
              <p className="text-sm text-muted-foreground">
                Google не показывает тексты на 500-800 слов. Нужны подробные статьи от 2000 слов с фактами и примерами.
              </p>
            </div>

            <div className="card-neurotool p-4 border-l-4 border-l-destructive">
              <h4 className="font-bold mb-1">Тексты от ChatGPT без проверки</h4>
              <p className="text-sm text-muted-foreground">
                Google распознаёт AI-тексты и не ранжирует их. Нужна обязательная редактура людьми.
              </p>
            </div>

            <div className="card-neurotool p-4 border-l-4 border-l-destructive">
              <h4 className="font-bold mb-1">Универсальные шаблоны</h4>
              <p className="text-sm text-muted-foreground">
                Тексты "для стоматологии вообще" не работают. Google ищет вашу специфику: город, услуги, цены.
              </p>
            </div>
          </div>
        </div>

        <div className="card-neurotool bg-primary/5 border-2 border-primary text-center p-6">
          <p className="text-body font-semibold">
            Neurotool AI учитывает все тренды: длинные статьи (2000+ слов), проверка редакторами, адаптация под вашу клинику и город
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTrendsSection;
