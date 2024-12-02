import React from 'react';

// Import product images
import menshirt from '../components/images/menshirt.png';
import nikesneaker from './images/nikesneaker.png';
import pumasneaker from './images/pumasneaker.png';
import alonzidress from '../components/images/alonzidress.png';
import watch from '../components/images/watch.png';
import cap from '../components/images/cap.png';
import jeans from '../components/images/jeans.png';
import longsleeves from '../components/images/longsleeves.png';

// Product data array
const ecommerceImg = [
  { id: 1, name: 'Men Shirt', details: 'Lorem ipsum, dolor sit amet', price: '$29', imgSrc: menshirt },
  { id: 2, name: 'Sneakers Nike', details: 'Lorem ipsum, dolor sit amet', price: '$39', imgSrc: nikesneaker },
  { id: 3, name: 'Puma Sneaker', details: 'Lorem ipsum, dolor sit amet', price: '$30', imgSrc: pumasneaker },
  { id: 4, name: 'Alonzi Dress', details: 'Lorem ipsum, dolor sit amet', price: '$19', imgSrc: alonzidress },
  { id: 5, name: 'Men Watch', details: 'Lorem ipsum, dolor sit amet', price: '$16', imgSrc: watch },
  { id: 6, name: 'Men Cap', details: 'Lorem ipsum, dolor sit amet', price: '$10', imgSrc: cap },
  { id: 7, name: 'Ladies Jeans', details: 'Lorem ipsum, dolor sit amet', price: '$35', imgSrc: jeans },
  { id: 8, name: 'Long Sleeves', details: 'Lorem ipsum, dolor sit amet', price: '$35', imgSrc: longsleeves },
];

const Imagesdata = () => (
  <div className="mappedpics">
    {ecommerceImg.map((product) => (
      <div className="pics" key={product.id}>
        <img className="innerpics" src={product.imgSrc} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.details}</p>
        <button className="btn">Place Order</button>
        <span>{product.price}</span>
      </div>
    ))}
  </div>
);

export default Imagesdata;
