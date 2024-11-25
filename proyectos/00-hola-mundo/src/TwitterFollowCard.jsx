import { useState } from "react";

// Componente para mostrar una tarjeta de seguimiento de Twitter.
export function TwitterFollowCard({ formatUserName, userName, name}) {
    
    const [isFollowing, setIsFollowing] = useState(false); // Estado para saber si se está siguiendo al usuario
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir';// Cambia el texto del botón según el estado.
    const buttonClassName = isFollowing 
        ? 'tw-follow-Card-button is-following'  // Clase para cuando se está siguiendo.
        : 'tw-follow-Card-button';    // Clase para cuando no se sigue.

        // Función que alterna el estado de seguimiento.
    const handleClick = () =>{
      setIsFollowing(! isFollowing)
    }
      
    return (
        <article className="tw-follow-Card">
            <header className="tw-follow-Card-header">
                 {/* Avatar del usuario */}
                <img
                    className="tw-follow-Card-avatar"
                    src={`https://unavatar.io/x/${userName}`}  // API para obtener avatares.
                    alt={`Avatar de ${name}`}  // Texto alternativo.
                />
                <div className="tw-follow-Card-info">
                    <strong>{name}</strong> {/* Nombre del usuario */}
                    <span className="tw-follow-Card-infoUserName">{formatUserName(userName)}</span>  {/* Formateo del nombre de usuario */}
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}   {/* Texto del botón */}
                </button>
            </aside>
        </article>
    );
}
