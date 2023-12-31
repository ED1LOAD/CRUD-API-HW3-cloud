import React from 'react'
import './hero.css'
import first from '../photo/first.png'
import second from '../photo/second.png'
import { Card, Typography } from '@mui/material'


const Hero = () => {
	return (
		<Card class="hero">
			<div class="upper-text">
				<Typography variant="h1" class="h1" >Эксклюзивная и нестандартная мебель для дома</Typography>
				<p>
					<a class="order" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
						target="_blank">
						Заказать проект
					</a>
				</p>
			</div>
			<Typography variant="p" class="text">Мы можем произвести любую мебель для вашего проекта и найти
				производственное решение любой задумки.
			</Typography>
			<p>
				<a class="order-mob" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
					target="_blank">
					Заказать проект
				</a>
			</p>
			<img class="right-pic" src={first} />
			<img class="left-pic" src={second} />
		</Card>
	)
}

export default Hero