import React from 'react'
import Mariana from '../images/marianBgHero.png'

const BgHero = () => {
  return (
    <div className='container mx-auto mt-20 sm:mt-40'>
       <div className='flex flex-col sm:flex-row mx-5 justify-between border-b border-gray-300 '>
            <div className='w-full sm:w-2/4'>
                <h2 className='text-pink-600 text-lg font-semibold'>Sobre</h2>
                <h1 className='text-pink-600 text-6xl mb-10 font-black'>Mariana Gambim</h1>
                <p className='text-pink-600 mb-4 font-extralight'>Sou publicitária e designer. Graduada e Pós-Graduada pela PUCRS, especializado em branding, design e comunicação digital. Sempre buscando ideias criativas e inovadoras, que gerem resultados tangíveis.</p>
            </div>

            <div className='flex w-full sm:w-2/4 justify-end'>
                <img src={Mariana} />
            </div>
       </div>
    </div>
  )
}

export default BgHero