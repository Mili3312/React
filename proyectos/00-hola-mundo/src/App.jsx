import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// Componente principal que muestra varias tarjetas de usuarios
export function App(params) {
  
  

    const formatUserName=(userName)=>`@${userName}`//función como parametro...  // Formatea el nombre de usuario.
    
    

    return(
        <>
         {/* Tarjetas de seguimiento para diferentes usuarios */}
        <TwitterFollowCard formatUserName={formatUserName}
          
          userName='kikobeats'
          name='José Antonio Durán' />
        <TwitterFollowCard formatUserName={formatUserName}
           
          userName='Thomas_Astruc' 
          name='Thomas Astruc ⏚' />
        <TwitterFollowCard formatUserName={formatUserName}
           
          userName='JMilei'
          name='Javier Milei' />
        <TwitterFollowCard formatUserName={formatUserName} 
          
          userName='elonmusk' 
          name='Elon Musk' />
        </>
        
    )
}