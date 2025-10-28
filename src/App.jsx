import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./index.css";

// ✅ Importações diretas (corrige o problema das imagens no Vercel)
import dashboard1 from "./assets/dashboard1.png";
import dashboard2 from "./assets/dashboard2.mp4";
import dashboard3 from "./assets/dashboard3.png";

// Hook personalizado para revelar elementos ao rolar
function useScrollReveal() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  return { ref, controls };
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showBalloon, setShowBalloon] = useState(true);

  // Links personalizados de WhatsApp
  const links = {
    analise: "https://wa.me/5561999999999?text=Olá%20Lucas!%20Gostaria%20de%20solicitar%20uma%20análise%20de%20dados.",
    dashboard: "https://wa.me/5561999999999?text=Olá%20Lucas!%20Tenho%20interesse%20em%20um%20dashboard%20personalizado.",
    treinamento: "https://wa.me/5561999999999?text=Olá%20Lucas!%20Quero%20saber%20mais%20sobre%20treinamentos%20em%20Power%20BI%20e%20Python."
  };

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  // Hooks de scroll reveal
  const heroRef = useScrollReveal();
  const portfolioRef = useScrollReveal();

  return (
    <div className="bg-azulEscuro text-cinzaClaro min-h-screen flex flex-col scroll-smooth">
      {/* Navbar fixa e sólida */}
      <nav className="fixed top-0 w-full bg-azulMedio/90 backdrop-blur-md shadow-lg z-50 border-b border-azulHover/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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

      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        id="sobre"
        className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 bg-gradient-to-b from-azulEscuro to-azulMedio"
      >
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={heroRef.controls}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Transformando Dados em Decisões
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={heroRef.controls}
          className="max-w-2xl text-lg mb-6 text-cinzaClaro/90"
        >
          Especialista em visualização de dados e dashboards interativos com Power BI e Python.
          Traduzo números em <span className="text-azulHover">insights claros e impactantes</span>.
        </motion.p>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={heroRef.controls}
          className="italic text-cinzaClaro/70 mb-10"
        >
          “Os dados contam histórias — e eu as transformo em decisões.”
        </motion.p>

        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate={heroRef.controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => window.open(links.analise, "_blank")}
          className="px-6 py-3 bg-azulHover text-white font-semibold rounded-lg shadow-md hover:bg-azulClaro transition-all"
        >
          Solicitar Análise de Dados
        </motion.button>
      </section>

      {/* Portfólio */}
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
          {/* Projeto 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 transition-transform hover:shadow-azulHover/40 hover:shadow-2xl"
          >
            <img src={dashboard1} alt="Dashboard 1" className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 1</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Análise de consumo de energia com previsão e custo estimado — Power BI e Python.
            </p>
          </motion.div>

          {/* Projeto 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 cursor-pointer transition-transform hover:shadow-azulHover/40 hover:shadow-2xl"
          >
            <video src={dashboard2} className="rounded-lg mb-4" controls />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 2</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Dashboard interativo de análise salarial global — destaque em storytelling e UX.
            </p>
          </motion.div>

          {/* Projeto 3 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={portfolioRef.controls}
            whileHover={{ scale: 1.03 }}
            className="bg-azulEscuro rounded-xl shadow-lg p-6 transition-transform hover:shadow-azulHover/40 hover:shadow-2xl"
          >
            <img src={dashboard3} alt="Dashboard 3" className="rounded-lg mb-4" />
            <h4 className="text-xl font-bold text-azulClaro">Projeto 3</h4>
            <p className="text-sm text-cinzaClaro/80 mt-2">
              Monitoramento de conectividade escolar com indicadores reais — dashboards inspirados em casos reais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal de vídeo */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-azulEscuro rounded-lg p-4 shadow-2xl w-11/12 md:w-3/5 lg:w-2/5"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={dashboard2} controls autoPlay className="rounded-lg w-full border border-azulHover/30"></video>
          </div>
        </div>
      )}

      {/* Chatbot Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        {showBalloon && !showChatbot && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-azulHover text-white text-sm py-2 px-4 rounded-lg shadow-lg mb-2 mr-2"
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
              <button onClick={() => window.open(links.analise, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-azulClaro transition">📊 Solicitar Análise</button>
              <button onClick={() => window.open(links.dashboard, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-azulClaro transition">📈 Dashboard Personalizado</button>
              <button onClick={() => window.open(links.treinamento, "_blank")} className="w-full bg-azulHover text-white py-2 rounded-lg font-semibold hover:bg-azulClaro transition">🎓 Treinamentos</button>
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
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} />
          </motion.button>
        )}
      </div>

      {/* Rodapé */}
      <footer id="contato" className="bg-azulEscuro py-10 text-center border-t border-azulHover/30">
        <p className="text-cinzaClaro/80 mb-4">
          © 2025 <span className="text-azulHover">Lucas Matos</span> | Dashboards & Dados
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/lucas-david-carvalho-vieira-de-matos" target="_blank" className="hover:text-azulHover transition">LinkedIn</a>
          <a href="https://github.com/lucasmatos2003" target="_blank" className="hover:text-azulHover transition">GitHub</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-azulHover transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
