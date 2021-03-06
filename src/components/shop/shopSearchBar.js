import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { reduxForm, Field } from 'redux-form';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'> 
            <FontAwesomeIcon icon={faSearch}/>
            <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
       
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query'  className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchBar} />
            </form>
        )
    }    
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'  
})(ShopSearchBar);

export default ShopSearchBar;
