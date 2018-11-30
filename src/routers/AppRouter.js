import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage.js';
import Header from './../components/Header.js';
import AddExpensePage from './../components/AddExpensePage.js';
import EditExpensePage from './../components/EditExpensePage.js';
import HelpPage from './../components/HelpPage.js';
import NotFoundPage from './../components/NotFoundPage.js';






// BrowserRouter => once create a new router
// Route =>	for every single page

const AppRouter = () => (

    <BrowserRouter>

		<div>
			<Header/>
			<Switch>
	    		<Route path="/" component={ExpenseDashboardPage} exact={true}/>
	    		<Route path="/create" component={AddExpensePage }/>
	    		<Route path="/edit/:id" component={EditExpensePage} exact={true}/>
	    		<Route path="/help" component={HelpPage}/>
	    		<Route component={NotFoundPage}/>
	    	</Switch>
		</div>
    	

	</BrowserRouter>


);

export default AppRouter;