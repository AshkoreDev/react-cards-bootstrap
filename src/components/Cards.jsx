import Card from './Card.jsx';
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

		<section className="container-fluid min-vh-100 py-4 d-flex justify-content-center align-items-center gap-5 flex-wrap">
        {
          cards.map((card) => <Card key={card.title} image={card.image} title={card.title} url={card.url}/>)
        }
		</section>	

	);
};

export default Cards;