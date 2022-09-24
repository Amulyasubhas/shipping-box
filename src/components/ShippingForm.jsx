// import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from "react";


function ShippingForm(props) {
    const [title, setTitle]= useState("SF");
    const [weight, setWeight]= useState("85");
    const [color, setColor]= useState("BLUE"); 
    const [id, setId]= useState("123446789");

    const handleSubmit= (e) => {
        e.preventDefault();
        //console.log("inside");

        const data= {
            Title: title,
            Weight: weight,
            Color: color,
            id: id
        };
        props.addToListCallback(data)
    };

    return (

    <form onSubmit={handleSubmit}>
        <div>
        <h3>Shipping Form</h3>
<input type="text" value={title} placeholder=" Title" onChange={(e) => setTitle(e.target.value) }/>
<br></br>
<input type="number" value={weight} placeholder=" Weight" onChange={(e) => setWeight(e.target.value) }/>
<br></br>
<label>Color</label>
<input type="color" />
<br></br>
<input type="text" value={id} placeholder=" Item id"onChange={(e) => setId(e.target.value) } />
<br></br>
<button type="submit" >Submit</button>

</div>
</form>
)
}

export default ShippingForm;