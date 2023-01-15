import React from 'react';
import Card from './Card';
import image1 from './../assets/image1.jpg';
import image2 from './../assets/image2.jpg';
import image3 from './../assets/image3.jpg';

const cards = [
  {
    id: 1,
    image: image1,
    title: "AshkoreDev Linkedin",
    url: "https://www.linkedin.com/in/AshkoreDev/"
  },
  {
    id: 2,
    image: image2,
    title: "AshkoreDev GitHub",
    url: "https://github.com/AshkoreDev"
  },
  {
    id: 3,
    image: image3,
    title: "AshkoreDev Twitter",
    url: "https://twitter.com/AshkoreDev"
  }
];

function Cards() {

	return(

		<section className="container h-100 d-flex justify-content-center align-items-center">
			<div className="row">

        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card image={card.image} title={card.title} url={card.url}/>
            </div>
          ))
        }

			</div>
		</section>	
	);
}

export default Cards;