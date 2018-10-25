import React, { Component } from 'react';

class AddItem extends Component {
    renderOptions = () => {
        return this.props.AddItemList.map((product) => {
            return <option key={product.id}> {product.name}</option>
        })
    }

    selectChanged = (e) => {
        e.preventDefault();
        let selected = "";
        selected = e.target.options[e.target.selectedIndex].text;
        console.log("selected is ", selected);
    }

    itemAdder = (e) => {
        e.preventDefault();
        console.log("this.refs is ",this.refs); 

        let productAttributes = this.props.AddItemList.filter(product => product.name === this.refs.dropDown.value)
        console.log(productAttributes)
    }

    componentDidMount(){
        console.log("chris added this",this.props.AddItemList)
    }

    render () {
        return (
            <form className="container">
                <div className="list-group">
                    <div>
                        <p>Quantity</p>
                    </div>
                    <input onChange={this.props.modQuantity} input type="number" min="0" className="col-md-12" />
                    <div>
                        <label>Products</label>
                    </div>
                    <select onChange={this.props.modProduct} className="container">
                        <option defaultValue="Select an Option" selected>Select an Option </option>
                        {this.props.AddItemList.map(item => {
                            return <option prodID={item.id} price={item.priceInCents} value={item.name}>{item.name} </option>
                            })}
                    </select>
                    <div className="sep">
                        <button onClick = {this.props.modify} type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
             </form>
        )
    }
}

export default AddItem 