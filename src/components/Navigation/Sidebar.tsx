import { Drawer as DrawerMui, Hidden } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { Drawer } from "./";
import { RootState } from "../../redux/reducers";

interface SidebarProps {
	mobileOpen: boolean;
	handleDrawerToggle: () => void;
}

export function Sidebar({ mobileOpen, handleDrawerToggle }: SidebarProps) {
	const classes = useStyles();
	const todoList = useSelector((state: RootState) => state.todoList);

	return (
		<>
			<Hidden mdUp>
				<DrawerMui
					variant="temporary"
					anchor={"left"}
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Drawer todoList={todoList} />
				</DrawerMui>
			</Hidden>
			<Hidden smDown>
				<DrawerMui
					variant="permanent"
					open
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Drawer todoList={todoList} />
				</DrawerMui>
			</Hidden>
		</>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
}));
