import React , { Component } from 'react';
import { connect } from 'react-redux';

import { resendMessage } from '../ducks/select-data'

class RegisteredUsers extends Component{

    resendWelcomeMessage = (data) =>{
        const name = data.name;
        const surName = data.surname;
        const country = data.country;
        const bDay = data.bDay;
        const currentDate = new Date();
        const parseDate = new Date(bDay);
        const yourAge = currentDate.getFullYear() - parseDate.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        let message = `Hello, ${name} ${surName} from ${country}, on ${parseDate.getDay()} of ${monthNames[parseDate.getMonth()]} you will have ${yourAge} years!` 
        this.props.resendMessage(message)
    }

    render(){
        
        const storedUsers = JSON.parse(localStorage.getItem("data"));
        return(
            //this is the component that holds the user on localstorage to show them as reference
            storedUsers !== null &&
            <div>  
                <div className="mainTable"> 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storedUsers.map((data) =>
                            <tr>
                                <td 
                                    className="userNameMessage"
                                    value={this.data} 
                                    onClick={() => this.resendWelcomeMessage(data)}
                                >
                                    {`${data.name} ${data.surname}`}
                                </td>
                                <td>{data.country}</td>
                                <td>{data.bDay}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
               
                </div>
                {this.props.message &&
                   <p className={this.props.message ? "welcomeText" : ""}>
                    {this.props.message}
                   </p>
                }
                <p className="myName">Manuel Zapata</p> 
            </div>
            
        ); 
        
    }
}

const mS = state => {
    return {
        users: state.countries.users,
        message: state.countries.message
    };
  };

  const mD = {
    resendMessage
};
  

export default connect(mS, mD)(RegisteredUsers);