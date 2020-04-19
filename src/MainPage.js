import React, { Component } from 'react';
import './MainPage.css'
import Object from './Object'
import Menu from './Menu'
import './Menu.css'
export default class MainPage extends Component {
    render () {
        return(

            <div>
                
                <div>
                    <h1 className = 'MainTitle'>заголовок раздела</h1>
                </div>
<Menu></Menu>
                <div>
                    <Object></Object>
                </div>
                


            </div>
        )

    }


}