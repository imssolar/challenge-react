import { Home } from "../pages/Home/Home"

interface Route {
	path: string
	name: string
	component: () => JSX.Element
}

export const routes: Route[] = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
    // {
    //     path:'/edit-word'
    //     name:'Edit',
    //     component:Edit
    // }
]
