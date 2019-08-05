import React from 'react'
import './seccion.scss'


const SessionView=(props)=>{
    return(
        
 <section className="container-humano">
<div className="flat-form">
        <h2>Registro Humano</h2>
        <p> Este es un Registro único para el humano
            que va a dar en adopcion o adoptar, ya que los datos
            son importantes para otros humanos
        </p>
        <form>
<ul className="tabs">
   <li>
<input type="text" placeholder="Nombres"></input>
   </li>
   <li>
<input type="text" placeholder="Apellidos"></input>
   </li>
   <li>
<input type="date" placeholder="date"></input>
   </li>
   <li>
<input type="text" placeholder="Correo Electronico"></input>
   </li>
   <li>
<input type="password" placeholder="Contraseña"></input>
   </li>
   <li>
<input type="password" placeholder="Confirmar contraseña"></input>
   </li>
   <li>
<input type="text" placeholder="Telefono"></input>
   </li>
   <li>
<input type="text" placeholder="Dirección"></input>
   </li>
   <li>
<input type="text" placeholder="Codigo Postal"></input>
   </li>
   <li>
<select placeholder="estado">
<option value="no"> Estado..</option>
<option value="Aguascalientes">Aguascalientes</option>
    <option value="Baja California">Baja California</option>
    <option value="Baja California Sur">Baja California Sur</option>
    <option value="Campeche">Campeche</option>
    <option value="Chiapas">Chiapas</option>
    <option value="Chihuahua">Chihuahua</option>
    <option value="Coahuila">Coahuila</option>
    <option value="Colima">Colima</option>
    <option value="Distrito Federal">Distrito Federal</option>
    <option value="Durango">Durango</option>
    <option value="Estado de México">Estado de México</option>
    <option value="Guanajuato">Guanajuato</option>
    <option value="Guerrero">Guerrero</option>
    <option value="Hidalgo">Hidalgo</option>
    <option value="Jalisco">Jalisco</option>
    <option value="Michoacán">Michoacán</option>
    <option value="Morelos">Morelos</option>
    <option value="Nayarit">Nayarit</option>
    <option value="Nuevo León">Nuevo León</option>
    <option value="Oaxaca">Oaxaca</option>
    <option value="Puebla">Puebla</option>
    <option value="Querétaro">Querétaro</option>
    <option value="Quintana Roo">Quintana Roo</option>
    <option value="San Luis Potosí">San Luis Potosí</option>
    <option value="Sinaloa">Sinaloa</option>
    <option value="Sonora">Sonora</option>
    <option value="Tabasco">Tabasco</option>
    <option value="Tamaulipas">Tamaulipas</option>
    <option value="Tlaxcala">Tlaxcala</option>
    <option value="Veracruz">Veracruz</option>
    <option value="Yucatán">Yucatán</option>
    <option value="Zacatecas">Zacatecas</option>

</select>
   </li>
   <li>
   
       foto de perfil
   
<input type="file" name="imagen subida" 
accept="image/png,.jpg,.jpeg,image/gif"></input>
</li>
<li>


</li>
</ul>

</form>
</div>
<div>

<button className="button-2"> Inscribirse</button>
</div>
</section> //hasta aqui va bien





    )


}

export default SessionView