
import React from 'react'
import { Word } from '../../interfaces/interfaces'
import { WordState } from './WordsState'

type WordsActionType = { type: 'GET_GLOSSARY'; payload: Word[] }

export const WordsReducer = (state: WordState, action: WordsActionType) => {
	switch (action.type) {
		case 'GET_GLOSSARY':
			return {
				...state,
				Words: action.payload,
			}

		default:
			return state
	}
}
