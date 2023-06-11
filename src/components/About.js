import React ,{useState} from 'react'

export default function About() {
    const [MyStyle, setMyStyle] = useState({
        backgroundColor:'white',
      color: 'black',
      radius : "3px"
    })
    const [BtnText,setBtnText]=useState("Enable Dark Mode")
  const ToggleStyle = () => {
    if (MyStyle.backgroundColor === 'white') {
      setMyStyle({
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white'
      , radius : "3px"
      })
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle({
        backgroundColor:"white",
        color: 'black',
        radius : "3px"
      })
      setBtnText("Enable Dark Mode")
    }
    
  }
  return (
    <div className="container my-3" style={MyStyle}>
      <h2>About us</h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={MyStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Foundation
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={MyStyle} aria-expanded="false" aria-controls="collapseTwo">
        History
      </button>
    </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={MyStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={MyStyle} aria-expanded="false" aria-controls="collapseThree">
        Reputation
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={MyStyle}data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate class that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
          </div>
          </div>
  </div>
        <button className=" btn btn-primary my-3" onClick={ToggleStyle}>{BtnText}</button>
            </div>
            )
        
}
