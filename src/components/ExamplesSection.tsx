import { useState } from "react";
import { X, FileText, CheckCircle, Bot, Search, Eye } from "lucide-react";

const examples = [
  {
    id: 1,
    title: "Имплантация зубов: полный гид 2025",
    words: "2,847",
    uniqueness: "98%",
    aiCitation: "Perplexity, ChatGPT",
    category: "Имплантология",
  },
  {
    id: 2,
    title: "Лечение кариеса без боли",
    words: "2,134",
    uniqueness: "97%",
    aiCitation: "ChatGPT, Google SGE",
    category: "Терапия",
  },
  {
    id: 3,
    title: "Отбеливание зубов: методы",
    words: "1,956",
    uniqueness: "96%",
    aiCitation: "ChatGPT",
    category: "Эстетика",
  },
];

const ExamplesSection = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (id: number) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  const activeExample = examples.find((e) => e.id === activeModal);

  return (
    <section id="examples" className="section section-alt">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Примеры наших статей
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Реальные тексты для стоматологических клиник
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {examples.map((example) => (
            <div
              key={example.id}
              className="card-neurotool cursor-pointer group"
              onClick={() => openModal(example.id)}
            >
              {/* Visual header */}
              <div className="bg-gradient-to-br from-primary/10 to-accent rounded-xl p-6 mb-4 flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>

              <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {example.title}
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span>{example.words} слов</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))]" />
                  <span>{example.uniqueness}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                  <Bot className="w-4 h-4" />
                  <span className="truncate">{example.aiCitation}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm font-medium text-primary">{example.category}</span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <Eye className="w-4 h-4" />
                  Смотреть
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeExample && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-overlay" />
          <div className="modal-content max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="heading-3">{activeExample.title}</h2>
                  <p className="text-sm text-muted-foreground">{activeExample.words} слов • {activeExample.uniqueness} уникальность</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card-flat p-4">
                  <Bot className="w-6 h-6 text-primary mb-2" />
                  <div className="font-medium text-foreground">AI-цитирование</div>
                  <div className="text-sm text-muted-foreground">{activeExample.aiCitation}</div>
                </div>
                <div className="card-flat p-4">
                  <Search className="w-6 h-6 text-primary mb-2" />
                  <div className="font-medium text-foreground">Категория</div>
                  <div className="text-sm text-muted-foreground">{activeExample.category}</div>
                </div>
              </div>

              <div className="placeholder-box mb-6">
                Полный текст статьи доступен после заказа
              </div>

              <button className="btn-primary w-full">
                Заказать похожую статью
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExamplesSection;
