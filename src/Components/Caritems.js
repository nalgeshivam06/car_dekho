import React from 'react'
function Caritems(props) {
    let { title, imageURL } = props;
    //let id = 1;
    return (
        <div>
            <div className="card" style={{ width: "24rem" }} >
                <img src={imageURL} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title"><strong>{title}</strong></h5>


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



