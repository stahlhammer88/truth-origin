import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import './main.scss';
import Discography from './components/Discography';
import Tour from './components/Tour';
import Shop from './components/shop/Shop';
import Footer from './components/header-footer/Footer';
import Header from './components/header-footer/Header';

const Routes = () => (
    <BrowserRouter>
        <div>            
            <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/> }/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/discography" component={Discography}/>
            <Route exact path="/tour" component={Tour}/>
            <Route exact path="/shop" component={Shop}/>
            <Footer/>            
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Routes/>, document.getElementById('root'));