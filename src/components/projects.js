import React from 'react'
import './projects.css'
import first from '../photo/project1.png'
import second from '../photo/project2.png'
import third from '../photo/project3.png'
import fourth from '../photo/project4.png'
import fifth from '../photo/project5.png'
import sixth from '../photo/project6.png'
import arrow from '../photo/arrow.png'
import {Grid, Typography } from '@mui/material'

const Projects = () => {
	return (
		<Grid class="projects" id="projects">
			<Typography variant="h2" class="h2">
				Проекты
			</Typography>
			<Grid class="project">
				<Grid class="hoverwrap">
					<img class="pic" src={first} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Тумба под телевизор
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={second} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Красивая кухня
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={third} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Стул в гостиную
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={fourth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Шкафная композиция
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={fifth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
							Невероятнейшая кровать
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<Grid class="hoverwrap">
					<img class="pic" src={sixth} />
					<Typography variant="p" class="hovercap">
						<a href="#">
						Тумба для красивых фотографий
						</a>
					</Typography>
					<img class="arrow" src={arrow} />
				</Grid>
				<button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt</button>
				<button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>
			</Grid>
		</Grid>
	)
}

export default Projects