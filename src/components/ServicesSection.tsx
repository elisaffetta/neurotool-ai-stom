import { Calendar, FileCheck2 } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="section-alt py-8 md:py-12" id="services">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Дополнительные услуги
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Помимо написания статей, мы помогаем с планированием контента
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Карточка 1: Контент-план */}
          <div className="card-neurotool p-8 text-center flex flex-col h-full border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Контент-план</h3>
            <div className="text-4xl font-bold text-primary mb-2">$300</div>
            <p className="text-sm text-muted-foreground mb-6">за 20 статей</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
              Стратегия контента на 1–3 месяца. Анализируем нишу, конкурентов, собираем ключи, формируем темы статей с подробной структурой.
            </p>
            <button className="btn-cta-glow w-full mt-auto py-3 px-6 text-base whitespace-nowrap">
              Заказать контент-план
            </button>
          </div>

          {/* Карточка 2: Технические задания */}
          <div className="card-neurotool p-8 text-center flex flex-col h-full border-2 border-transparent hover:border-primary/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-5 shadow-lg">
              <FileCheck2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Технические задания</h3>
            <div className="text-4xl font-bold text-primary mb-2">$500</div>
            <p className="text-sm text-muted-foreground mb-6">за 20 статей</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
              Детальный документ для каждой статьи: ключевые слова, структура, заголовки, подзаголовки и рекомендации. Готов для передачи копирайтеру.
            </p>
            <button className="btn-cta-glow w-full mt-auto py-3 px-6 text-base whitespace-nowrap">
              Заказать ТЗ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
