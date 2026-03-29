import Image from "next/image";
import { MessageCircle, BookOpen, ChevronRight } from "lucide-react";

export default function LPDrmauroReis() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0D2A4B] font-sans flex flex-col">
      
      {/* HEADER SIMPLES */}
     {/*} <header className="w-full bg-white shadow-sm p-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="object-contain"
          />
          <span className="font-bold text-lg tracking-tight">Dr. Mauro Reis</span>
        </div>
      </header>*/}

      {/* CONTEÚDO PRINCIPAL (HERO + CTAs) */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto w-full mt-8 md:mt-16">
        
{/* FOTO E IDENTIFICAÇÃO - POP-OUT DEFINITIVO COM SOMBRA COMBINADA E ALINHAMENTO PELA BASE */}
        {/* mt-12 dá espaço em cima para a cabeça vazar sem trombar no conteúdo anterior */}
        <div className="relative w-40 h-40 mx-auto mt-12 mb-8">
          
          {/* 1. O SELO CIRCULAR (FUNDO DO AVATAR) */}
          {/* CORREÇÃO DO ERRO VSCODE: Juntei a profundidade (rgba 0,0,0) e o glow (rgba 46,134,193) em uma única classe shadow-[...] */}
          <div className="absolute inset-0 rounded-full bg-white border-4 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_0_40px_10px_rgba(46,134,193,0.35)] z-0"></div>

          {/* 2. A IMAGEM DO MÉDICO (POP-OUT) */}
          {/* CORREÇÃO DE ALINHAMENTO: bottom-0 garante que o tronco fique ancorado no fundo do selo. */}
          <div className="absolute bottom-0 left-0 w-full z-10 flex justify-center">
            <Image
              src="/foto_perfil_dr.png" // O arquivo PNG sem fundo recortado
              alt="Dr. Mauro Reis"
              width={160} // Largura idêntica ao selo
              height={210} // Altura MAIOR que o selo para a cabeça sobrar pra cima
              // rounded-b-full garante que as pontas de baixo da foto acompanhem a curva do selo!
              className="object-cover rounded-b-full" 
              style={{ objectPosition: 'bottom' }} // Força o alinhamento da imagem a partir de baixo
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
          At vero eos etaccusio amus <span className="text-[#2E86C1]">dignis ducimus.</span>
        </h1>
        
        <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed px-4">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>

        {/* BOTÕES DE AÇÃO (CTAs) */}
        <div className="w-full flex flex-col gap-4 px-2">
          {/* Botão Primário: WhatsApp */}
          <a 
            href="https://wa.me/5521991687719" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-[#2E86C1] hover:bg-[#1B4F72] text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all active:scale-95"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Agendar Consulta
            </span>
            <ChevronRight className="w-5 h-5 opacity-70" />
          </a>

          {/* Botão Secundário: E-book */}
          <a 
            href="https://ebook-congresso.vercel.app/ebook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-white hover:bg-gray-50 text-[#0D2A4B] font-bold py-4 px-6 rounded-xl shadow-sm border border-gray-200 transition-all active:scale-95"
          >
            <span className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#2E86C1]" />
              Acessar e-book gratuito
            </span>
            <ChevronRight className="w-5 h-5 opacity-40" />
          </a>
        </div>
      </main>

{/* FOOTER INSTITUCIONAL */}
      <footer className="w-full bg-[#0D2A4B] text-white py-10 mt-16 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-2">
          <p className="font-bold text-xl">Dr. Mauro Reis</p>
          <p className="text-[#A9CCE3] text-sm mb-2">CRM RJ 1152653</p>
          
          {/* BLOCO DE ENDEREÇO */}
          <div className="bg-[#1B4F72]/50 p-4 rounded-xl flex flex-col items-center gap-1 my-4 w-full max-w-sm border border-white/5">
            <span className="font-semibold text-white tracking-wide">Le Monde Office Life</span>
            <span className="text-gray-300 text-sm">Av. Dr. Mario Guimarães, 428 - Sala 915</span>
            <span className="text-gray-300 text-sm">Centro, Nova Iguaçu - RJ</span>
          </div>

          <div className="h-px w-full max-w-md bg-white/10 my-4"></div>
          
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Dr. Mauro Reis. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-gray-500 mt-1">
            Desenvolvido por M7 Partners
          </p>
        </div>
      </footer>

    </div>
  );
}