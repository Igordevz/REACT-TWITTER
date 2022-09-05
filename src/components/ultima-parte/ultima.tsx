import './ultima.css'
import lupTwitter from '../../img/svgexport-29.svg'
import notice from '../../img/notice.png'

export function BasicEnd(){
    return(
        <div className="root-end">
      <div className="inicio">
        <form action="#">
            <input type="text" placeholder="Buscar No Twitter" />
            <img src={lupTwitter} alt="" />
        </form>
      </div>
      <div className="main-content">
        <div className="subtitle">
            <h1>O que está acontecendo</h1>
            <div className="conteudo-end">
            <p>Música
·
AO VIVO</p>
        </div>
        <div className="infos-document">
        Rock in Rio: acompanhe os Tweets sobre o segundo dia de festival
       <br /> <span>Assuntos do Momento: <a href="">Ai Preto, Jason Derulo</a></span>

        </div>
        <div className="img-content">
        <img src={notice} alt="" width={100}/>
        </div>
        </div>
        </div>

       

      </div>
    );
}