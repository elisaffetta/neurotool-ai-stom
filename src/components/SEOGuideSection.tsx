import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SEOGuideSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const contentTypes = [
    {
      emoji: '🦷',
      title: 'Статьи про услуги',
      description: '"Имплантация зубов: виды, этапы, цены" — отвечаем на вопросы пациентов',
      examples: '"Имплантация зубов цена" (8,900 запросов/мес), "Сколько стоит имплант" (3,200/мес)',
      result: '→ 10-30 переходов/месяц, 1-3 заявки'
    },
    {
      emoji: '📍',
      title: 'Локальные статьи',
      description: '"Стоматология в Академическом районе" — привлекаем пациентов из вашего района',
      examples: '"Стоматология [район]" (1,200/мес), "Детская стоматология [район]" (890/мес)',
      result: '→ Высокая конверсия (ищут рядом с домом)'
    },
    {
      emoji: '⚡',
      title: 'Срочные проблемы',
      description: '"Что делать если болит зуб" — привлекаем пациентов с острой болью',
      examples: '"Болит зуб что делать" (22,000/мес), "Опухла десна чем лечить" (8,100/мес)',
      result: '→ Большой трафик, средняя конверсия'
    },
    {
      emoji: '💰',
      title: 'Сравнения методов',
      description: '"Виниры или люминиры: что выбрать" — помогаем принять решение',
      examples: '"Что лучше виниры или люминиры" (2,400/мес), "Элайнеры или брекеты" (1,600/мес)',
      result: '→ Средний трафик, высокая конверсия'
    }
  ];

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / contentTypes.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : contentTypes.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < contentTypes.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  return (
    <section id="blog" className="section">
      <div className="container-neurotool">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3">
            📝 Какие статьи приносят пациентов
          </h2>
          <p className="text-large text-muted-foreground">
            4 типа контента для стоматологических клиник
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Предыдущая карточка"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Следующая карточка"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="card-neurotool p-5 flex-shrink-0 snap-start w-[85%] md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
              >
                <div className="text-3xl mb-2">{content.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{content.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {content.description}
                </p>
                <div className="bg-accent/20 rounded p-3 text-xs mb-2">
                  <strong>Примеры:</strong> {content.examples}
                </div>
                <p className="text-xs text-muted-foreground">
                  {content.result}
                </p>
              </div>
            ))}
          </div>

          {/* Dots Indicator - Mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {contentTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к карточке ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Strategy */}
        <div className="card-neurotool bg-primary/5 border-2 border-primary/20 p-5 mb-6">
          <h3 className="text-lg font-bold mb-3 text-center">🎯 Оптимальный контент-план на старте</h3>
          
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 border-l-4 border-primary">
              <div className="text-xl font-bold text-primary mb-1">50%</div>
              <h4 className="font-bold text-sm mb-1">Услуги</h4>
              <p className="text-xs text-muted-foreground">Имплантация, отбеливание, брекеты</p>
              <p className="text-xs text-muted-foreground mt-0.5">(10-15 статей)</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border-l-4 border-primary">
              <div className="text-xl font-bold text-primary mb-1">30%</div>
              <h4 className="font-bold text-sm mb-1">Локальное SEO</h4>
              <p className="text-xs text-muted-foreground">Статьи про ваш район/город</p>
              <p className="text-xs text-muted-foreground mt-0.5">(6-9 статей)</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border-l-4 border-primary">
              <div className="text-xl font-bold text-primary mb-1">20%</div>
              <h4 className="font-bold text-sm mb-1">Срочные проблемы</h4>
              <p className="text-xs text-muted-foreground">"Болит зуб", "Что делать если..."</p>
              <p className="text-xs text-muted-foreground mt-0.5">(4-6 статей)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs">
              <strong className="text-primary">Частота публикаций:</strong> минимум 2-4 статьи/месяц, оптимально 8-10 для быстрого роста
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-body mb-4">
            <strong>Не знаете, с чего начать?</strong> Закажите контент-план — мы проанализируем вашу нишу и составим стратегию.
          </p>
          <button className="btn-cta-glow text-base md:text-lg py-4 px-10 whitespace-nowrap">
            Заказать контент-план
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOGuideSection;
