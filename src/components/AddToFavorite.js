import React from 'react';

class AddToFavorite extends React.Component {

    handleFavorClick() {
        const item = this.props.data
        if (!localStorage.getItem(item.id)) {
            localStorage.setItem(item.id,JSON.stringify(item))
            this.forceUpdate()
        }
        else {
            localStorage.removeItem(item.id)
            this.forceUpdate()
        }
    }

    render() {
        const item = this.props.data
        const isFavorite = !!localStorage.getItem(item.id)
        return (
        <span>
          { isFavorite ?
            <span onClick={::this.handleFavorClick}
                  className={this.props.class}>★</span> :
            <span onClick={::this.handleFavorClick} 
                  className={this.props.class}>☆</span>
          }
        </span>
        );
    }
}

export default AddToFavorite;