import React, { useContext, useEffect } from 'react'
import {
	Grid,
	TextField,
	Typography,
	TextareaAutosize,
	Button,
	Stack,
} from '@mui/material'
import { List } from '../../components/List/List'
import { WordsContext } from '../../context/Words/WordsContext'

export const Home = () => {
	const { getGlossary } = useContext(WordsContext)

	// useEffect(() => {
	// 	getGlossary()
	// }, [getGlossary])

	// useEffect(() => {
	// 	getGlossary()
	// }, [])

	const Words = [
		{
			_id: '638a916081e4ed642eeb8cb4',
			name: 'React',
			description: 'Library for JS',
		},
		{
			_id: '638a925734fa059d9040a4ad',
			name: 'JS',
			description: 'Language',
		},
	]

	return (
		<Grid
			container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '60px',
			}}
		>
			<Grid item sx={{ border: '1px solid black', padding: '100px' }}>
				<Typography
					sx={{
						marginBottom: '30px',
						padding: '1px',
						borderBottom: '1px solid black',
					}}
				>
					Glosario Tech
				</Typography>

				<Stack sx={{ display: 'flex', flexDirection: 'row' }}>
					<TextField variant="filled" label="New Word" />
					<Button variant="contained" sx={{ marginLeft: '22px' }}>
						+
					</Button>
				</Stack>
				<TextareaAutosize
					style={{ marginTop: '15px', width: '100%', height: '100px' }}
					minRows={3}
					placeholder="Meaning..."
				/>
				<Stack
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						marginTop: '15px',
					}}
				>
					<Button sx={{ marginRight: '10px' }} variant="contained">
						1
					</Button>
					<Button variant="contained">2</Button>
				</Stack>
				{Words ? <List words={Words} /> : 'Cargando...'}
			</Grid>
		</Grid>
	)
}
