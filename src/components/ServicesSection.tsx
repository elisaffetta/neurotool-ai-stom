import { FileText, ClipboardList } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Карточка 1: Контент-план */}
          <div className="card-neurotool p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Контент-план</h3>
            <div className="text-3xl font-bold text-primary mb-3">$300</div>
            <p className="text-sm text-muted-foreground mb-4">за 20 статей</p>
            <p className="text-body mb-6">
              Стратегия контента на 1-3 месяца. Анализируем нишу, конкурентов, собираем ключи, формируем темы статей с подробной структурой.
            </p>
            <button className="btn-primary w-full">
              Заказать контент-план
            </button>
          </div>

          {/* Карточка 2: Технические задания */}
          <div className="card-neurotool p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Технические задания</h3>
            <div className="text-3xl font-bold text-primary mb-3">$500</div>
            <p className="text-sm text-muted-foreground mb-4">за 20 статей</p>
            <p className="text-body mb-6">
              Расширенные ТЗ на базе контент-плана. Готовые задания можно передать любому копирайтеру.
            </p>
            <button className="btn-primary w-full">
              Заказать ТЗ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
