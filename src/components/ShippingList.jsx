import React from 'react'
import { useState } from "react";
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items, setItems] = useState([]);
    const addToList = (item) => {
        console.log(item``);
        const itemsCopy = [...item];
        itemsCopy.push(items)
        setItems(itemsCopy)
    };

    return (
        <div>
            <ShippingForm addToListCallback={(value) => addToList(value)} />
            <table>
                <thead>
                    <th>Title</th>
                    <th>Weight</th>
                    <th>Color</th>
                    <th>Place</th>
                </thead>
                <tbody>{
                    items.map((item) => {
                        return (
                            <tr key={item.title}>
                                <td>{item.Title}</td>
                                <td>{item.Weight}</td>
                                <td>{item.Color}</td>
                                <td>{item.Place}</td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        </div>
    );
}
export default ShippingList