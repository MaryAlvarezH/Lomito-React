import React from 'react'
import './pet-details-view.scss'

function PetDetailsView(){
    return(
        <section className="info-pet-details">
            <div className="card-full-details">
                <h2>Nombre del lomito</h2>
                <div className="general-full-details">
                    <div className="image-full-details">
                        <i className="fas fa-paw fa-10x"></i>
                    </div>
                    <div className="description-full-details">
                        <div className="item-detail">
                            <span>Genero:</span>
                            <p>Hembra</p>
                        </div>
                        <div className="item-detail">
                            <span>Tamaño:</span>
                            <p>Mediano</p>
                        </div>
                        <div className="item-detail">
                            <span>Edad:</span>
                            <p>6 meses</p>
                        </div>
                        <div className="item-detail">
                            <span>Temperamento:</span>
                            <p>Activo, sociable</p>
                        </div>
                        <div className="item-detail">
                            <span>Habilidades:</span>
                            <p>Entrenada, obediente, inteligente</p>
                        </div>
                        <div className="item-detail">
                            <span>Observaciones:</span>
                            <p>Puede ser muy territorial con algunos perros</p>
                        </div>
                        <div className="card-pet-options">
                            <button type="submit" className="btn-like"><i className="fa fa-heart"></i></button>
                            <button type="submit" className="btn-comment"><i className="fa fa-comments"></i></button>
                            <button type="submit" className="btn-adopt">Adoptar</button>
                        </div>
                    </div>
                
                </div>
            <hr/>
            <h3>Comentarios</h3>
            <div className="commets-container">
                <input placeholder="¿Tienes dudas? Escíbele al dueño de este lomito"/>
                <button type="submit">Enviar</button>
            </div>
            <div className="comment-detail">
                <i className="fas fa-user fa-5x"></i>
                <div className="coment-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur temporibus nesciunt laborum reprehenderit totam, beatae, rerum natus dolor quo, laudantium maxime quos minus fugit deleniti repellat itaque cumque? Laboriosam!</p>
                </div>
            </div>
           
        </div>
    </section>
    )
}

export default PetDetailsView