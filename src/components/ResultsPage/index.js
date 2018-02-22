import React, {Component} from 'react';
import './index.css';

class Thumbnails extends Component{
  state = {
    category:null
  }

  filterPostsByCategory = (posts, cat) => {

    const filtered = posts.filter(item => item.categories.indexOf(cat) > -1)
    return filtered;
  }

  componentDidMount (){

    if (this.props.match !== undefined){
      this.setState({
        category: this.props.match.params.category
      })
    }

  }

  render(){
    let selectedPosts = this.props.posts;
    if(this.props.posts && this.state.category !== 'all'){
      selectedPosts = this.filterPostsByCategory(this.props.posts, this.state.category);
    }

    return(
     <div className='ResultsPage'>
       {this.state.category &&
       <h3>{this.state.category}</h3>}

       <div className='results'>
         {selectedPosts &&
         selectedPosts.map((item,index) =>
           <a key={index} href={`/category/${item.id}`}>
             <img src={item.thumbnail} alt={item.title}/>
             <div>{item.title}</div>
           </a>)}

       </div>
     </div>
   )
  }
}

export default Thumbnails;
