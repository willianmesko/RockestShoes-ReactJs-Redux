import React from 'react';

 import { Container, Cart } from './styles';
 import { MdShoppingBasket } from 'react-icons/md';
 import logo from '../../assets/images/logo.svg'
 import {Link} from 'react-router-dom';
 import { connect } from 'react-redux';

function Header({cartSize}) {

    return (
        <Container>
            <Link to="/">
            <img src={logo} alt="Rocketshoes" />
            </Link>


            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );

}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
