import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Что такое GEO-оптимизация?",
    answer: "Generative Engine Optimization — оптимизация под нейроблоки: Perplexity, ChatGPT, Google SGE. До 40% запросов идет через нейроблоки. Мы структурируем контент для цитирования в ответах нейроблоков.",
  },
  {
    question: "Пишете только про имплантацию?",
    answer: "Нет, любые направления: терапия, ортодонтия, детская стоматология, эстетика, хирургия, пародонтология. Дайте бриф с описанием услуг.",
  },
  {
    question: "Как понимаете медицинскую специфику?",
    answer: "15 AI-моделей обучены на медицинской литературе + обязательный fact-checking редакторами. При необходимости привлекаем консультантов-стоматологов.",
  },
  {
    question: "Статьи уникальные?",
    answer: "Гарантия 95%+. Проверяем через Advego и Content Watch. Не копируем конкурентов — создаем с нуля под ваш бриф.",
  },
  {
    question: "Google банит AI-тексты?",
    answer: "Миф. Google разрешил AI-контент в марте 2023. Мы проверяем AI-детекторами — результат «написано человеком» в 90%+ случаев.",
  },
  {
    question: "Сколько заявок принесет статья?",
    answer: "Статья в топ-10 дает 10-30 переходов/мес. При конверсии 3-8% это 1-2 заявки. 20 статей = ~30 заявок/мес.",
  },
  {
    question: "Можно вносить правки?",
    answer: "Да, 2-3 раунда бесплатно. Отправляем в Google Docs, вы комментируете, мы правим за 24 часа.",
  },
  {
    question: "Что если не понравится?",
    answer: "100% возврат за 7 дней через PayPal. Без бюрократии — пишете «вернуть деньги», возвращаем в 1 клик. PayPal держит деньги в холде до вашего подтверждения качества.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container-neurotool">
        <div className="flex items-center justify-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-primary" />
          <h2 className="heading-2">Частые вопросы</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`card-flat overflow-hidden transition-all ${activeIndex === index ? "ring-2 ring-primary" : ""}`}
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4 text-sm">{faq.question}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform ${activeIndex === index ? "rotate-45" : ""}`}>
                  <Plus className="w-4 h-4 text-primary" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 pb-4 px-4" : "max-h-0"}`}>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
