import { FileText, Image, PenTool, Search, Target, Tag, Megaphone, BarChart3, RefreshCw, Shield } from "lucide-react";

const includedItems = [
  { icon: FileText, text: "2000-3000 слов контента" },
  { icon: Search, text: "SEO + GEO оптимизация" },
  { icon: Tag, text: "Ключевые слова ниши" },
  { icon: Target, text: "Структура для AI-цитат" },
  { icon: BarChart3, text: "Мета-теги для сниппетов" },
  { icon: Megaphone, text: "Призывы к действию" },
  { icon: Image, text: "Инфографика и обложка" },
  { icon: PenTool, text: "2-3 раунда правок" },
  { icon: RefreshCw, text: "Правки за 24 часа" },
  { icon: Shield, text: "Гарантия возврата" },
];

const IncludedSection = () => {
  return (
    <section className="section">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Что входит в SEO + GEO текст<br />для стоматологии
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Полный пакет услуг для максимального эффекта от каждой статьи
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {includedItems.map((item, index) => (
            <div key={index} className="card-flat text-center p-4 hover:bg-accent transition-colors">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="btn-cta-glow text-base md:text-lg py-4 px-10 whitespace-nowrap">
            Заказать статью за $9.99
          </button>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
