import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Andrey A.",
    role: "CEO",
    photo: "/team/andrey.jpg",
    links: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Elisa N.",
    role: "Prompt-engineer",
    photo: "/team/elisa.jpg",
    links: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Ilya M.",
    role: "Content director",
    photo: "/team/ilya.jpg",
    links: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Nastya S.",
    role: "Client Service",
    photo: "/team/nastya.jpg",
    links: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
    ],
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

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card-neurotool text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">${member.name.charAt(0)}</div>`;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{member.role}</p>

              <div className="flex gap-3 justify-center">
                {member.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
