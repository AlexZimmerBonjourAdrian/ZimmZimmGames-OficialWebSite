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
		name: 'Home',
		description: 'Main page',
		component: 'HomeSection',
		exists: true
	},
	{
		path: '/where-are-the-alices',
		name: 'W.A.T.A: Where are the Alices?',
		description: 'W.A.T.A game landing page',
		component: 'WhereAreTheAlices',
		exists: true
	},
	{
		path: '/wata/options',
		name: 'Options',
		description: 'Game settings',
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

	// Planned routes
	{ path: '/wata/download', name: 'Download', description: 'Download page', component: 'WATADownload', exists: false },
	{ path: '/wata/steam', name: 'Steam', description: 'Steam page', component: 'WATASteam', exists: false },
	{ path: '/wata/itchio', name: 'itch.io', description: 'Itch.io page', component: 'WATAItch', exists: false },
	{ path: '/wata/gamejolt', name: 'GameJolt', description: 'GameJolt page', component: 'WATAGameJolt', exists: false },
	{ path: '/wata/demo', name: 'Demo', description: 'Game demo', component: 'WATADemo', exists: false },
	{ path: '/wata/gallery', name: 'Gallery', description: 'Image gallery', component: 'WATAGallery', exists: false },
	{ path: '/wata/story', name: 'Story', description: 'Game story', component: 'WATAStory', exists: false },
	{ path: '/wata/extras', name: 'Extras', description: 'Extra content', component: 'WATAExtras', exists: false },
	{ path: '/wata/credits', name: 'Credits', description: 'Credits', component: 'WATACredits', exists: false },
	{ path: '/about', name: 'About Us', description: 'About ZimmZimm Games', component: 'About', exists: false },
	{ path: '/dev-journal', name: 'Dev Journal', description: 'Development journal', component: 'DevJournal', exists: false },
	{ path: '/faq', name: 'FAQ', description: 'Frequently asked questions', component: 'FAQ', exists: false },
	{ path: '/support', name: 'Support', description: 'Support and help', component: 'Support', exists: false },
	{ path: '/donations', name: 'Donations', description: 'Support the project', component: 'Donations', exists: false },
	{ path: '/draconiano', name: 'Draconiano', description: 'Draconiano project', component: 'Draconiano', exists: false }
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


