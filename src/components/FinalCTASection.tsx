import { Clock, Search, Award, RefreshCw, ArrowRight } from "lucide-react";

const guarantees = [
  { icon: Clock, text: "24 часа" },
  { icon: Search, text: "SEO + GEO" },
  { icon: Award, text: "95%+ уник" },
  { icon: RefreshCw, text: "Возврат $" },
];

const FinalCTASection = () => {
  return (
    <section className="section bg-gradient-to-br from-primary/10 to-accent">
      <div className="container-neurotool">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">
            Начните привлекать пациентов уже завтра
          </h2>
          
          <p className="text-large mb-8">
            Первая статья за <strong className="text-primary">$9.99</strong> — минимальный риск. 
            96% клиентов заказывают больше после теста.
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
                <g.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{g.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="btn-primary-lg inline-flex items-center gap-2 mb-6">
            Заказать первую статью за $9.99
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-sm text-muted-foreground">
            🔒 PayPal (гарантия возврата) • 💰 100% возврат за 7 дней • ⚡ Готово за 24ч
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
