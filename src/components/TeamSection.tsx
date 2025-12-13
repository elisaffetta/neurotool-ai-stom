import { ExternalLink } from "lucide-react";

const team = [
  {
    name: "Андрей Ананьев",
    role: "Co-founder, руководитель Neurotool AI",
    highlights: [
      "В SEO и маркетинге с 2005 года",
      "3 собственных бизнеса с оборотом более 1 млн. долларов в год",
      "Более $1,000 выручки ежедневно с SEO-трафика",
      "Докладчик конференций: Optimization, BDD, КВОШ",
      "Автор курсов по интернет-маркетингу",
    ],
    links: [
      { label: "Telegram", url: "https://t.me/ananyev_marketing" },
      { label: "YouTube", url: "https://www.youtube.com/@andrey_ananyev/" },
    ],
  },
  {
    name: "Елисавета Наговицына",
    role: "Co-founder, ведущий SEO-GEO специалист BigTraffic",
    highlights: [
      "2 года внедряет ИИ в бизнес-процессы",
      "600+ SEO-статей с 200К+ переходов из поисковых систем",
      "Co-founder ИИ-платформы @neuroscribe (60К пользователей)",
    ],
    links: [
      { label: "Telegram", url: "https://t.me/elisaffettaai" },
    ],
  },
  {
    name: "Илья Миняев",
    role: "Co-founder и SEO GEO специалист",
    highlights: [
      "Данные скоро будут добавлены",
    ],
    links: [],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section">
      <div className="container-neurotool">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">Команда Neurotool AI</h2>
          <p className="text-large max-w-2xl mx-auto">
            Эксперты с многолетним опытом в SEO, маркетинге и AI-технологиях
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="card-neurotool flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>

              <ul className="space-y-2 mb-4 flex-grow">
                {member.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {member.links.length > 0 && (
                <div className="flex gap-3 pt-4 border-t border-border">
                  {member.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
