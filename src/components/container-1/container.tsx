import './container.css'

import LogoTwitter from '../../img/twitter.svg'
import casaTwitter from '../../img/svgexport-2.svg'
import lupTwitter from '../../img/svgexport-29.svg'
import sinoTwitter from '../../img/svgexport-4.svg'
import msgTwitter from '../../img/svgexport-5.svg'
import favTwitter from '../../img/svgexport-6.svg'
import textTwitter from '../../img/svgexport-7.svg'
import homeTwitter from '../../img/svgexport-8.svg'
import infoTwitter from '../../img/svgexport-9.svg'


export function TwitterMenu(){
    return(
        <div className="root-container">
        <div className='container-one'>
            <img src={LogoTwitter} id='logo'  alt="" width={50}/>
            <img src={casaTwitter} alt="" width={30}/> <h1>Página Inicial</h1>
            <img src={lupTwitter} alt="" width={30}/> <h1>Explorar</h1>
            <img src={sinoTwitter} alt="" width={30}/> <h1>Notificações</h1>
            <img src={msgTwitter} alt="" width={30}/> <h1>Mensagens</h1>
            <img src={favTwitter} alt="" width={30}/> <h1>Itens salvos</h1>
            <img src={textTwitter} alt="" width={30}/> <h1>Listas</h1>
            <img src={homeTwitter} alt=""width={30} /> <h1>Perfil</h1>
            <img src={infoTwitter} alt="" width={30}/><h1>Mais</h1>
         
            <div className="home">
   <a href="#">Tweetar</a>
        </div>
    </div>
  
    </div>
    );
}
export default TwitterMenu();