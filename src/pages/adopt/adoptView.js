import React from 'react'
import './adoptView.scss'
import {Link} from 'react-router-dom'
function AdoptView(props) {
    return(
      
        <section className="dashboard"> 
        {
            console.log(props.petList)
        }
            <div className="aside">
                <h3>Filta tu búsqueda</h3>
            
                <div className="search-input">
                    <input type="text" id="txtSerach" placeholder="Algo en especial..." id="item1"></input>
                    <button id="btnSerach" type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="search-option">
                    <h3>Especie</h3>
                </div>
                <div className="icon-container">
                    <i className="fas fa-dog fa-3x"></i>
                    <i className="fas fa-cat fa-3x"></i>
                </div>
                <div className="search-option">
                    <h3>Tamaño</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="chico"/>
                    <label htmlFor="chico">Chico</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="mediano"/>
                    <label htmlFor="mediano">Mediano</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="grande"/>
                    <label htmlFor="grande">Grande</label>
                </div>
                <div className="search-option">
                    <h3>Género</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="hembra"/>
                    <label htmlFor="hembra">Hembra</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="macho"/>
                    <label htmlFor="macho">Macho</label>
                </div>
                <div className="search-option">
                    <h3>Temperamento</h3>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="tranquilo"/>
                    <label htmlFor="tranquilo">Tranquilo</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="Activo"/>
                    <label htmlFor="Activo">Activo</label>
                </div>
                <div className="radio-button-group">
                    <input type="checkbox" id="sociable"/>
                    <label htmlFor="sociable">Sociable</label>
                </div>
            
            </div>
            <div className="card-container">
            {
                props.petList.map(item=>{
                    return (
                        <div className="card-pet">
                            <h2>Nombre del lomito</h2>
                            <i className="fas fa-paw fa-8x"></i>
                            <div className="pet-details">
                                <div className="item">Genero:</div>
                                <div className="item-detail">Hembra</div>
                                <div className="item">Tamaño:</div>
                                <div className="item-detail">Mediano</div>
                                <div className="item">Temperamento:</div>
                                <div className="item-detail">Activo, sociable</div>
                                <div className="item">Edad:</div>
                                <div className="item-detail">6 meses</div>
                            </div>
                            <Link 
                            to={{
                                pathname:'/pet-detail',
                                search: `?id=${item}`
                            }}>
                            {/* <a href="pet-details.html" target="_blank"><button className="card-pet-more" type="submit">Conocer</button></a> */}
                            <button className="card-pet-more" type="submit">Conocer</button>
                            </Link>
                        </div>
                    )

                    
                })
            }
            </div>
           
        </section>
    )
}

export default AdoptView