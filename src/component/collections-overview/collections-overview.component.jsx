import React from 'react'
import {connect} from 'react-redux'
import './collections-overview.styles.scss'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'

import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../Preview-Collection/preview-collection.component';
 const CollectionsOverview = ({collections}) => (

    <div className="collections-overview">
    {
       collections.map(({id,...otherCollectionProps}) => (
          <PreviewCollection key={id} {...otherCollectionProps}/>
       ))
    }
    
    </div>



 )

 const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview

})

export default connect(mapStateToProps) (CollectionsOverview);
  
