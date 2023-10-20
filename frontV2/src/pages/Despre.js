import React,{useState} from 'react'
import poza1 from '../assets_poze/desprenoi111.jpg'
import poza2 from '../assets_poze/desprenoi2.jpg'
import poza3 from '../assets_poze/desprenoi3.jpg'
import '../styles/Despre.css'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'


function Despre() {
  function goLeft(){
    if(poza>0)setPoza(poza-1)
    else (setPoza(2))
  }
  function goRight(){
    if(poza<2)setPoza(poza+1)
    else setPoza(0)
  } 

  const poze=[poza1,poza2,poza3];
  const [poza,setPoza]=useState(0)

  return (
    <div className='despre'>
        <div className='despre-top' style={{backgroundImage:`url(${poze[poza]})`}}>
          <img src={ArrowLeft} className='arrow' alt='arrow' style={{left:'6%',
          borderRadius:'20px 0px 0px 20px'}} onClick={goLeft}/>
          <img src={ArrowRight} className='arrow' alt='arrow' style={{right:'6%',
          borderRadius:'0px 20px 20px 0px'}} onClick={goRight}/>

        </div>
        <div className='despre-bottom'>
            <h1>DESPRE NOI</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dedicarea pentru sport este mai mult decât o simplă plăcere, este o pasiune ce înflorește în fiecare dintre noi, conferindu-ne energie și vigoare. Este un impuls puternic ce ne mobilizează să ne depășim constant limitele, și ne transformă în versiuni mai bune ale noastre.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cu acest gând, ne-am propus să oferim un punct de acces, un portal către această lume plină de dinamism și bucurie. Dorim să oferim șansa tuturor să descopere această pasiune pentru sport, indiferent de vârstă sau condiție fizică.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Întrucât sportul nu este doar o formă de distracție, ci și o componentă esențială a sănătății și bunăstării noastre, dorim să-l facem accesibil la cât mai multe persoane. A fi activ, a te bucura de mișcare și competiție, înseamnă a alege o viață plină de vitalitate și sănătate.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Căci, la urma urmei, sportul este o celebrare a vieții în sine, un mod de a îmbrățișa și maximiza potențialul nostru uman. Prin sport, nu numai că ne îmbunătățim sănătatea fizică, dar ne cultivăm și spiritul de echipă, perseverența și respectul față de ceilalți. În acest sens, sportul nu este doar despre mișcare, ci și despre viață însăși.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ne vedem la teren!</p>
        </div>
    </div>
  )
}

export default Despre