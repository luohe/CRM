/**
 * Created by admin on 2017/5/5.
 * xzqing
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from "react-addons-css-transition-group" ;
import { bindActionCreators } from 'redux'
import * as countActions from '../actions/CounterActions'

class Home extends Component {
  constructor ( props , context ) {
    super ( props , context ) ;
  }

  componentWillMount ( ) {
    document.body.style.margin = "0px" ;

    document.body.addEventListener ( 'touchmove' , ( ev ) => {
      ev.preventDefault ( ) ;
  	} ) ;
  }

	componentDidMount(){

	};
	render() {
		const { state, actions } = this.props;
		return (
			<div className="box">
				<div>
					<Link to="/customerVisit">
						我是一只小小小小鸟
					</Link>
				</div>
				<span>{state.counter}</span><br/>
				<button className="btn" onClick={actions.increment}>增加1</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	state: state
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(countActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)