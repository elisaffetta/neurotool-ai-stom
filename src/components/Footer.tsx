import { Bot, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-neurotool">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Раздел 1: О компании */}
          <div>
            <h4 className="font-semibold text-background mb-4">О компании</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">О нас</a></li>
              <li><a href="#team" className="hover:text-background transition-colors">Команда</a></li>
              <li><a href="#technology" className="hover:text-background transition-colors">Наша технология</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Раздел 2: Услуги */}
          <div>
            <h4 className="font-semibold text-background mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#pricing" className="hover:text-background transition-colors">SEO + GEO тексты</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Контент-план</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Технические задания</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">Решения для ниш</a></li>
            </ul>
          </div>

          {/* Раздел 3: Информация */}
          <div>
            <h4 className="font-semibold text-background mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#pricing" className="hover:text-background transition-colors">Тарифы</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">Частые вопросы</a></li>
              <li><a href="#contacts" className="hover:text-background transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Раздел 4: Юридическое */}
          <div>
            <h4 className="font-semibold text-background mb-4">Юридическое</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#privacy" className="hover:text-background transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#terms" className="hover:text-background transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#refund" className="hover:text-background transition-colors">Возврат средств</a></li>
              <li><a href="#offer" className="hover:text-background transition-colors">Договор оферты</a></li>
            </ul>
          </div>

          {/* Раздел 5: Контакты */}
          <div>
            <h4 className="font-semibold text-background mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@neurotool.ai" className="hover:text-background transition-colors">hello@neurotool.ai</a>
              </li>
              <li>
                <a href="https://t.me/neurotool_support" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Telegram: @neurotool_support</a>
              </li>
              <li className="text-background/50 mt-3">
                Время работы:<br />Пн-Пт 10:00-19:00 (UTC+3)
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель и копирайт */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Neurotool AI</span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-background/70">
              © 2025 Neurotool AI. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;