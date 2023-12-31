import React from 'react'
import './steps.css'
import { Card, List, ListItem, ListItemText, Typography } from '@mui/material'

const flexContainer = {
	display: 'flex',
	flexDirection: 'row',
	padding: 0,
};

const Steps = () => {
	return (
		<Card class="steps" id="steps">
			<Typography variant="h2" class="h2">
				Как мы работаем
			</Typography>
			<List class="steps-right-text">
				<Typography variant="p" class="p">
					Алгоритм работы с нами для удобства и понимания проекта
				</Typography>
				<ListItem class="step">
					<Typography variant="h3" class="h3">
						Идея
					</Typography>
					<Typography variant="p" class="step-right">
						Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или
						другой референс. А мы думаем над тем, как это реализовать, делаем
						технические чертежи и предлагаем решения по материалам.
					</Typography>
				</ListItem>
				<ListItem class="step">
					<Typography variant="h3" class="h3">
						Техническое задание
					</Typography>
					<Typography variant="p" class="step-right">
						Вместе с клиентом формулируем корректное ТЗ, которое включает в себя
						визуализацию изделия, эскизный чертёж с габаритами, информацию по
						материалам и отделке, срок реализации проекта и другие обязательные
						пункты.
					</Typography>
				</ListItem>
				<ListItem class="step">
					<Typography variant="h3" class="h3">
						Коммерческое предложение
					</Typography>
					<Typography variant="p" class="step-right">
						Предпочтительно используем натуральные материалы. Но любую смету
						можем оптимизировать, упростив материалы или конструктив. Сможем
						подстроиться под бюджет клиента и согласуем коммерческое предложение.
					</Typography>
				</ListItem>
				<ListItem class="step">
					<Typography variant="h3" class="h3">
						Подготовка рабочего проекта
					</Typography>
					<Typography variant="p" class="step-right">
						Создадим рабочую документацию и чертежи. Это фундамент качественного
						производства. На этом этапе утверждаем с клиентом все габариты и
						материалы, чертежи и приступаем к производству.
					</Typography>
				</ListItem>
				<ListItem class="step">
					<Typography variant="h3" class="h3">
						Производство и монтаж
					</Typography>
					<Typography variant="p" class="step-right">
						Производство занимает от 15 рабочих дней, в зависимости от сложности
						и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это
						сделаем быстро и аккуратно.
					</Typography>
				</ListItem>
			</List>
		</Card>
	)
}

export default Steps