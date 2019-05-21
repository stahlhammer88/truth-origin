import React, { Component } from 'react';
import './dropdown.scss';
import {Flip} from 'react-reveal';

class DropDown extends Component {

    state = {
        opened: false,
        closing: false,
        list: ['First', 'Second', 'Third']
    }

    clickHandler = () => {
        const {opened} = this.state;

        if (!opened) {
            this.setState({opened: true});
        }
        else {
            this.setState({closing: true}, () => {
                setTimeout(() => this.setState({opened: false, closing: false}), 500);
            })
        }       
    }

    render() {
        const {opened, list, closing} = this.state;
        return (
            <div className="ui-wrapper">
                <nav className="nav">
                    <ul>
                        <li>
                            <div onClick={this.clickHandler} className={`ui-dropdown ${opened ? 'opened' : ''}`}>
                                <i></i>Menu
                            </div>
                        </li>
                        <li>About Us</li>
                        <li>Feedback</li>
                    </ul>
                </nav>
                
                {opened && (
                    <div className={`content ${closing ? 'closing' : ''}`}>
                        <ul>
                            {list.map((item, i) => (
                                <Flip left duration={900} delay={i*250}>
                                    <li key={i}>
                                        <div className="caption">{item}</div>
                                        <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rerum eos est inventore similique repellat veritatis labore eaque.</div>
                                    </li>
                                </Flip>
                            ) )}
                        </ul>
                    </div>  
                )}                
            </div>            
        );
    }
}

export default DropDown;