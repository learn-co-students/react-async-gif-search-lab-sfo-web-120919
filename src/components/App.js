import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'
// the App component should render out the GifListContainer component 

class App extends React.Component {
  

  state = {
    query: "",
    images: []
  }



onQueryChange = (e) => {
   const newText = e.target.value
   this.setState({
     ...this.state,
     query: newText
   }, () => {
     console.log(this.state.query)
   })
}

handleGifQuery = () => {
    //console.log(this.state)
    const url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url).then(data => data.json()).then(data => this.setState({...this.state,
    images: data.data})).catch(err => console.log(err)) 
} 
  
 render() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch query={this.state.query} handleGifQuery={this.handleGifQuery} onQueryChange={this.onQueryChange}  />
        <GifListContainer images={this.state.images} />
    </div>
  )
 }
}

export default App
