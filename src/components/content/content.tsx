import msg from '../../img/svgexport-27.svg'
import './content.css';
import exit from '../../img/svgexport-28.svg'
import sext from '../../img/sextou.png'
import comentarTwitter from '../../img/svgexport-22.svg'
import compartiTwitter from '../../img/svgexport-23.svg'
import curtirTwitter from '../../img/svgexport-24.svg'
export function TwitterContent(){
    return(
        <div className="content">
            <div className="top">
                <img src={msg} alt="" width={20}/> <h1>Talvez Você Curta . <a href="#">Ver mais</a></h1>
                <img src={exit} alt="" id='exit'/>
            </div>
            <div className="conteudo">
                <div className="home-2"></div>
                <div className="info-user">
                    <h1>igor</h1> <p>@igorDev . 24 h</p>
                </div>
            </div>
            <div className="title">SEXTOUUUU COM 'S' DE SONOOOOOOO🥱🥱🥱🥱🥱🥱🥱</div>
            <div className="anuncio">
                
                <img src={sext} alt="" width={400}/>
            </div>
            <div className="mini-logo-2">
                  <p> <img id='comentar' src={comentarTwitter} alt="" width={20}/> 334</p>
                  <p><img id='enviar' src={compartiTwitter} alt="" width={20} /> 3.891</p>
                  <p><img id='curtir' src={curtirTwitter} alt="" width={20} /> 30,2 mil</p>
                </div>
        </div>
    );
}