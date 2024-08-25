import React, { useEffect, useRef, useState } from 'react';

import genx from '../asset/projects/genx.png';
import genx2 from '../asset/projects/genx2.png';
import genx3 from '../asset/projects/genx3.png';
import genx4 from '../asset/projects/genx4.png';

import compas from '../asset/projects/compas.png';
import compas2 from '../asset/projects/compas2.png';
import compas3 from '../asset/projects/compas3.png';
import compas4 from '../asset/projects/compas4.png';
import compas5 from '../asset/projects/compas5.png';

import combo from '../asset/projects/combo.png';
import combo2 from '../asset/projects/combo2.png';
import combo3 from '../asset/projects/combo3.png';
import combo4 from '../asset/projects/combo4.png';
import combo5 from '../asset/projects/combo5.png';

import email from '../asset/projects/email.png';
import email2 from '../asset/projects/email2.png';
import email3 from '../asset/projects/email3.png';
import email4 from '../asset/projects/email4.png';
import email5 from '../asset/projects/email5.png';

import heist from '../asset/projects/heist.png';
import heist2 from '../asset/projects/heist2.png';
import heist3 from '../asset/projects/heist3.png';

import chopaa from '../asset/projects/copaa.png';
import chopaa2 from '../asset/projects/copaa2.png';

import flex from '../asset/projects/flex.png';
import flex2 from '../asset/projects/flex2.png';
import flex3 from '../asset/projects/flex3.png';
import flex4 from '../asset/projects/flex4.png';


import b4u from '../asset/projects/b4u.png';
import b4u2 from '../asset/projects/b4u2.png';
import b4u3 from '../asset/projects/b4u3.png';
import b4u4 from '../asset/projects/b4u4.png';
import b4u5 from '../asset/projects/b4u5.png';


import lux from '../asset/projects/lux.png';
import lux2 from '../asset/projects/lux2.jpg';
import lux3 from '../asset/projects/lux3.jpg';

import pastehub from '../asset/projects/pastehub.png';
import pastehub2 from '../asset/projects/pastehub2.png';
import pastehub3 from '../asset/projects/pastehub3.png';

import ai from '../asset/projects/ai.png';
import ai2 from '../asset/projects/ai2.png';
import ai3 from '../asset/projects/ai3.png';
import ai4 from '../asset/projects/ai4.png';

import refund from '../asset/projects/refunder.png';
import refund2 from '../asset/projects/refunder2.png';
import refund3 from '../asset/projects/refunder3.png';
import refund4 from '../asset/projects/refunder4.png';
import refund5 from '../asset/projects/refunder5.png';
import refund6 from '../asset/projects/refunder6.png';

import u2pay from '../asset/projects/u2pay.png';
import u2pay2 from '../asset/projects/u2pay2.png';
import u2pay3 from '../asset/projects/u2pay3.png';

import quickpaste from '../asset/projects/quickpaste.png';
import quickpaste2 from '../asset/projects/quickpaste2.png';
import quickpaste3 from '../asset/projects/quickpaste3.png';



const projects = [
  { 
    title: 'Genx - The Gen Bot', 
    description: 'Genx is a telegram bot that generates Accounts and Rewards for users. its fully free and open-source project.',    
    link: 'https://t.me/Genx_Gen_Bot', 
    images: [genx, genx2, genx3, genx4] 
  },
  { 
    title: 'Compas - Hotel Booking bot.', 
    description: 'Compas is a telegram bot that helps book hotels and provides a variety of services. without any hassle and with web ui to fill their infos. they can book flight/hotel/cars.',     
    link: 'https://t.me/CompasAgency_Bot', 
    images: [compas, compas2, compas3, compas4, compas5]  
  },
  { 
    title: 'Combo Downloader - Search for breaches and leaks with intelx api.', 
    description: 'intelx searching bot that searches for breaches and leaks. its free and paid. used to run for past 1 year.',         
    link: 'https://t.me/intelx_searching_bot', 
    images: [combo, combo2, combo3, combo4, combo5]  
  },
  { 
    title: 'Email Bomber - Send large amount of emails.',  
    description: 'Email Bomber is made for educational purposes only. it can send large amount of emails and make the email flooded.',                  
    link: 'https://t.me/emailnsms_bot', 
    images: [email, email2, email3, email4, email5]  
  },
  { 
    title: 'Heist - otp bot',  
    description: 'Heist is a telegram bot that sends OTPs for various services and grabs the otp from the victim. made for educational purposes only.',                                             
    link: 'https://t.me/pipcode', 
    images: [heist, heist2, heist3]  
  },
  { 
    title: 'Choppa - Drop Bot',  
    description: 'A Telegram bot that drops premium accounts for free with cooldown.',                                             
    link: 'https://t.me/pipcode', 
    images: [chopaa, chopaa2]  
  },
  { 
    title: 'Flex - Drop Bot',  
    description: 'A Telegram bot that drops premium accounts for free with cooldown but with more advanced features.',                                                                                          
    link: 'https://t.me/pipcode', 
    images: [flex, flex2, flex3, flex4]    
  },
  { 
    title: 'B4U - Buy Things for Cheap',  
    description: 'Website that takes order from user and collects the payment automatically.',                                                                                          
    link: 'https://b4u.fo/', 
    images: [b4u, b4u2, b4u3, b4u4, b4u5]    
  },
  { 
    title: 'luxshop - Card Shop',    
    description: 'Website that offers different types of cards and other products.',                                                                                                                                                                                    
    link: 'https://luxshop.cc/', 
    images: [lux, lux2, lux3]
  },
  { 
    title: 'EuropeanMarket - Card Shop',    
    description: 'Website that offers different types of cards and other products same like lux but with new features',                                                                                                                                                                                    
    link: 'https://europeanmarket.cc', 
    images: [lux2, lux, lux3]
  },
  { 
    title: 'Pastehub - Paste website',    
    description: 'Allows users to paste text and share them as link to others.',                                                                                                                                                                                    
    link: 'https://www.pastehub.gg/', 
    images: [pastehub, pastehub2, pastehub3]
  },
  { 
    title: 'Novacebot - AI Website With Payments.',    
    description: 'it allows users to pay to get the pre access of the ai.',                                                                                                                                                                                    
    link: 'https://t.me/pipcode', 
    images: [ai, ai2, ai3, ai4]
  },
  { 
    title: 'Refund - Crypto Refund Website.',    
    description: 'its made for users to get refund of their crypto from trusted wallets.',                                                                                                                                                                                                                                                                                                                                                                        
    link: 'https://t.me/pipcode', 
    images: [refund, refund2, refund3, refund4, refund5, refund6]
  },
  { 
    title: 'u2pay - P2P Payment Gateway.',        
    description: 'its a simple upi payment application with rewards and cashbacks along with ecommerce and Mobile recharge.',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    link: 'https://u2pay.in/', 
    images: [u2pay, u2pay2, u2pay3]
  },
  { 
    title: 'Quickpaste - Paste website.',                
    description: 'fixing small bugs and vulnerabilities and improving performance. i didnt make this.',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    link: 'https://quickpaste.it', 
    images: [quickpaste, quickpaste2, quickpaste3]
  },
];

const Projects = () => {
  const glowContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const glowContainer = glowContainerRef.current;
    const createGlowElements = () => {
      const glowCount = 5;
      for (let i = 0; i < glowCount; i++) {
        const glow = document.createElement('div');
        glow.classList.add('galaxy');
        glow.style.top = `${Math.random() * 100}%`;
        glow.style.left = `${Math.random() * 100}%`;
        glowContainer.appendChild(glow);
      }
    };
    createGlowElements();
  }, []);

  const openModal = (images, index = 0) => {
    setModalImage(images[index]);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (images) => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setModalImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = (images) => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setModalImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <section id="projects" className="bg-background py-16 text-primary relative overflow-hidden">
      <div ref={glowContainerRef} className="absolute inset-0 pointer-events-none"></div>
      <div className="lines absolute inset-0 pointer-events-none">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="twelve">
          <h2 className="text-4xl font-bold text-center typing-animation">Projects</h2>
        </div>
        <div className="mt-8 space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:grid-cols-[auto,1fr]' : 'md:grid-cols-[1fr,auto]'}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full h-48 md:w-3/4 md:h-96 lg:h-[450px] overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-lg cursor-pointer" 
                        onClick={() => openModal(project.images)} 
                      />
                    </div>
                    <p className="text-sm mt-2 text-center text-gray-500">Click on the image for more info</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#aa06f7]">{project.title}</h3>
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mt-2">{line}</p>
                    ))}
                    <a
                      href={project.link}
                      className="mt-4 project-button inline-block bg-[#282c34] text-[#61dafb] border border-[#61dafb] rounded-lg text-center hover:bg-[#61dafb] hover:text-[#282c34] transition-colors w-28"
                    >
                      View
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#aa06f7]">{project.title}</h3>
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mt-2">{line}</p>
                    ))}
                    <a
                      href={project.link}
                      className="mt-4 project-button inline-block bg-[#282c34] text-[#61dafb] border border-[#61dafb] rounded-lg text-center hover:bg-[#61dafb] hover:text-[#282c34] transition-colors w-28"
                    >
                      View
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full h-48 md:w-3/4 md:h-96 lg:h-[450px] overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-lg cursor-pointer" 
                        onClick={() => openModal(project.images)} 
                      />
                    </div>
                    <p className="text-sm mt-2 text-center text-gray-500">Click on the image for more info</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={modalImage} alt="Project" className="max-w-full max-h-screen object-contain" />
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-red-600 transition"
            >
              &times;
            </button>
            <button 
              onClick={() => handlePrevImage(projects.find(project => project.images.includes(modalImage)).images)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition"
            >
              &#8592;
            </button>
            <button 
              onClick={() => handleNextImage(projects.find(project => project.images.includes(modalImage)).images)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
