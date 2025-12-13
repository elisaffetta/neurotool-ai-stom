import { Zap, Clock, DollarSign, TrendingUp, Eye, Shield } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Google + AI оптимизация",
    text: "Статьи работают в классическом поиске И цитируются Perplexity, ChatGPT",
  },
  {
    icon: Clock,
    title: "24 часа на первую статью",
    text: "Пакет 20 статей за 2 недели. Fiverr копирайтер — 5-7 дней на одну",
  },
  {
    icon: DollarSign,
    title: "Цена в 2-3 раза ниже",
    text: "От $49 за статью. Экономия до $7,500 на пакете из 50 статей",
  },
  {
    icon: TrendingUp,
    title: "Масштаб без ограничений",
    text: "50 статей в месяц для сети клиник? AI + команда редакторов справятся",
  },
  {
    icon: Eye,
    title: "Прозрачная технология",
    text: "AI + human fact-checking. Google разрешил AI-контент в 2023 году",
  },
  {
    icon: Shield,
    title: "Гарантия сроков",
    text: "Никаких срывов дедлайнов. Компенсация за задержку по договору",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="section">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-10">
          Почему выбирают Neurotool AI
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((advantage, index) => (
            <div key={index} className="card-neurotool flex gap-4">
              <div className="icon-box shrink-0">
                <advantage.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
