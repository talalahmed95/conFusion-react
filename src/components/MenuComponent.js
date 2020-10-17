import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const Menu = (props) => {

	const style = {
		cursor: 'pointer'
	};

	let menu = undefined;
    
    if (props.dishes.isLoading) {
        menu = <Loading />;
    }
    else if (props.dishes.errMess) {
        menu = <h4>{props.dishes.errMess}</h4>;
    }
    else {	
		menu = props.dishes.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card style={style}>
						<Link to={`/menu/${dish.id}`} >
							<CardImg src={baseUrl + dish.image} alt={dish.name} />
							<CardImgOverlay>
								<CardTitle>{dish.name}</CardTitle>
							</CardImgOverlay>
						</Link>
					</Card>
				</div>
			);
		});
	}

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
            <div className="row row-content">           
				{menu}
			</div>
		</div>
	);
}

export default Menu;