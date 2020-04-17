import React from 'react';
import ShoppingCart from './components/ShoppingCart'
import Grocerylist from './components/GroceryList'
import InputField from './components/InputField'


class Container extends React.Component {
    constructor(item) {
        super(item)
        this.state = {
            GroceryItems: [
                { id: 1, title: "Toilet papier" },
                { id: 2, title: "Griekse Yoghurt" },
                { id: 3, title: "Avocado" },
                { id: 4, title: "Bananen" },
                { id: 5, title: "Bospeen" },
            ],
            ShoppingListItems: [
                { id: 1, title: "Toilet papier", amount: 1 }
                // { id: 2, title: "Griekse Yoghurt" },
                // { id: 3, title: "Avocado" },
                // { id: 4, title: "Bananen" },
                // { id: 5, title: "Bospeen" },
            ],
        };
    }



    render() {
        const addItem = (newItem) => {
            let existing = this.state.ShoppingListItems.filter(item => item.title === newItem.title);
            if (existing.length > 0) {
                existing[0].amount = existing[0].amount + 1;
                this.setState({ ShoppingListItems: this.state.ShoppingListItems });
            }
            else {
                newItem.amount = 1
                this.setState({ ShoppingListItems: this.state.ShoppingListItems.concat(newItem) });
            }
        }

        const clickItem = (item) => {
            console.log(item);
            addItem(item);
        }
        const clearList = () => {
            console.log('Clear list');
            this.setState({ ShoppingListItems: [] });
        }
        const addManuelItem = (event) => {
            console.log(event.target.value);
            if (event.key === 'Enter') {
                addItem({ id: 1, title: event.target.value });
                event.target.value = '';
            }
        }



        return (
            <div>
                <header>Boodschappen</header>
                <div className="lijstje"> <h1>Boodschappenlijstje:</h1>
                    <Grocerylist items={this.state.GroceryItems} onClick={clickItem} />
                    {/* <button onClick={clickItem}>klik</button> */}
                </div>
                <div className="Winkelwagen">
                    <h1>Winkelwagen:</h1>
                    <ShoppingCart items={this.state.ShoppingListItems} />
                    <button className="clearButton" onClick={clearList}>Empty Cart</button>
                </div>
                <div className="Toevoegen">
                    <h1>Toevoegen:</h1>
                    <InputField onChange={addManuelItem} />
                </div>
            </div >


        )

    }

}



export default Container;