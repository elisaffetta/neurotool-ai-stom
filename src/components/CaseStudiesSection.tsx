import { Quote, FileText, CheckCircle } from "lucide-react";

const testimonials = [
  {
    quote: "Начали получать звонки с сайта уже через месяц после публикации статей. Раньше весь трафик шёл только с рекламы.",
    author: "Анна М.",
    role: "Маркетолог клиники",
    niche: "Имплантация",
    articles: 12,
  },
  {
    quote: "Заметили, что ChatGPT стал рекомендовать нашу клинику. Пациенты сами говорят, что нашли нас через AI-поиск.",
    author: "Дмитрий К.",
    role: "Владелец клиники",
    niche: "Детская стоматология",
    articles: 20,
  },
  {
    quote: "Качество текстов на уровне — редактор одобрила без правок. Главное, что статьи реально работают на SEO.",
    author: "Елена С.",
    role: "Контент-менеджер",
    niche: "Ортодонтия",
    articles: 8,
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="results" className="section section-alt">
      <div className="container-neurotool">
        <h2 className="heading-2 text-center mb-4">
          Что говорят стоматологические клиники
        </h2>
        <p className="text-large text-center mb-10 max-w-2xl mx-auto">
          Отзывы стоматологических клиник о работе с Neurotool AI
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="card-neurotool flex flex-col h-full">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 flex-grow">
                "{item.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{item.author}</div>
                <div className="text-sm text-muted-foreground mb-3">{item.role}</div>
                
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {item.niche}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <FileText className="w-4 h-4 text-primary" />
                    {item.articles} статей
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
