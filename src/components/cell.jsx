import React from 'react'
import './cell.css'
class Grid extends React.Component {

    state = {
        class: ''
    }
    render () {    
        //this.props.cellDetails; // ishit, isshipt
        var className = '';

        if(this.props.info.isHit) {
            className = this.props.info.isHit ? 'ship-hit' : 'miss';
            console.log(className);
        }
        if (this.props.info.hasShipt) {
          className = this.props.info.hasShipt ? 'has-ship' : 'no-ship';
          console.log(className);
        }
        if (this.props.info.isMiss) {
          className = this.props.info.isMiss ? 'has-miss' : 'no-miss';
          console.log(className);
        }
        //  if (this.props.info.shipCoordinates) {
        //       className = this.props.info.shipCoordinates ? 'x' : 'y';
        //       console.log(className);
        // }
        //console.log(this.props.);

        return (
            <div onClick={this.props.onClickPlaceShips} className={`grid-piece ${className}`}>
                {this.props.index}
            </div>
            
        )
        

    }
    componentDidMount () {
        
        
    }
}

export default Grid