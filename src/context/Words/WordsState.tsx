import React, { useReducer, ReactNode, Children } from 'react'
import api from '../../api/api'
import { Word } from '../../interfaces/interfaces'
import { WordsContext } from './WordsContext'
import { WordsReducer } from './WordsReducer'

interface stateProps {
	children: ReactNode
}

export interface WordState {
	word: Word | null
	Words: Word[]
}

const INITIAL_STATE: WordState = {
	word: null,
	Words: [],
}

export const WordsState = ({ children }: stateProps) => {
	const [state, dispatch] = useReducer(WordsReducer, INITIAL_STATE)

	const getGlossary = async () => {
		const { data } = await api.get('localhost:4000/api/glossary/')
		console.log(data)
		try {
			dispatch({
				type: 'GET_GLOSSARY',
				payload: data,
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<WordsContext.Provider
			value={{
				...state,
				getGlossary,
			}}
		>
			{children}
		</WordsContext.Provider>
	)
}
