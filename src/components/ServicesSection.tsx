import { FileText, ClipboardList, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="section-alt py-8 md:py-12" id="services">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Дополнительные услуги для вашей контент-стратегии
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Помимо написания статей, мы помогаем с планированием и подготовкой контента
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Карточка 1: Контент-план */}
          <div className="card-neurotool flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="icon-box-light shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Контент-план</h3>
                <p className="text-lg font-semibold text-primary">От $300 за 20 статей</p>
              </div>
            </div>

            <p className="text-body mb-4">
              Стратегия контента на 1-3 месяца. Анализируем нишу, конкурентов, собираем ключи, формируем темы статей.
            </p>

            <div className="mb-4 flex-grow">
              <h4 className="font-semibold text-foreground mb-3">Что входит:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Анализ конкурентов (Google + AI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Сбор ключей с частотностью</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>20 тем для статей</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Структура H1-H3 каждой темы</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Мета-теги для всех статей</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>График публикаций</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4 pt-4 border-t border-border">
              <div>
                <span className="text-muted-foreground">Формат:</span>
                <p className="font-medium text-foreground">Google Таблица или PDF</p>
              </div>
              <div>
                <span className="text-muted-foreground">Срок:</span>
                <p className="font-medium text-foreground">3-5 дней</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              <strong>Для кого:</strong> Клиники, которые хотят системно развивать блог или планируют большие объёмы контента
            </p>

            <button className="btn-primary w-full mt-auto">
              Заказать контент-план
            </button>
          </div>

          {/* Карточка 2: Технические задания */}
          <div className="card-neurotool flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="icon-box-light shrink-0">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Технические задания</h3>
                <p className="text-lg font-semibold text-primary">От $500 за 20 статей</p>
              </div>
            </div>

            <p className="text-body mb-4">
              Расширенные технические задания на базе контент-плана. Готовые ТЗ можно передать любому копирайтеру или использовать для самостоятельного написания.
            </p>

            <div className="mb-4 flex-grow">
              <h4 className="font-semibold text-foreground mb-3">Что входит в каждое ТЗ:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Главный ключ и LSI-ключи с плотностью</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Подробная структура статьи (H1-H3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Референсы конкурентов (2-3 из топа)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Tone of voice вашей клиники</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Требования к объёму и абзацам</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Примеры формулировок для разделов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>SEO-требования (мета-теги, ссылки)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span>Требования к визуалу</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4 pt-4 border-t border-border">
              <div>
                <span className="text-muted-foreground">Формат:</span>
                <p className="font-medium text-foreground">Google Docs</p>
              </div>
              <div>
                <span className="text-muted-foreground">Срок:</span>
                <p className="font-medium text-foreground">5-7 дней</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              <strong>Для кого:</strong> Клиники с собственной командой контента или те, кто хочет контролировать процесс написания
            </p>

            <button className="btn-primary w-full mt-auto">
              Заказать ТЗ
            </button>
          </div>
        </div>

        {/* CTA блок */}
        <div className="card-neurotool bg-gradient-to-br from-primary/5 to-accent text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-4">
            Не знаете, какие статьи нужны вашей клинике? Закажите контент-план — мы проанализируем нишу и составим стратегию на 3 месяца.
          </p>
          <button className="btn-primary-lg">
            Заказать контент-план ($300)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
