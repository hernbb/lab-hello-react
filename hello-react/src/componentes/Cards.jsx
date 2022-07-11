import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

function Cards(){
  return  (<div className="card">
        <div className="">
            <img src={icon1} alt="icon1"/>
            <h3>Declarative</h3>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
        </div>
        <div>
            <img src={icon2} alt="icon2"/>
            <h3>Declarative</h3>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
        </div>
        <div>
            <img src={icon3} alt="icon3"/>
            <h3>Declarative</h3>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
        </div>
        <div>
            <img src={icon4} alt="icon4"/>
            <h3>Declarative</h3>
            <p>React makes it <br/> painless to create <br/> interactive UIs</p>
        </div>
    </div>)
}

export default Cards;