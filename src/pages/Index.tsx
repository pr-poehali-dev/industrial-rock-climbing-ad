import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Building2",
      title: "Остекление фасадов",
      description: "Монтаж и ремонт остекления на высотных зданиях любой сложности"
    },
    {
      icon: "Paintbrush",
      title: "Покраска фасадов",
      description: "Профессиональная покраска и реставрация фасадов высотных объектов"
    },
    {
      icon: "Droplets",
      title: "Мойка фасадов",
      description: "Очистка стеклянных и каменных фасадов на любой высоте"
    },
    {
      icon: "Wrench",
      title: "Ремонт кровли",
      description: "Монтаж и ремонт кровельных покрытий промышленным способом"
    },
    {
      icon: "Zap",
      title: "Монтаж рекламы",
      description: "Установка рекламных конструкций и баннеров на высоте"
    },
    {
      icon: "Shield",
      title: "Обслуживание зданий",
      description: "Комплексное техническое обслуживание высотных сооружений"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Более 500 выполненных проектов по всей России"
    },
    {
      icon: "Users",
      title: "Команда профессионалов",
      description: "Сертифицированные альпинисты с допусками к высотным работам"
    },
    {
      icon: "ShieldCheck",
      title: "100% безопасность",
      description: "Полное страхование работников и соблюдение техники безопасности"
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Выполняем работы точно в срок по договору"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/ddc365ce-0a59-42e7-ac57-7a97e8351a91/files/05459ed5-7d9b-43b2-9508-89b84d284be6.jpg",
      title: "Остекление бизнес-центра Москва-Сити",
      category: "Остекление"
    },
    {
      image: "https://cdn.poehali.dev/projects/ddc365ce-0a59-42e7-ac57-7a97e8351a91/files/3e9d5c67-a410-49bd-a387-63453f5d50bc.jpg",
      title: "Монтаж фасадных панелей офисного комплекса",
      category: "Монтаж"
    },
    {
      image: "https://cdn.poehali.dev/projects/ddc365ce-0a59-42e7-ac57-7a97e8351a91/files/6ce160ca-e0ab-4739-a097-72499faf4986.jpg",
      title: "Мойка фасада торгового центра",
      category: "Мойка"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ВысотПро</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#main" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">+7 (999) 464-60-19</Button>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl text-primary leading-tight text-left font-light">
                Профессиональные высотные работы
              </h1>
              <p className="text-xl text-muted-foreground">
                Безопасные и качественные услуги промышленных альпинистов для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ddc365ce-0a59-42e7-ac57-7a97e8351a91/files/05459ed5-7d9b-43b2-9508-89b84d284be6.jpg"
                alt="Промышленный альпинист на высоте"
                className="rounded-lg shadow-2xl object-contain"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Выполненных проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {advantages.map((adv, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-center">
                  <div className="bg-secondary p-4 rounded-full">
                    <Icon name={adv.icon} size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{adv.title}</h3>
                <p className="text-white/80">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">О компании ВысотПро</h2>
              <p className="text-lg text-muted-foreground">
                Мы — ведущая компания в сфере промышленного альпинизма с 15-летним опытом работы на российском рынке.
              </p>
              <p className="text-muted-foreground">
                Наша команда состоит из высококвалифицированных специалистов, прошедших обязательную сертификацию и имеющих все необходимые допуски для выполнения работ на высоте. Мы используем только проверенное оборудование ведущих мировых производителей и строго соблюдаем все требования техники безопасности.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Специалистов</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Безопасность</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
                <Icon name="Award" size={40} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Сертификаты и лицензии</h3>
                <p className="text-muted-foreground">
                  Все наши специалисты имеют действующие сертификаты промышленного альпинизма и допуски к работе на высоте. Компания застрахована по полису гражданской ответственности.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
                <Icon name="ShieldCheck" size={40} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Гарантии качества</h3>
                <p className="text-muted-foreground">
                  Предоставляем официальную гарантию на все виды выполненных работ. Работаем строго по договору с соблюдением всех сроков и требований заказчика.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр высотных работ для коммерческих и промышленных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фото и видео с реальных объектов, где мы выполнили высотные работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <Button variant="ghost" className="p-0 text-secondary hover:text-secondary/80">
                    Смотреть проект
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть все проекты
              <Icon name="ExternalLink" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут для уточнения деталей проекта
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 464-60-19</div>
                    <div className="text-muted-foreground"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">veniaminsab11@mail.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Новосибирск, ул. Твардовского, д. 22/6</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    <div className="text-muted-foreground">Сб-Вс: По договоренности</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш проект..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Mountain" size={32} />
                <span className="text-2xl font-bold">ВысотПро</span>
              </div>
              <p className="text-white/80">
                Профессиональные высотные работы с гарантией качества и безопасности
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Остекление фасадов</li>
                <li>Покраска фасадов</li>
                <li>Мойка фасадов</li>
                <li>Ремонт кровли</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@vysotpro.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ВысотПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;