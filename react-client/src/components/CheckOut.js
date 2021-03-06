import React, { Component } from 'react';

class CheckOut extends Component {

	constructor() {
		super()

		this.state = {
			updatedItems: [],
			parsedItems: []
		}
	}

	// Checks if the item clicked is already
	// in the parsedItems array, if it is then
	// it returns tru, if it's not then it
	// returns false
	alreadyAdded(itemId) {
		const parsedItems = this.state.parsedItems;

		console.log("parsedItems.length:" + parsedItems.length);

		for (let i = 0; i < parsedItems.length; i++) {
			console.log("checking if item is already added");
			if(parsedItems[i].id === itemId) {
				console.log("alreadyAdded returnning True");
				return true;
			}
		}

		console.log("alreadyAdded returnning False")
		return false;

	}

	// Checks if there is an obj with the same ID
	// as the itemId pass, if there is then it 
	// increases its quantity by 1
	increateItemQuantity(itemId) {
		let parsedItems = this.state.parsedItems;

		parsedItems.forEach( item => {
			if(item.id === itemId) {
				item.quantity++;
			}
			
			//item.id === itemId ? item.quantity++ : ""
		})

		this.setState({
			parsedItems: parsedItems
		});

	}

	// Remoe item from parsedItems array
	removeItem(id) {
		let currentItemsInCart = this.state.parsedItems;

		let newItemsInCart = currentItemsInCart.filter( item => {
			return item.id !== id ? item: "";
		});

		// console.log("New Items: " + newItemsInCart);

		this.setState({
			parsedItems: newItemsInCart
		})

		// removes the product from the shopping cart
		// array in the app.js state
		this.props.removeItem(id);
	}

	addItem(item){

		//const newItems = this.state.parsedItems.concat(item);
		//this.setState({ parsedItems: newItems })
		
		this.setState({ parsedItems: [...this.state.parsedItems, item] })
	}

	componentWillMount() {
		this.parseItemsQuantity();
		console.log("componentWillMount running!");

		//console.log("this.state.parsedItems:" + this.state.parsedItems.length)
	}

	parseItemsQuantity() {
		const items = this.props.shoppingCartItems;

		const parsedItems = this.state.parsedItems;

		items.forEach(item => {
			item.quantity = 0;
		})

		items.forEach( item => {
			
			if( parsedItems.length === 0 ) {
			
				item.quantity = 1;

				 parsedItems.push(item);

				//[...this.state.shoppingCartItems, item]
				//this.setState({ parsedItems: [...this.state.parsedItems, item] });

				//this.addItem(item);

				console.log("parsedItems Array empty, pusching first obj")
			} else {
				if( this.alreadyAdded(item.id) ) {
				// parsedItems.quantity += 1;
				//item.quantity += 1;
				this.increateItemQuantity(item.id);
				this.addItem(item);

				console.log("obj already added, increasing its quantity")
			} else if( !this.alreadyAdded(item.id) ) {
				//parsedItems.push(item);
				item.quantity = 1;

				this.addItem(item);

				console.log("obj not in array, pushing it..")
			}

			}

			
		}); //end of map

	}

	placeOrder() {
		console.log("Placing Order!!");
	}


	showItems() {
		const items = this.state.parsedItems;
		//const items = this.props.shoppingCartItems;
		//console.log("this.state.parsedItems size: ", items.length)

		// let updatedItems = 

		return items.map( (item, index) => {
			return (
				<div className="items-to-be-bought" key={index}>
					<ul>
						<li>{ item.name }</li>
						<li>Price: ${ item.price }</li>
						<li>Quantity: {item.quantity} </li>
					</ul>
					<img className = "image-checking-out" src = { item.image } alt="hahaha" />
					<div className="remove-item">
						<button onClick={ () => { this.removeItem(item.id) } }>x</button>
					</div>
				</div>
			)
		})
	}

	showForm() {
		return (
		  <form id="form" className="topBefore">
		
			<input id="name" type="text" placeholder="Name" />
		 	<input id="email" type="text" placeholder="E-mail" />
		 	<input id="cell-number" type="text" placeholder="Cell Number" />
		 	<input id="Address" type="text" placeholder="Address" />
		 	{/*<textarea id="message" type="text" placeholder="MESSAGE"></textarea>*/}
  			<input id="submit" type="submit" value="GO!" />
  
			</form>
		)
	}

	render() {
		return (
			<div className="checkout-section">

				<button className="back-to-shopping" onClick={ () => { this.props.getMode("buying") }} >Back to shopping</button>

				<div className="current-items">
					{/* this.parseItemsQuantity()*/ }
					{ this.showItems() }
				</div>

				<button onClick={ () => { this.placeOrder() } } className="place-order-button">Place Order</button>
				

				<div className="payment-section">
					{ this.showForm() }
				</div>
			</div>
		);
	}
}

export default CheckOut;