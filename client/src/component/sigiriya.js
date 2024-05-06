import react from 'react';
import './sigiriya.css'
import s1 from './sigiriya/s1.jpg'
import s2 from './sigiriya/s2.png'
import s3 from './sigiriya/s3.jpg'
import s4 from './sigiriya/s4.jpg'
import s5 from './sigiriya/s5.jpg'
import s6 from './sigiriya/s6.jpg'

function Sigiriya(){
    return(
        <div className='sigiriya'>
<h1>Welcome To Sigiriya</h1>
<img src={s1} width="400px" height="300px"></img>
<img src={s2} width="400px" height="300px"></img>
<img src={s3} width="400px" height="300px"></img>
<img src={s4} width="400px" height="300px"></img>
<img src={s5} width="400px" height="300px"></img>
<img src={s6} width="400px" height="300px"></img>

<h2>About </h2>
<p> Sigiriya, site in central Sri Lanka consisting of the ruins of an ancient stronghold that was built in the late 5th century ce on a remarkable monolithic rock pillar. The rock, which is so steep that its top overhangs the sides, rises to an elevation of 1,144 feet (349 metres) above sea level and is some 600 feet (180 metres) above the surrounding plain.
Sigiriya, Sri Lanka
Sigiriya, Sri Lanka
Sigiriya, Sri Lanka, designated a World Heritage site in 1982.

The Sinhalese king Kashyapa I (reigned 477–495) built a palace in the shape of a monumental lion on the several acres of ground at the summit, intending it to be a safeguard against his enemies. However, the king was defeated in 495, and the palace fell into ruin. The site soon became a pilgrimage destination, however, and it is now a popular tourist spot. Visitors begin the final ascent to the top through the open paws of the lion, one of the few remaining portions of the palace that are still intact. Also notable are 21 rock paintings of apsaras (celestial singers and dancers). Sigiriya was designated a UNESCO World Heritage site in 1982.</p>
        </div>
    )
}
export default Sigiriya;