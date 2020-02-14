import React, { Component } from 'react';
import axios from 'axios';

import Table from '../../components/Table/Table';


class TableBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            // selectedPostId: null
        }
    }     
   
    componentDidMount(){
      console.log("mount");
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        // const res = response.data.slice(0, 1);
        this.setState({data:response.data});
      })
    }
    // componentDidMount () {
    //     axios.get( 'https://jsonplaceholder.typicode.com/users' )
    //         .then( response => {
    //             const res = response.data.slice(0, 4);
    //             // const updatedPosts = posts.map(post => {
    //             //     return {
    //             //         ...post,
    //             //         author: 'Max'
    //             //     }
    //             // });
    //             this.setState({data: res});
    //             // console.log( response );
    //         } );
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }

    render () {
        const isCalled=this.state.data.length;
     console.log("render")
        return (
            <div>
            {isCalled>0?(          
                <section>                                    
                    <Table data={this.state.data} />               
                </section>               
           
        ):false}
        </div>
        )
    }
}

export default TableBuilder;