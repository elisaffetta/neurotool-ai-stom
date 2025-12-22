import { FileText, CreditCard, Bot, Users, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="section section-alt">
      <div id="technology"></div>
      <div className="container-neurotool">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">
            Как создаем SEO + GEO тексты для стоматологий
          </h2>
          <p className="text-large text-muted-foreground">
            Живые редакторы в штате. Гибридный подход: 15 AI-агентов + живые редакторы
          </p>
        </div>

        {/* Technology Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🚀 Наша собственная разработка</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-neurotool text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <h4 className="font-semibold mb-3">AI-агентов</h4>
              <p className="text-sm text-muted-foreground">
                Анализ, написание, проверка фактов, SEO-оптимизация — всё автоматически
              </p>
            </div>
            
            <div className="card-neurotool text-center p-6">
              <div className="text-4xl mb-2">👥</div>
              <h4 className="font-semibold mb-3">Живые редакторы</h4>
              <p className="text-sm text-muted-foreground">
                Проверяют факты, правят стиль, адаптируют под вашу клинику
              </p>
            </div>
            
            <div className="card-neurotool text-center p-6">
              <div className="text-4xl mb-2">🤖</div>
              <h4 className="font-semibold mb-3">N8N автоматизация</h4>
              <p className="text-sm text-muted-foreground">
                Автоматический workflow от брифа до готовой статьи
              </p>
            </div>
            
            <div className="card-neurotool text-center p-6">
              <div className="text-4xl mb-2">💬</div>
              <h4 className="font-semibold mb-3">Одно окно общения</h4>
              <p className="text-sm text-muted-foreground">
                Общаетесь с людьми, а не с ботами. Никаких промптов
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="card-neurotool p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Простая форма заказа</h3>
                <p className="text-body">
                  Можете прислать как подробное ТЗ, так и просто ключевое слово и ссылку на сайт. Наши AI-агенты сами изучат вашу нишу, конкурентов, соберут ключевые слова.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-neurotool p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Одно окно общения с человеком</h3>
                <p className="text-body">
                  У каждого своя ситуация. Мы уточняем и дополняем всю нужную информацию при необходимости для создания хорошей статьи для вашего конкретного случая.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Highlighted */}
          <div className="card-neurotool p-6 bg-primary/5 border-2 border-primary">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">15 AI-агентов начинают работу</h3>
                <p className="text-body mb-3"><strong>Что происходит автоматически:</strong></p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Агент 1-3:</strong> Анализируют вашу клинику (услуги, цены, УТП, целевую аудиторию)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Агент 4-6:</strong> Изучают конкурентов (кто в топ-10 Google, что пишут, какие ключи используют)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Агент 7-9:</strong> Проверяют нейроблоки (что показывает Perplexity и ChatGPT по вашим запросам)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Агент 10-12:</strong> Собирают ключевые слова и формируют структуру статьи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Агент 13-15:</strong> Пишут черновик, оптимизируют под SEO и GEO, добавляют мета-теги</span>
                  </li>
                </ul>
                <p className="text-body mt-3">
                  <strong>Всё это — автоматически через N8N.</strong> Вам не нужно разбираться в технологиях.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="card-neurotool p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Живые редакторы проверяют вручную</h3>
                <p className="text-body mb-3"><strong>Что делают редакторы:</strong></p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Проверяют факты (цены, методики лечения, термины)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Адаптируют текст под вашу клинику (добавляют УТП, акции, tone of voice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Убирают "водность" и типичные AI-фразы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Проверяют уникальность (95%+) и AI-детекцию ("написано человеком")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Тестируют цитируемость в Perplexity и ChatGPT</span>
                  </li>
                </ul>
                <p className="text-body mt-3">
                  <strong>Результат:</strong> Статья выглядит как написанная профессиональным копирайтером, но создана за 24 часа.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="card-neurotool p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Вы получаете статью и вносите правки</h3>
                <p className="text-body mb-2">
                  <strong>Как это работает:</strong> Загружаем готовую статью в Google Docs. Вы оставляете комментарии прямо в тексте — мы исправляем за 24 часа.
                </p>
                <p className="text-body">
                  <strong>Включено бесплатно:</strong> До 2-3 раундов правок. Доводим текст до идеала.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="card-neurotool p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Масштабируете контент</h3>
                <p className="text-body mb-2">
                  Понравилось? Заказывайте пакеты 20 статей. При необходимости мы прописываем контент-стратегию на квартал.
                </p>
                <p className="text-body">
                  <strong>Пропускная способность:</strong> До 150 статей в месяц для крупных клиник и сетей.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 card-neurotool bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Почему это работает?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Скорость AI</h4>
              <p className="text-sm text-muted-foreground">
                15 агентов делают за 1 час то, на что у копирайтера уйдёт 2 дня
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <h4 className="font-semibold mb-2">Качество людей</h4>
              <p className="text-sm text-muted-foreground">
                Редакторы проверяют факты, адаптируют под вашу нишу, убирают AI-штампы
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h4 className="font-semibold mb-2">Цена ниже рынка</h4>
              <p className="text-sm text-muted-foreground">
                Автоматизация снижает себестоимость — экономия 50-70% vs Fiverr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
