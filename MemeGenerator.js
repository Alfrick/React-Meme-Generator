import React from 'react'

class MemeGenerator extends React.Component{

	constructor(){
		super()
		this.state={
			topText: '',
			bottomText: '',
			randomImage: 'http://i.imgflip.com/1bij.jpg',
			allMemes:[]
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

componentDidMount(){

	fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(items => {
                console.log(items.data.memes)
    	 	this.setState({
    	 		allMemes: items.data.memes
    	 		
    	 	})    	 
     
     }

    	)
           
}

handleChange(e){
 
 const {name, value} = e.target
 this.setState({
 	[name] : value
 })

}

handleClick(e){
	e.preventDefault()
	const randomNo = Math.floor(Math.random() * this.state.allMemes.length)	
	this.setState({
		randomImage: this.state.allMemes[randomNo].url,
		topText: this.state.allMemes[randomNo].name
	})

}

	render(){
		return(
		<div>
			
          <form onSubmit={this.handleClick} >

          <input placeholder="Top Text" type="text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
           <br/>
          <input placeholder="Bottom Text" type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
          <br/>
          <button>Generator</button>
          </form>

          <div>
          <br/>

          <img src={this.state.randomImage} alt=""/>

          <h2>{this.state.topText}</h2>

          <h2>{this.state.bottomText}</h2>

          </div>
		
		</div>

			)
	}
}

export default MemeGenerator
