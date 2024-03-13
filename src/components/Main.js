import React from 'react'
import Footer from './Footer'
import '../styles/Main.css'
import Body from './Body'
import Top from './Top'
import Project from './Project'
import phone from "../img/phone.jpg"
import phone1 from "../img/phone1.jpg"


 


class Main extends React.Component{

    state = {
        Phones : [
            {
                "id":1,
                "brand":"Samsung Galaxy A34",
                "price":12.799,
                "rating":4.1,
                "imgURL":phone1
        
            },
            {
                "id":2,
                "brand":"Samsung S23",
                "price":31.999,
                "rating":4.7,
                "imgURL":phone1
            },
            {
                "id":3,
                "brand":"Infinix Zero30",
                "price":17.999,
                "rating":4.2,
                "imgURL":phone1
            },
            {
                "id":4,
                "brand":"Apple İphone 13",
                "price":38.799,
                "rating":4.4,
                "imgURL":phone1
            },
            {
                "id":5,
                "brand":"Samsung S21",
                "price":19.999,
                "rating":4.3,
                "imgURL":phone1
            },
            {
                "id":6,
                "brand":"Tecno Spark 10",
                "price":7.499,
                "rating":3.8,
                "imgURL":phone1
            },
            {
                "id":7,
                "brand":"Realme C55",
                "price":7.499,
                "rating":3.5,
                "imgURL":phone1
            },
            {
                "id":8,
                "brand":"Apple İphone 15",
                "price":54.299,
                "rating":4.7,
                "imgURL":phone1
            },
            {
                "id":9,
                "brand":"Reeder S19 Max Pro",
                "price":7.899,
                "rating":4.7,
                "imgURL":phone1
            }
         ],
            searchQuery:""
    }


    searchPhone = (Event) => {
        this.setState({ searchQuery: Event.target.value });
      }
    
      render() {
        let filterPhone = this.state.Phones.filter((phone) => {
          return phone.brand.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
        });
    
        return (
          <div className='container' id='main'>
            <Top searchPhoneProp={this.searchPhone} />
            <Body Phones={filterPhone} />
          </div>
        );
      }
    }
    
    export default Main;
