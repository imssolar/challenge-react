import { createContext } from 'react'

import { Word } from '../../interfaces/interfaces'

interface ContextProps {
	word: Word | null
	Words: Word[]
	getGlossary: () => Promise<void>
}

export const WordsContext = createContext({} as ContextProps)
