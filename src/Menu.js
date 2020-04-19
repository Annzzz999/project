import React, { Component } from 'react';
import './Menu.css'


export default class Menu extends Component {
    render () {
        return(
            <div className = 'TopMenu'>

                <div>
                    <ul>
                        <li>Рецепт1
                            <ul className = 'SubMenu'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            </ul>
                        </li>
                        <li>Рецепт2</li>
                        <li>Рецепт3</li>
                    </ul>    
                </div>

               

            </div>
        )

    }


}