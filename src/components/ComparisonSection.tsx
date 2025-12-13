const ComparisonSection = () => {
  return (
    <section className="section">
      <div className="container-neurotool">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">
            Fiverr, ChatGPT или Neurotool AI — что выбрать?
          </h2>
          <p className="text-large text-muted-foreground">
            Сравнили 3 способа создания контента для стоматологий
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <div className="min-w-[900px]">
            {/* Header */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-6">
              <div></div>
              <div className="card-neurotool text-center p-4">
                <div className="text-xl font-bold mb-1">Fiverr</div>
                <p className="text-sm text-muted-foreground">Фриланс-копирайтеры</p>
              </div>
              <div className="card-neurotool text-center p-4">
                <div className="text-xl font-bold mb-1">ChatGPT</div>
                <p className="text-sm text-muted-foreground">Просто AI</p>
              </div>
              <div className="card-neurotool text-center p-4 bg-primary/5 border-2 border-primary">
                <div className="text-xl font-bold mb-1 text-primary">Neurotool AI</div>
                <p className="text-sm text-primary font-medium">Гибрид: AI + Люди</p>
              </div>
            </div>

            {/* Row 1: Speed */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                ⚡ Скорость
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  5-7 дней на статью
                </span>
                <p className="text-sm text-muted-foreground">Один копирайтер, срывы дедлайнов</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  5-30 минут
                </span>
                <p className="text-sm text-muted-foreground">Но нужна подготовка, правки, оптимизация</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  24 часа на статью
                </span>
                <p className="text-sm text-muted-foreground">Команда + AI, гарантия сроков</p>
              </div>
            </div>

            {/* Row 2: Quality */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                ✨ Качество
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  Непредсказуемо
                </span>
                <p className="text-sm text-muted-foreground">Зависит от копирайтера, не знает вашу нишу глубоко</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Однотипно и сухо
                </span>
                <p className="text-sm text-muted-foreground">Не адаптировано под продукт, риск бана поисковиками</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  Стабильно высокое
                </span>
                <p className="text-sm text-muted-foreground">15 AI-агентов + ручная проверка редакторами</p>
              </div>
            </div>

            {/* Row 3: Price */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                💰 Цена
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  $100-200/статья
                </span>
                <p className="text-sm text-muted-foreground">Дорого при больших объемах</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  $20/месяц подписка
                </span>
                <p className="text-sm text-muted-foreground">Но нужно время на настройку, промты, SEO, GEO</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  $49-79/статья
                </span>
                <p className="text-sm text-muted-foreground">Экономия 50-70% vs Fiverr</p>
              </div>
            </div>

            {/* Row 4: Scale */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                📊 Масштаб
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  5-10 статей/месяц
                </span>
                <p className="text-sm text-muted-foreground">Один человек быстро выгорает</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  Неограниченно
                </span>
                <p className="text-sm text-muted-foreground">Но каждую нужно настраивать, проверять, править</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  До 150 статей/месяц
                </span>
                <p className="text-sm text-muted-foreground">Команда + AI справятся с любым объемом</p>
              </div>
            </div>

            {/* Row 5: Communication */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                💬 Общение
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  Много менеджмента
                </span>
                <p className="text-sm text-muted-foreground">Созвоны, правки, контроль, риск недопонимания</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Общение с ботом
                </span>
                <p className="text-sm text-muted-foreground">Нужно знать, КАК писать промты</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  Живые люди в чате
                </span>
                <p className="text-sm text-muted-foreground">Простой бриф, общение на понятном языке</p>
              </div>
            </div>

            {/* Row 6: SEO/GEO */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                🔍 SEO + GEO
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  Классический SEO
                </span>
                <p className="text-sm text-muted-foreground">Если попросите. GEO не делают</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Нужно знать как
                </span>
                <p className="text-sm text-muted-foreground">Как оптимизировать? Какие ключи? Как под AI?</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  SEO + GEO из коробки
                </span>
                <p className="text-sm text-muted-foreground">Мы сами собираем ключи, оптимизируем под Google и AI</p>
              </div>
            </div>

            {/* Row 7: Research */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                🔬 Исследование ниши
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Вы делаете сами
                </span>
                <p className="text-sm text-muted-foreground">Копирайтер пишет по вашему ТЗ</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Вы делаете сами
                </span>
                <p className="text-sm text-muted-foreground">Нужно собрать данные, конкурентов, ключи</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  Мы делаем за вас
                </span>
                <p className="text-sm text-muted-foreground">Аудит ниши, конкурентов, контент-стратегия</p>
              </div>
            </div>

            {/* Row 8: Languages */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 mb-4">
              <div className="flex items-center font-semibold text-foreground">
                🌍 Языки
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  1-2 языка
                </span>
                <p className="text-sm text-muted-foreground">Нужно искать носителей для каждого языка</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  Любые языки
                </span>
                <p className="text-sm text-muted-foreground">Но качество перевода может быть низким</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  6+ языков
                </span>
                <p className="text-sm text-muted-foreground">Пишем на английском, русском, немецком и др.</p>
              </div>
            </div>

            {/* Row 9: Guarantees */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4">
              <div className="flex items-center font-semibold text-foreground">
                🛡️ Гарантии
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-sm font-semibold mb-2">
                  Холд Fiverr
                </span>
                <p className="text-sm text-muted-foreground">Деньги в холде, но копирайтер может уйти</p>
              </div>
              <div className="card-flat p-4">
                <span className="inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-sm font-semibold mb-2">
                  Никаких
                </span>
                <p className="text-sm text-muted-foreground">Потратили время — результат может не подойти</p>
              </div>
              <div className="card-flat p-4 bg-primary/5 border border-primary/20">
                <span className="inline-block px-3 py-1 rounded-md bg-green-100 text-green-900 text-sm font-semibold mb-2">
                  PayPal + возврат 100%
                </span>
                <p className="text-sm text-muted-foreground">Гарантия качества и возврат за 7 дней</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card-neurotool bg-primary/5 border-2 border-primary text-center p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">
            Neurotool AI = Скорость AI + Качество людей + Цена ниже Fiverr
          </h3>
          <p className="text-body mb-6">
            Простое окно для заказа, живое общение, собственная технология из 15 AI-агентов
          </p>
          <button className="btn-primary-lg">
            Попробовать за $9.99
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
