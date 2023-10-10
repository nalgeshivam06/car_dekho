import React from 'react'
import { Link } from 'react-router-dom';
function Caritems(props) {
    let { title, imageURL } = props;
    let id = 1;
    return (
        <div>
            <div className="card" style={{ width: "24rem" }} >
                <img src={imageURL} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title"><strong>{title}</strong></h5>
                    {/* <div className="container" style={{ display:"flex"}}>
                        <div style={{float:"left"}}>
                        <i className="fa-solid fa-user-group mx-2 flex-d"><span className='custom-text'> 4 People</span></i>
                        <i className="fa-solid fa-gas-pump"><span className='custom-text'> Hybrid </span></i>
                        </div>
                        <div style={{float:"right"}}>
                        <i className="fa-solid fa-gauge"><span className='custom-text'> 6.1km/ltr</span></i>
                        <i className="fa-solid fa-circle-user"><span className='custom-text'> Automatic</span></i>
                        </div>
                    </div>       */}


                    <div className="icon-container">
                        <i className="fa-solid fa-user-group mx-2 flex-d"></i>
                        <i className="fa-solid fa-gas-pump"></i>
                        <i className="fa-solid fa-gauge"></i>
                        <i className="fa-solid fa-circle-user"></i>
                    </div>
                    <div className="para-container">
                        <p>4 People</p>
                        <p>Hybrid</p>
                        <p>6.1km/ltr</p>
                        <p>Automatic</p>
                    </div>
                    
                    <h4 style={{ float: "left", color: "blue" }}>$1500</h4>
                    <p style={{ margin: "5px", display: "inline" }}>/hr</p>
                    <button className='cart-btn' > Rent Now</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Caritems



