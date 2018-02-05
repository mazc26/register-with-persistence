import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectData, setUser } from '../ducks/select-data'
 
class MainRegister extends Component{

    handleSubmit = (e) =>{
        e.preventDefault();
        const name = this.refs.name.value;
        const surName = this.refs.surname.value;
        const country = this.refs.country.value;
        const bDay = this.refs.bDay.value;
        const currentDate = new Date();
        const parseDate = new Date(bDay);
        const yourAge = currentDate.getFullYear() - parseDate.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        this.props.setUser(name,surName,country,bDay)
        let message = `Hello, ${name} ${surName} from ${country}, on ${parseDate.getDay()} of ${monthNames[parseDate.getMonth()]} you will have ${yourAge} years!` 
        this.message = message;
    }

    componentWillMount(){
        this.props.getSelectData();
    }
    
    render(){
       
        return(
            //This is the main register form where you introduce the data, and store it on 
            //the persistency local storage
            <div>
                <div className="mainFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label> <input ref="name" className="inputType" type="text" placeholder="name here"/ ><br/>
                    <label>Surname:</label> <input className="inputType" ref="surname" type="text" placeholder="surname here"/ ><br/>
                    <label>Countries:</label> 

                    <select className="inputType selectType" ref="country">
                    {this.props.countries &&    
                    this.props.countries.data.map((item)=>{
                        return <option key={item.name} value={item.name}>{item.name}</option>
                    })
                    }
                    </select><br/>
                    <label>Birthday:</label> <input className="inputType" ref="bDay" type="date" /><br/>
                    <input className="saveBtn" type="submit" value="save"/>
                </form>
               
            </div>
            {this.props.users &&
            <p className={this.props.users.length > 0 ? "welcomeText" : ""}>
                   {this.message} 
            </p>
                }
            </div>
            
        );  
    }
}

const mS = state => {
    return {
        countries: state.countries.countries,
        users: state.countries.users
    };
};
  

const mD = {
    getSelectData,
    setUser
};


export default connect(mS, mD)(MainRegister);