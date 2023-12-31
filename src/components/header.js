import React from 'react'
import './header.css'
import { AppBar, Link, List, ListItem, ListItemText, Typography, Button, Toolbar } from '@mui/material'
import image from '../photo/Vector1.png'
import burgerImg from '../photo/burger.png'
import { ThemeProvider } from "@mui/material/styles";
import customtheme from "../components/theme.js";

const Header = () => {
	return (
		<ThemeProvider theme={customtheme}>
			<AppBar position="static">
				<Toolbar class='header'>
					<img class="vector" src={image} />
					<List
						class="nav"
						component="div"
					>
						<ListItem>
							<Button href="#about" variant="text" style={{ height: "30px", color: 'white'}}>
								О нас
							</Button>
						</ListItem>
						<ListItem>
							<Button href="#projects" variant="text" style={{ height: "30px", color: 'white'}}>
								Проекты
							</Button>
						</ListItem>
						<ListItem>
							<Button href="#steps" variant="text" style={{ height: "30px", color: 'white'}}>
								Материалы
							</Button>
						</ListItem>
						<ListItem>
							<Button href="#testimonials" variant="text" style={{ height: "30px", color: 'white'}}>
								Отзывы
							</Button>
						</ListItem>
					</List>
					<Typography variant="p" class="number">+7 916 515 24 17</Typography>
					<img src={burgerImg}/>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}

export default Header