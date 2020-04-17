import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {


    render() {
        console.log("list", this.props)

        return (
            <div>
                <ul>
                    {(this.props.items.length === 0) ? 'Je winkelwagen is leeg' : ''}
                    {this.props.items.map(item => <ListItem key={item.id} item={item} onClick={this.props.onClick} />)}

                </ul>

            </div>


        )

    }

}


export default List;