import React, {Component} from 'react';
import GifList from '../components/GifList';

class GifListContainer extends Component {
    
  
    
    render() {

       return <GifList images={this.props.images} />
    }

}

export default GifListContainer