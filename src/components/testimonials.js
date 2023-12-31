import React from 'react'
import './testimonials.css'
import vector from '../photo/Vector.png'
import { Card, Typography } from '@mui/material'

const Testimonials = () => {
	return (
		<Card class="testimonials" id="testimonials">
			<Typography variant="h2" class="h2">
				Отзывы
			</Typography>
			<Card class="all-testimonials">
				<Card class="testimonial">
					<img src={vector} />
					<Typography variant="p" class="people">
						Игорь Антонов
					</Typography>
					<Typography variant="p" class="main">
						Обратилась к Aveji по рекомендации. Команда сразу поняла, какой
						дизайн я хочу. Предоставили несколько вариантов и в течение недели
						сделали наброски. Итог понравился, все на высшем уровне.
					</Typography>
				</Card>
				<Card class="testimonial">
					<img src={vector} />
					<Typography variant="p" class="people">
						Ольга Иванова
					</Typography>
					<Typography variant="p" class="main">
						После пары заказов у компании Aveji убедилась, что за мебелью теперь
						только к ним. Абсолютно любые решения, в любых размерах и
						форм-факторе, то что нужно!
					</Typography>
				</Card>
				<Card class="testimonial">
					<img src={vector} />
					<Typography variant="p" class="people">
						Аркадий Макаров
					</Typography>
					<Typography variant="p" class="main">
						Aveji — настоящие профессионалы своего дела. Быстро поняли мою
						задумку, сделали дизайн, согласовали и изготовили мебель. А потом
						еще и бесплатно все собрали на месте. Большое спасибо!
					</Typography>
				</Card>
			</Card>
		</Card>
	)
}

export default Testimonials