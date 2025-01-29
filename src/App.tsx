import React from 'react';
import { Phone, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Hashtagg Pizzzaria LTDA</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000"
            alt="Pizza Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">Sabor Autêntico Italiano</h2>
            <p className="text-xl mb-8">As melhores pizzas artesanais da região, feitas com ingredientes selecionados</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Peça Agora
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 text-lg mb-6">
                Há mais de 10 anos, a Hashtagg Pizzzaria vem encantando Santos com sabores autênticos e tradição italiana.
                Nossa jornada começou em 2013, com uma simples missão: servir as melhores pizzas da região, usando apenas
                ingredientes frescos e de alta qualidade.
              </p>
              <p className="text-gray-600 text-lg">
                Hoje, somos referência em qualidade e atendimento, mantendo viva a tradição da verdadeira pizza italiana,
                com massa artesanal fermentada naturalmente e ingredientes selecionados.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000"
                alt="Pizzaiolo trabalhando"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800"
                alt="Pizza de Queijo"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Margherita</h3>
                <p className="text-gray-600">Molho de tomate, mussarela, manjericão fresco</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800"
                alt="Pizza de Calabresa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Calabresa</h3>
                <p className="text-gray-600">Molho de tomate, calabresa, cebola, oregano</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800"
                alt="Pizza de Frango"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Frango com Catupiry</h3>
                <p className="text-gray-600">Molho de tomate, frango desfiado, catupiry</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800"
                alt="Pizza Portuguesa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Portuguesa</h3>
                <p className="text-gray-600">Molho de tomate, presunto, ovos, cebola, ervilha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Promoções Especiais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800"
                alt="Promoção Segunda"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Segunda do Dobro</h3>
                <p className="text-gray-600">Peça uma pizza grande e ganhe outra do mesmo valor!</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800"
                alt="Promoção Família"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Combo Família</h3>
                <p className="text-gray-600">2 pizzas grandes + refrigerante 2L por apenas R$89,90</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800"
                alt="Promoção Delivery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Delivery Grátis</h3>
                <p className="text-gray-600">Em pedidos acima de R$50 para toda região</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hashtagg Pizzzaria LTDA</h3>
              <address className="not-italic">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>Rua Doutor Gervasio Bonavides, 55</span>
                </div>
                <div className="ml-7 mb-2">Macuco - Santos/SP</div>
                <div className="ml-7">CEP: 11015-180</div>
                <div className="ml-7 mt-2">CNPJ: 51.090.537/0001-20</div>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span>Terça a Domingo: 18h às 23h</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5" />
                <span>(13) 3322-1234</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-center text-sm text-stone-400">
            © 2024 Hashtagg Pizzzaria LTDA. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Additional Info Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-gray-800 max-w-3xl mx-auto space-y-4">
            <p><strong>NOME EMPRESARIAL/RAZÃO SOCIAL:</strong> Hashtagg Pizzzaria LTDA</p>
            <p><strong>LOGRADOURO:</strong> Rua Doutor Gervasio Bonavides 55</p>
            <p><strong>BAIRRO/DISTRITO:</strong> Macuco</p>
            <p><strong>MUNICÍPIO:</strong> Santos</p>
            <p><strong>UF:</strong> SP</p>
            <p><strong>CEP:</strong> 11015-180</p>
            <p><strong>NÚMERO DE INSCRIÇÃO/CNPJ:</strong> 51.090.537/0001-20</p>
            <p><strong>ENDEREÇO ELETRÔNICO/E-MAIL:</strong> suporteoficial@seu-detetive-insta.com
</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
