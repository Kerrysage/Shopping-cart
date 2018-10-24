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

    render () {
        return (
            <div className="container">
            <div className="list-group">
                <div>
                    <p>Quantity</p>
                </div>
                <form>
                    {/* <label>Quantity</label> */}
                    <input type="number" min="0" className="col-md-12" />
                    <label>Products</label>
                    <select className="container" ref="dropDown" onChange={this.selectChanged}>
                        {this.renderOptions()}
                    </select>
                    <button onClick = {this.itemAdder}>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default AddItem 