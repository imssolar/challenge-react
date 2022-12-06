import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Word } from '../../interfaces/interfaces'

interface ListProps {
	words: Word[]
}

export const List = ({ words }: ListProps) => {
	console.log(words)
	return (
		<Grid container>
			<Grid item>
				{words.map((w) => (
					<p>{`${w.name} is a ${w.description}`}</p>
				))}
			</Grid>
		</Grid>
	)
}
