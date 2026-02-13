import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Clock, FileText, Heart, MessageCircle, Phone, Star, Zap, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    endereco: "",
    cep: "",
    bairro: "",
    cidade: "",
    telefone: "",
    email: "",
    dependentes: "",
  });

  const toggleFAQ = (id: string) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensagem = `*Novo Lead - GSaluteCare*%0A%0A📋 *Dados Pessoais*%0ANome: ${formData.nome}%0AData de Nascimento: ${formData.dataNascimento}%0ACPF: ${formData.cpf}%0ATelefone: ${formData.telefone}%0AEmail: ${formData.email}%0A%0A📍 *Endereço*%0ARua: ${formData.endereco}%0ACEP: ${formData.cep}%0ABairro: ${formData.bairro}%0ACidade: ${formData.cidade}%0A%0A👥 *Dependentes*%0A${formData.dependentes || "Nenhum informado"}%0A%0A💊 *Plano Selecionado*%0A${selectedPlan}`;
    
    window.open(`https://wa.me/5511944603133?text=${mensagem}`, "_blank");
    
    setShowFormModal(false);
    setFormData({
      nome: "",
      dataNascimento: "",
      cpf: "",
      endereco: "",
      cep: "",
      bairro: "",
      cidade: "",
      telefone: "",
      email: "",
      dependentes: "",
    });
    setSelectedPlan("");
  };

  const openFormModal = (plan: string) => {
    setSelectedPlan(plan);
    setShowFormModal(true);
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
            <Button onClick={() => openFormModal("")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
                <Button onClick={() => openFormModal("")} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                  ASSINAR AGORA
                </Button>
                <Button onClick={() => window.open('https://wa.me/5511944603133', '_blank')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale com Especialista
                </Button>
              </div>

              <p className="text-sm text-blue-200 mt-6">
                ✓ Ativação em até 24h após confirmação do pagamento
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/T3hvA2YB8RU?autoplay=1&mute=1"
                title="GSaluteCare - Telemedicina 24h"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Escolha Seu Plano</h2>
            <p className="text-xl text-muted-foreground">Todos os planos incluem consultas ilimitadas 24h</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Individual */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold font-poppins mb-2">Individual</h3>
                <p className="text-muted-foreground mb-6">Para você cuidar da sua saúde</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">R$ 19,90</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>

                <Button onClick={() => openFormModal("Individual - R$ 19,90/mês")} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-6">
                  ASSINAR AGORA
                </Button>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Consultas ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Atualização de receita</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Descontos em farmácias</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Plano Diabetes */}
            <Card className="relative overflow-hidden border-2 border-accent shadow-lg md:scale-105">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                MAIS POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-poppins mb-2">Acompanhamento Diabetes</h3>
                <p className="text-muted-foreground mb-6">Monitoramento especializado</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">R$ 24,99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>

                <Button onClick={() => openFormModal("Acompanhamento Diabetes - R$ 24,99/mês")} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-6">
                  ASSINAR AGORA
                </Button>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Tudo do plano Individual</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Acompanhamento especializado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Monitoramento de glicemia</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Plano Familiar */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold font-poppins mb-2">Familiar</h3>
                <p className="text-muted-foreground mb-6">Para toda a família</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">R$ 49,90</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>

                <Button onClick={() => openFormModal("Familiar - R$ 49,90/mês")} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-6">
                  ASSINAR AGORA
                </Button>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Até 6 dependentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Consultas ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Descontos especiais</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">Por Que Escolher GSaluteCare?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inovação Tecnológica</h3>
                <p className="text-muted-foreground">Plataforma moderna e segura para consultas de qualidade</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cuidado Humanizado</h3>
                <p className="text-muted-foreground">Médicos especializados com atendimento personalizado</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gestão Integrada</h3>
                <p className="text-muted-foreground">Histórico completo e acompanhamento contínuo</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Parcerias Estratégicas</h3>
                <p className="text-muted-foreground">Descontos em farmácias e laboratórios parceiros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">O Que Nossos Pacientes Dizem</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { nome: "Maria Silva", plano: "Familiar", texto: "Excelente serviço! Minha família toda usa e adoramos a praticidade." },
              { nome: "João Santos", plano: "Individual", texto: "Atendimento rápido e médicos muito atenciosos. Recomendo!" },
              { nome: "Ana Costa", plano: "Diabetes", texto: "O acompanhamento especializado mudou minha vida. Muito obrigada!" },
              { nome: "Carlos Oliveira", plano: "Familiar", texto: "Melhor investimento em saúde que já fiz. Vale muito a pena!" },
            ].map((depoimento, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{depoimento.texto}"</p>
                <div>
                  <p className="font-semibold">{depoimento.nome}</p>
                  <p className="text-sm text-muted-foreground">Plano {depoimento.plano}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {[
              { id: "1", pergunta: "Como funciona a consulta?", resposta: "Você agenda a consulta pelo app, conversa com o médico via vídeo e recebe a receita digital." },
              { id: "2", pergunta: "Quanto tempo leva para ativar?", resposta: "A ativação é feita em até 24h após confirmação do pagamento." },
              { id: "3", pergunta: "Posso cancelar a qualquer momento?", resposta: "Sim! Você pode cancelar sua assinatura sem multa ou taxa adicional." },
              { id: "4", pergunta: "Quais especialidades estão disponíveis?", resposta: "Temos clínicos gerais, cardiologistas, dermatologistas e muitos outros especialistas." },
              { id: "5", pergunta: "Os dados são seguros?", resposta: "Sim! Usamos criptografia de ponta a ponta e estamos em conformidade com a LGPD." },
            ].map((faq) => (
              <div key={faq.id} className="border rounded-lg">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-left">{faq.pergunta}</span>
                  <span className={`transform transition-transform ${activeTab === faq.id ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {activeTab === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 text-muted-foreground border-t">
                    {faq.resposta}
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
            <Button onClick={() => openFormModal("")} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
              ASSINAR AGORA
            </Button>
            <Button onClick={() => window.open('https://wa.me/5511944603133', '_blank')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-blue-100 text-sm">
                <a href="https://wa.me/5511944603133" className="hover:text-white transition">
                  WhatsApp: (11) 94460-3133
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-blue-600 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2026 GSaluteCare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Formulário */}
      <Dialog open={showFormModal} onOpenChange={setShowFormModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preencha seus dados para continuar</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmitForm} className="space-y-4">
            {/* Dados Pessoais */}
            <div>
              <label className="text-sm font-semibold">Nome Completo *</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="João Silva"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Data de Nascimento *</label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border rounded-md mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">CPF *</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  placeholder="123.456.789-00"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Telefone *</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="joao@email.com"
              />
            </div>

            {/* Endereço */}
            <div>
              <label className="text-sm font-semibold">Endereço Completo (Rua) *</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleFormChange}
                required
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="Rua das Flores, 123"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-semibold">CEP *</label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  placeholder="01234-567"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Bairro *</label>
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  placeholder="Centro"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Cidade *</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  placeholder="São Paulo"
                />
              </div>
            </div>

            {/* Dependentes */}
            <div>
              <label className="text-sm font-semibold">Dependentes (opcional)</label>
              <textarea
                name="dependentes"
                value={formData.dependentes}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="Nome e idade dos dependentes"
                rows={3}
              />
            </div>

            {/* Plano Selecionado */}
            {selectedPlan && (
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm"><strong>Plano Selecionado:</strong> {selectedPlan}</p>
              </div>
            )}

            {/* Botões */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Enviar para WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowFormModal(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511944603133"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
