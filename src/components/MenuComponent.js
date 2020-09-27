import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = (props) => {

	const style = {
		cursor: 'pointer'
	};
	
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-12 m-1">
				<Card style={style}>
					<Link to={`/menu/${dish.id}`} >
						<CardImg src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Link>
				</Card>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
			</div>
            <div className="row">           
				{menu}
			</div>
		</div>
	);
}

export default Menu;