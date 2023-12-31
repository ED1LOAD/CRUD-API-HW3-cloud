import React from 'react'
import './footer.css'
import { Card, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Card class="footer-web">
			<Card class="footer-info">
				<Typography variant="p">
					© 2023 Aveji
				</Typography>
				<Typography variant="p">
					Все права защищены
				</Typography>
			</Card>
			<p class="policy">Политика конфеденциальности / Оплата и доставка</p>
			<Card class="social">
				<Typography variant="p">
					Вконтакте
				</Typography>
				<Typography variant="p">
					Телеграм
				</Typography>
			</Card>
		</Card>
	)
}

export default Footer