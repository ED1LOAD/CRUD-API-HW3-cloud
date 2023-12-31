import React from 'react'
import './form.css'
import pic from '../photo/third.png'
import app from '../photo/app store.png'
import play from '../photo/google play.png'
import { Card, Typography, Box, TextField, Button } from '@mui/material'

const Form = () => {
	return (
		<Card class="form">
			<img class="pic" src={pic} />
			<Card class="form-text">
				<Typography variant="h2" class="h2">
					Хотите заказать проект?
				</Typography>
				<Typography variant="p" class="p">
					Оставьте заявку, и мы вам перезвоним
				</Typography>
				<Box
					component="form"
					class="main-text"
					sx={{
						'& > :not(style)': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField id="text-style" label="Имя" variant="standard" />
					<TextField id="text-style" label="E-mail" variant="standard" />
					<TextField id="text-style" label="Телефон" variant="standard" />
				</Box>
				<Button variant="contained" class="button">Отправить заявку</Button>
				<div class="apps">
					<a href="https://www.apple.com/ru/app-store/" target="_blank">
						<img src={app} />
					</a>
					<a href="https://yandex.ru/search/?text=google+play&clid=2411726&lr=213" target="_blank">
						<img src={play} />
					</a>
				</div>
			</Card>
		</Card>
	)
}

export default Form