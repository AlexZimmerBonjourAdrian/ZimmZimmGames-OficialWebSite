// Routing configuration and helpers for ZimmZimm Games

export interface Route {
	path: string;
	name: string;
	description: string;
	component: string;
	exists: boolean;
}

export const routes: Route[] = [
	// Existing routes
	{
		path: '/',
		name: 'Inicio',
		description: 'Página principal',
		component: 'HomeSection',
		exists: true
	},
	{
		path: '/wata',
		name: 'W.A.T.A',
		description: 'Página principal del juego W.A.T.A',
		component: 'WATA',
		exists: true
	},
	{
		path: '/wata/options',
		name: 'Opciones',
		description: 'Configuración del juego',
		component: 'WATAOptions',
		exists: true
	},
	{
		path: '/wata/lore',
		name: 'Lore',
		description: 'Corrupted Wonderland — Final Letter of the Dormouse',
		component: 'WATALore',
		exists: true
	},
	{
		path: '/where-are-the-alices',
		name: 'Where Are The Alices',
		description: 'W.A.T.A game landing page',
		component: 'WhereAreTheAlices',
		exists: true
	},
	{
		path: '/about',
		name: 'About Us',
		description: 'About ZimmZimm Games',
		component: 'About',
		exists: true
	},

	// Planned routes
	{ path: '/wata/download', name: 'Descarga', description: 'Página de descarga', component: 'WATADownload', exists: false },
	{ path: '/wata/steam', name: 'Steam', description: 'Página de Steam', component: 'WATASteam', exists: false },
	{ path: '/wata/itchio', name: 'itch.io', description: 'Página de Itch.io', component: 'WATAItch', exists: false },
	{ path: '/wata/gamejolt', name: 'GameJolt', description: 'Página de GameJolt', component: 'WATAGameJolt', exists: false },
	{ path: '/wata/demo', name: 'Demo', description: 'Demo del juego', component: 'WATADemo', exists: false },
	{ path: '/wata/gallery', name: 'Galería', description: 'Galería de imágenes', component: 'WATAGallery', exists: false },
	{ path: '/wata/story', name: 'Historia', description: 'Historia del juego', component: 'WATAStory', exists: false },
	{ path: '/wata/extras', name: 'Extras', description: 'Contenido extra', component: 'WATAExtras', exists: false },
	{ path: '/wata/credits', name: 'Créditos', description: 'Créditos', component: 'WATACredits', exists: false },
	{ path: '/dev-journal', name: 'Dev Journal', description: 'Development journal', component: 'DevJournal', exists: true },
	{ path: '/faq', name: 'FAQ', description: 'Frequently asked questions', component: 'FAQ', exists: true },
	{ path: '/support', name: 'Support', description: 'Support and help', component: 'Support', exists: true },
	{ path: '/donaciones', name: 'Donaciones', description: 'Apoya el proyecto', component: 'Donations', exists: false },
	{ path: '/draconiano', name: 'Draconiano', description: 'Proyecto Draconiano', component: 'Draconiano', exists: false }
];

export function getExistingRoutes(): Route[] {
	return routes.filter(route => route.exists);
}

export function getWATARoutes(): Route[] {
	return routes.filter(route => route.path.startsWith('/wata'));
}

export function getMainRoutes(): Route[] {
	return routes.filter(route => !route.path.startsWith('/wata'));
}

export function findRouteByPath(path: string): Route | undefined {
	return routes.find(route => route.path === path);
}


