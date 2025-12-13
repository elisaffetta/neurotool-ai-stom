import { XCircle, Bot, FileText, DollarSign, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: XCircle,
    title: "Сайт не в топе",
    text: "Конкуренты перехватывают заявки по вашим услугам",
  },
  {
    icon: Bot,
    title: "AI вас не видит",
    text: "Perplexity и ChatGPT показывают конкурентов",
  },
  {
    icon: FileText,
    title: "Слабый контент",
    text: "Тексты без SEO-структуры и ключевых слов",
  },
  {
    icon: DollarSign,
    title: "Дорогие авторы",
    text: "$150-300 за статью, долгие сроки, риски",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section section-alt">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Почему клиники теряют пациентов онлайн
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Без качественного контента органический трафик стоит на месте
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {painPoints.map((point, index) => (
            <div key={index} className="card-neurotool text-center border-t-4 border-t-destructive p-5">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>
        
        <div className="card-neurotool bg-destructive/5 border border-destructive/20 flex items-center gap-4 p-5">
          <TrendingDown className="w-10 h-10 text-destructive shrink-0" />
          <p className="text-body">
            <strong className="text-destructive">Итог:</strong>{" "}
            Бюджет на рекламу растет, конкуренты забирают вашу долю рынка, 
            а органический трафик из Google и AI-поиска стоит на нуле.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
