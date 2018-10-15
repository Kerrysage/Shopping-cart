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
            <div>
                <form>
                    <label>Quantity: <input type="text" onChange={(e) => this.setState({Quantity: e.target.value}) } id="quantity" />
                    </label>
                    <input></input>
                    <label>Products: <input type="text" onChange={(e) => this.setState({Products: e.target.value}) } id="product" />
                    </label>
                    <select ref="dropDown" onChange={this.selectChanged}>
                        {this.renderOptions()}
                    </select>
                    <button onClick = {this.itemAdder}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddItem 