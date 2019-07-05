import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import PreviewCollection from '../../component/Preview-Collection/preview-collection.component.jsx';
export default class Showpage extends Component {

    constructor(){
        super();
        this.state ={
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections}= this.state;
        return (
            <div className='shop-page'>      
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>

                    ) )
                }
            </div>
        )
    }
}
