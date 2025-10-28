import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./index.css";

function useScrollReveal() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  return { ref, controls };
}

export default function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showBalloon, setShowBalloon] = useState(true);

  const links = {
    analise:
      "https://wa.me/5561982454947?text=Olá%20Lucas!%20Gostaria%20de%20solicitar%20uma%20análise%20de%20dados.",
    dashboard:
      "https://wa.me/5561982454947?text=Olá%20Lucas!%20Tenho%20interesse%20em%20um%20dashboard%20personalizado.",
    treinamento:
      "https://wa.me/5561982454947?text=Olá%20Lucas!%20Quero%20saber%20mais%20sobre%20treinamentos%20em%20Power%20BI%20e%20Python.",
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const heroRef = useScrollReveal();
  const portfolioRef = useScrollReveal();

  return (
    <div className="bg-azulEscuro text-cinzaClaro min-h-screen flex flex-col scroll-smooth">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full bg-azulMedio/80 backdrop-blur-lg shadow-md z-50 h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cinzaClaro">
            Lucas <span className="text-azulHover">Matos</span> | Dashboards & Dados
          </h1>
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#sobre" className="hover:text-azulHover transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-azulHover transition">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-azulHover transition">Portfólio</a></li>
            <li><a href="#contato" className="hover:text-azulHover transition">Contato</a></li>
          </ul>
        </div>
      </nav>

      <div className="h-20"></div>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef.ref}
        id="sobre"
        className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-azulMedio via-azulEscuro to-[#0C2E44] opacity-90"></div>

        {/* Partículas */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="particle"></span>
          ))}
        </div>

        <div className="relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={heroRef.controls}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transformando Dados em Decisões
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={heroRef.controls}
            className="max-w-2xl text-lg mb-10 text-cinzaClaro/90"
          >
            Especialista em visualização de dados e dashboards interativos com Power BI e Python.  
            Traduzo números em <span className="text-azulHover font-semibold">insights claros e impactantes.</span>
          </motion.p>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={heroRef.controls}
            className="text-xl md:text-2xl text-cinzaClaro/80 italic mb-6"
          >
            “Os dados contam histórias — e eu as transformo em decisões.”
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(links.analise, "_blank")}
            className="px-8 py-3 font-semibold rounded-lg transition-all 
                       bg-transparent text-cinzaClaro border border-azulHover 
                       hover:bg-azulHover hover:text-white
                       shadow-[0_0_15px_rgba(100,255,218,0.4)]"
          >
            Solicitar Análise de Dados
          </motion.button>
        </div>
      </section>

      {/* ===== PORTFÓLIO ===== */}
      <section ref={portfolioRef.ref} id="portfolio" className="bg-azulMedio py-20 px-6">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={portfolioRef.controls}
          className="text-2xl font-semibold text-center mb-10 text-cinzaClaro"
        >
          Meus Projetos
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 hover:shadow-azulHover/40 transition"
          >
            <img src="/assets/dashboard1.png" alt="Dashboard 1" className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 1</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Análise de consumo de energia com previsão e custo estimado — Power BI e Python.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 hover:shadow-azulHover/40 transition"
          >
            <video src="/assets/dashboard2.mp4" className="rounded-lg mb-4" controls />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 2</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Dashboard interativo de análise salarial global — destaque em storytelling e UX.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 hover:shadow-azulHover/40 transition"
          >
            <img src="/assets/dashboard3.png" alt="Dashboard 3" className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 3</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Dashboard de Gestão de Contratos desenvolvido no Power BI, com foco em controle de prazos, execução e prestação de contas.
              Permite decisões rápidas com base em dados claros e centralizados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CHATBOT ===== */}
      <div className="fixed bottom-3 right-3 z-50">
        {showBalloon && !showChatbot && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0EA5E9] text-white text-sm py-2 px-4 rounded-lg shadow-lg mb-2 mr-2"
          >
            Fale comigo 📊
          </motion.div>
        )}

        {showChatbot ? (
          <div className="bg-azulMedio p-4 rounded-xl shadow-xl w-72">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-cinzaClaro">Atendimento Lucas 📈</h4>
              <FaTimes
                className="cursor-pointer text-cinzaClaro hover:text-red-400"
                onClick={() => setShowChatbot(false)}
              />
            </div>
            <p className="text-sm text-cinzaClaro/80 mb-4">Selecione uma opção abaixo 👇</p>
            <div className="space-y-2">
              <button onClick={() => window.open(links.analise, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-[#6EF0D5] transition">📊 Solicitar Análise</button>
              <button onClick={() => window.open(links.dashboard, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-[#6EF0D5] transition">📈 Dashboard Personalizado</button>
              <button onClick={() => window.open(links.treinamento, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-[#6EF0D5] transition">🎓 Treinamentos</button>
            </div>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setShowChatbot(true);
              setShowBalloon(false);
            }}
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all pulse"
          >
            <FaWhatsapp size={26} />
          </motion.button>
        )}
      </div>

      {/* ===== FOOTER ===== */}
      <footer id="contato" className="bg-azulEscuro py-10 text-center border-t border-azulHover/30">
        <p className="text-cinzaClaro/80 mb-4">
          © 2025 <span className="text-azulHover">Lucas Matos</span> | Dashboards & Dados
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/lucas-david-carvalho-vieira-de-matos" target="_blank" className="hover:text-azulHover transition">LinkedIn</a>
          <a href="https://github.com/lucasmatos2003" target="_blank" className="hover:text-azulHover transition">GitHub</a>
          <a href="https://www.instagram.com/lucasmatos.data?igsh=MTBraDk0eXV2MTk3Mg%3D%3D&utm_source=qr" target="_blank" className="hover:text-azulHover transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
