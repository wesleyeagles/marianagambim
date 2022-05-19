import React from 'react'
import Mariana from '../images/marianBgHero.png'

const BgHero = () => {
  return (
    <div className='container mx-auto mt-40'>
       <div className='flex justify-between border-b border-gray-300 '>
            <div className='w-2/4'>
                <h2 className='text-pink-600 text-lg font-semibold'>Sobre</h2>
                <h1 className='text-pink-600 text-6xl mb-10 font-black'>Mariana Gambim</h1>
                <p className='text-pink-600 mb-4 font-extralight'>Sou publicitária e designer. Graduada e Pós-Graduada pela PUCRS, especializado em branding, design e comunicação digital. Sempre buscando ideias criativas e inovadoras, que gerem resultados tangíveis.</p>
                <p className='text-pink-600 mb-4 font-extralight'>Com uma trajetória de 14 anos no mercado, atuando como designer de grandes empresas gaúchas, onde pude ampliar meu leque de clientes e claro, de conhecimento, prestando serviços para grandes, médias e pequenas empresas.</p> 
                <p className='text-pink-600 mb-4 font-extralight'>Me aperfeiçoei em Criação de Site, Lojas Virtual (E-commerce), Identidade Visual, Design Gráfico e Comunicação Visual. Minhas criações seguem sólidos conceitos do design, gestalt e teoria da cor sempre levando em consideração o tipo de negócio, concorrentes e melhor forma de impacto para disseminação da marca. Desenvolvo sites modernos, de fácil navegação e facilmente atualizáveis, com excelente visibilidade junto aos buscadores.</p>
            </div>

            <div className='flex justify-center'>
                <img src={Mariana} />
            </div>
       </div>
    </div>
  )
}

export default BgHero