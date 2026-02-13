import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, FileText, Heart, MessageCircle, Phone, Star, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-gsalute.png" alt="GSaluteCare Logo" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#planos" className="text-foreground hover:text-primary transition">Planos</a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition">Benefícios</a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition">Depoimentos</a>
            <a href="#faq" className="text-foreground hover:text-primary transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              ASSINAR AGORA
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
                A Melhor Telemedicina do Brasil
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Consultas ilimitadas 24h com médicos especialistas. Cuidado humanizado + tecnologia integrada para sua saúde.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm">15 min atendimento</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm">Sem fila de espera</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="text-sm">Receita Digital</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                  ASSINAR AGORA
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Fale com Especialista
                </Button>
              </div>

              <p className="text-sm text-blue-200 mt-6">
                ✓ Ativação em até 24h após confirmação do pagamento
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/59ghWA9KFmQHifUmrUwHhY/sandbox/QBQkVc6d7HYRrmebiX2Ek2-img-1_1770925941000_na1fn_aGVyby10ZWxlbWVkaWNpbmE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNTlnaFdBOUtGbVFIaWZVbXJVd0hoWS9zYW5kYm94L1FCUWtWYzZkN0hZUnJtZWJpWDJFazItaW1nLTFfMTc3MDkyNTk0MTAwMF9uYTFmbl9hR1Z5YnkxMFpXeGxiV1ZrYVdOcGJtRS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Tb6sEoVpKRrKZNa4-67vnGMVAKy3XqotZ92DoGbzKg2WDCm9MoPiCM~G2UbCt9AJ2HkT6KgwT899ajSl7vQozxvHlpc5XTvO8swzWmgwc3qE3iqvyaUTYybK3LEfNNF5cwl4mJE5lCeVJVeZQHZYA83Q0vlFKz~t3QPor3YkBovseV1vC-sYU8sZh5K4r0at2k6rckgucCeB5jC8vhKkxXS6aMkQ71vxtkFVAfyibc3HFMxULUGuq3DofgZoeBOIK7p9dAt66bvZf3uD1A-FcmeWA1iE1JMxCOigRSuaSd0WKLpJOBemFrZekM-tu6~PKbQvKyDKGXBoD~JXXdMQoA__"
                alt="Profissional de saúde"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
              Escolha o Seu Plano
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ativação em até 24h. Consultas ilimitadas 24h com médicos especialistas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Individual */}
            <Card className="border-2 border-border hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Plano Individual</h3>
                <p className="text-muted-foreground mb-6">Perfeito para quem quer cuidar da saúde com praticidade</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">R$ 19,90</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-8">
                  ASSINAR
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Consultas ilimitadas 24h</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Clínico Geral, Pediatra, Psicólogo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Receita médica online</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Descontos em farmácias e exames</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Plano Diabetes */}
            <Card className="border-2 border-accent shadow-xl relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  MAIS POPULAR
                </span>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-primary mb-2">Plano Diabetes</h3>
                <p className="text-muted-foreground mb-6">Acompanhamento especializado e contínuo</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">R$ 24,99</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-8">
                  ASSINAR
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Tudo do Plano Individual</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Acompanhamento especializado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Monitoramento contínuo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Relatórios personalizados</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Plano Familiar */}
            <Card className="border-2 border-border hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Plano Familiar</h3>
                <p className="text-muted-foreground mb-6">Economize e cuide de quem você ama</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">R$ 49,90</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Casal + 2 filhos menores de 18 anos</p>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-8">
                  ASSINAR
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Cobertura para 4 pessoas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Consultas ilimitadas 24h</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Todos os benefícios inclusos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Melhor custo-benefício</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
              Por Que Escolher GSaluteCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inovação, cuidado humanizado e tecnologia integrada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Inovação e Inteligência</h3>
                <p className="text-muted-foreground">
                  Soluções baseadas em tecnologia, análise de dados e automação inteligente para mais eficiência.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Cuidado Humanizado</h3>
                <p className="text-muted-foreground">
                  Acompanhamento contínuo com foco na escuta ativa, empatia e planos personalizados.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Gestão Integrada</h3>
                <p className="text-muted-foreground">
                  Plataforma única que conecta pacientes, médicos e empresas para uma saúde integrada.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Star className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Parcerias e Impacto</h3>
                <p className="text-muted-foreground">
                  Atuação colaborativa com operadoras e empresas para levar saúde de qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como GSaluteCare transformou a vida de nossos pacientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-accent">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "Com a GSaluteCare, finalmente consegui organizar meu tratamento de diabetes. A equipe é atenciosa e o acompanhamento digital me trouxe segurança e controle. Me sinto cuidada de verdade."
              </p>
              <p className="font-semibold text-primary">Ana L.</p>
              <p className="text-sm text-muted-foreground">Paciente - Diabetes</p>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "Sempre tive dificuldade em manter a rotina de saúde, mas com o suporte da GSaluteCare ficou muito mais fácil. Recebo lembretes, relatórios e o contato é rápido."
              </p>
              <p className="font-semibold text-primary">João M.</p>
              <p className="text-sm text-muted-foreground">Paciente - Acompanhamento Geral</p>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "O cuidado da GSaluteCare vai além do digital. Eles realmente acompanham nossa evolução e ajustam o tratamento conforme a necessidade. É um serviço humano e tecnológico."
              </p>
              <p className="font-semibold text-primary">Luciana R.</p>
              <p className="text-sm text-muted-foreground">Paciente - Plano Familiar</p>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "O atendimento é impecável! Desde o primeiro contato, senti que estava sendo ouvida e orientada com cuidado. O aplicativo e os profissionais tornam tudo simples e eficaz."
              </p>
              <p className="font-semibold text-primary">Patrícia V.</p>
              <p className="text-sm text-muted-foreground">Paciente - Individual</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre telemedicina
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "1",
                q: "O que é a GSaluteCare?",
                a: "GSaluteCare é um serviço de telemedicina que oferece consultas ilimitadas 24h com médicos especialistas, acompanhamento personalizado e integração com parceiros de farmácias e exames laboratoriais."
              },
              {
                id: "2",
                q: "Como funcionam os planos da GSaluteCare?",
                a: "Oferecemos três planos: Individual (R$ 19,90/mês), Diabetes (R$ 24,99/mês) com acompanhamento especializado, e Familiar (R$ 49,90/mês) para casal + 2 filhos. Todos incluem consultas ilimitadas 24h."
              },
              {
                id: "3",
                q: "Preciso ter um diagnóstico para contratar um plano?",
                a: "Não! Você pode contratar qualquer plano mesmo sem diagnóstico prévio. Nossos médicos podem ajudá-lo com avaliações iniciais e encaminhamentos quando necessário."
              },
              {
                id: "4",
                q: "O acompanhamento é feito totalmente online?",
                a: "Sim! Todas as consultas são realizadas por telemedicina através de nossa plataforma digital. Você acessa de qualquer lugar, a qualquer hora, 24 horas por dia."
              },
              {
                id: "5",
                q: "Como posso contratar um plano?",
                a: "É muito simples! Clique em 'ASSINAR AGORA', escolha seu plano, preencha os dados e confirme o pagamento. A ativação ocorre em até 24 horas."
              }
            ].map((item) => (
              <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-foreground text-left">{item.q}</span>
                  <span className={`text-accent transition-transform ${activeTab === item.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeTab === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-border">
                    <p className="text-foreground">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Comece Sua Jornada de Saúde Hoje
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consultas ilimitadas, cuidado humanizado e tecnologia integrada. Ativação em até 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
              ASSINAR AGORA
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-gsalute.png" alt="GSaluteCare Logo" className="h-8 w-auto filter brightness-200" />
              </div>
              <p className="text-blue-100 text-sm">
                Telemedicina 24h com cuidado humanizado e tecnologia integrada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+5511944603133" className="hover:text-white transition">(11) 94460-3133</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="#" className="hover:text-white transition">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-600 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2026 GSaluteCare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511944603133"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
