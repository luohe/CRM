/**
 * xzqiang
 * Created by Administrator on 2017/1/17.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
	App,
	Main,
	Home,
	CustomerVisit,
	NotFoundPage,

} from './index'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/" component={Main}>
			<Route path="/customerVisit" component={CustomerVisit}/>
			<Route path="/etCustomer" component={Home}/>
			<Route path="/contacts" component={CustomerVisit}/>
			<Route path="/customerMap" component={CustomerVisit}/>
			<Route path="/businessOpportunities" component={CustomerVisit}/>
			<Route path="/cardScanning" component={CustomerVisit}/>
		</Route>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);