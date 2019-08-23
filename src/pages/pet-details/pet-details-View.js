import React from 'react'
import './pet-details-view.scss'

function PetDetailsView(props){
    // const [state, setState] = React.useState({
    //     userId,
    //     petId,
    //     like,
    //     comment: {registeredAt, text}
    // });

    // const addNewActivity=async(state) =>{
    //     const raw = await this.handleData(state, method = 'POST')
       
    // }
        

    
    return(
        <section className="info-pet-details">
            <div className="card-full-details">
                <h2>{props.petDetails.name}</h2>
                <div className="general-full-details">
                    <div className="image-full-details">
                        <i className="fas fa-paw fa-10x"></i>
                    </div>
                    <div className="description-full-details">
                        <div className="item-detail">
                            <span>Genero:</span>
                            <p>{props.petDetails.gender}</p>
                        </div>
                        <div className="item-detail">
                            <span>Especie:</span>
                            <p>{props.petDetails.sort}</p>
                        </div>
                        <div className="item-detail">
                            <span>Tamaño:</span>
                            <p>{props.petDetails.size}</p>
                        </div>
                        <div className="item-detail">
                            <span>Raza:</span>
                            <p>{props.petDetails.breed}</p>
                        </div>
                        <div className="item-detail">
                            <span>Edad:</span>
                            <p>{props.petDetails.age}</p>
                        </div>
                        <div className="item-detail">
                            <span>Temperamento:</span>
                            <p>{props.petDetails.temperament}</p>
                        </div>
                        <div className="item-detail">
                            <span>Habilidades:</span>
                            <p>
                            {
                               props.petDetails.skills.map(skill => {
                                   return (
                                        `${skill}, `
                                   )
                               }) 
                            }
                            </p>
                        </div>
                        <div className="item-detail">
                            <span>Observaciones:</span>
                            <p>{props.petDetails.observations}</p>
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
            {
                props.activities.map(act =>{
                    if (act.petId === props.petDetails.id) {
                        return (
                            <div className="comment" key={act.id}>
                                <div className="comment-detail">
                                    <i className="fas fa-user fa-2x"></i>
                                    <div className="coment-text">
                                    <div className="date">
                                        <span>{act.comment.registeredAt}</span>
                                    </div>
                                        <p>{act.comment.text}</p>
                                    </div>
                                </div>
                                
                                <div>
                                {
                                   act.userId===1 ? (
                                        <div className="edit-comment">
                                            <button type="text">Editar</button>
                                            <button type="text">Borrar</button>
                                            
                                        </div>
                                   ): null
                               }
                                </div>

                                
                       
                               
                               
                              </div>  
                            )
                    }
                })
            }
            
           
        </div>
    </section>
    )
}

export default PetDetailsView