import DomainList from "./_components/DomainList";
import Domains from "./dominios/component";

export default function Home() {
  return <Domains />;
}

function Introduction() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 py-12 text-center px-6">
      <h1 className="text-4xl font-bold tracking-tighter">
        Domínios para investimento
      </h1>
      <p>
        O nosso portfólio de domínios conta atualmente com pouco mais de 150
        domínios unicamente com a extensão “.com”, que utilizamos para
        desenvolver ideias de negócio com pessoas dinâmicas dispostas a criar
        sinergias. Desde 2008 a nossa aposta tem passado pelo desenvolvimento de
        negócios sustentáveis em diversas áreas, desde a área de desenvolvimento
        informático, turismo, imobiliária e outras áreas de negócio em Portugal
        e no estrangeiro.
      </p>
    </div>
  );
}

function Block() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 py-12 text-left px-6">
      <h2 className="text-3xl  tracking-tighter w-full text-accent font-semibold">
        A criação de negócios
      </h2>
      <p>
        O nosso portfólio de domínios conta atualmente com pouco mais de 150
        domínios unicamente com a extensão “.com”, que utilizamos para
        desenvolver ideias de negócio com pessoas dinâmicas dispostas a criar
        sinergias. Desde 2008 a nossa aposta tem passado pelo desenvolvimento de
        negócios sustentáveis em diversas áreas, desde a área de desenvolvimento
        informático, turismo, imobiliária e outras áreas de negócio em Portugal
        e no estrangeiro.
      </p>
    </div>
  );
}

function Block2() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 py-12 text-left px-6">
      <h2 className="text-3xl  tracking-tighter w-full text-accent font-semibold">
        O que é um domínio web?
      </h2>
      <p>
        Tecnicamente, um domínio é uma mascara de ip atribuída pela entidade
        ICANN, que pode ser registada por um nome composto por letras, números e
        ifens, com uma vasta opção de extensões. Cada domínio é único, significa
        que apenas pode ser registado uma única vez, em cada extensão. O valor
        dos domínios tem um valor base definido por cada registrant (entidade
        onde podemos criar domínios pela primeira vez), mais a taxa da ICANN.
        Após o registo do domínio por um particular, ou entidade terceira, esse
        domínio para a ter a gestão por esse particular ou entidade, mediante o
        pagamento anual do custo de renovação. Existem muitos registrants onde
        podemos registar domínios, registrants esses que operam prestando o
        serviço de registo de domínios segundo as normas da ICANN, sendo os mais
        conhecidos a godaddy.com, a cloudflare.com, networksolutions.com
        domain.com, enom.com, register.com, e muitos mais” Todos os registrants
        são livres de praticar a sua própria tabela de preços para o primeiro
        registo, e para a renovação anual do domínio, desde que cubram o mínimo
        valor da taxa cobrada pela ICANN.
      </p>
    </div>
  );
}
