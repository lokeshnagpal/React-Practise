import React,{Component} from 'react';
import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';
class Counter extends Component{

    state={
        counter:0
    }

    counterHandler = (action,value) => {
        switch(action){
            case 'inc':
                this.setState((prevState)=>{
                    return {
                        counter:prevState.counter + 1
                    }
                })
                break;
                case 'dec':
                    this.setState((prevState)=>{
                        return {
                            counter:prevState.counter - 1
                        }
                    })
                    break;   
                    case 'add':
                        this.setState((prevState)=>{
                            return {
                                counter:prevState.counter + value
                            }
                        })
                        break;         
            default :
              break;           
        }
    }

    render(){
        return(
            <div>
                <CounterOutput value={this.state.counter}></CounterOutput>
                <CounterControl label="Increment" clicked={() => this.counterHandler('inc')}></CounterControl>
                <CounterControl label="Decrement" clicked={()=> this.counterHandler('dec')}></CounterControl>
                <CounterControl label="Add" clicked={()=> this.counterHandler('add',10)}></CounterControl>
            </div>
        )
    }
    
}

export default Counter