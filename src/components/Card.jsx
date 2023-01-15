import React from 'react';
import PropTypes from 'prop-types';
import './../css/cards.css';

function Card({image, title="Website", url="#!"}) {

	return (
		<article className="card text-center bg-dark rounded-0 animate__animated animate__fadeInUp">
			<figure className="overflow">
				<img src={image} alt={title} className="card-img-top rounded-0"/>
			</figure>
			<div className="card-body text-light py-2 px-0">
				<h2 className="title card-title fs-5">{title}</h2>
				<p className="card-text text-secondary fs-6">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Tempora, omnis cumque minima unde eaque, possimus? Aperiam maiores suscipit earum, in minus rerum, itaque est, similique dolorum officia consequatur commodi officiis!</p>
				<a href={url} className="btn btn-outline-secondary rounded-0 mb-2 fs-6" target="_blank">Go to this website</a>
			</div>
		</article>	
	);
}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string
};

export default Card;