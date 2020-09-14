// prettier-ignore
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, TodoPage } from "./pages";
import { withRoot } from "./withRoot";
import { AppBar } from "./components/Navigation";

function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/todo" component={TodoPage} />
			</Switch>
		</div>
	);
}

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.appFrame}>
				<AppBar />
				<Routes />
			</div>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

export default withRoot(App);
