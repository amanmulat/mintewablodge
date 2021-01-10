import React from 'react'


export const  Reserve = props => {
    return (
        
 <div className="container-reserve">
    <div className="container-time">
        <h2 className="heading">Time Open</h2>
        <h3 className="heading-days">Monday-Friday</h3>
        <p>7am - 11am (breakfast)</p>
        <p>11am - 10pm (lunch/dinner)</p>

        <h3 className="heading-days">Saturday and sunday</h3>
        <p>9am - 1am (breakfast)</p>
        <p>1am - 10pm (lunch/dinner)</p>

        <hr/>

        <h4 className="heading-phone">Call Us: (123) 45-45-456</h4>
    </div>

    <div className="container-form">
        <form action="#">
            <h2 className="heading heading-yellow">Reservation Online</h2>

            <div className="form-field">
                <p>Your Name</p>
                <input type="text" placeholder="Your Name"/>
            </div>

            <div className="form-field">
                <p>Your email</p>
                <input type="email" placeholder="Your email"/>
            </div>
            <div className="form-field">
                <p>Date</p>
                <input type="date"/>
            </div>

            <div className="form-field">
                <p>Time</p>
                <input type="time"/>
            </div>
            
            <div className="form-field">
                <p>How many people?</p>
                <select name="select" id="#">
                    <option value="1">1 person</option>
                    <option value="2">2 persons</option>
                    <option value="3">3 persosn</option>
                    <option value="4">4 persons</option>
                    <option value="5">5 persons</option>
                    <option value="5+">5+ persons</option>
                </select>
            </div>
            <button className="btn">Submit</button>
        </form>
    </div>
</div>


    )
}
