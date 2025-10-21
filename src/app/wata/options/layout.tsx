import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'W.A.T.A - Opciones | Configuración del Juego',
	description: 'Configura las opciones del juego W.A.T.A - Where Are The Alices?',
	alternates: { canonical: '/wata/options' },
	openGraph: {
		title: 'W.A.T.A - Opciones | Configuración del Juego',
		description: 'Ajusta la experiencia de juego en W.A.T.A - Where Are The Alices?',
		url: 'https://zimmzimmgames.com/wata/options',
		siteName: 'ZimmZimm Games',
		locale: 'es_ES',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'W.A.T.A - Opciones | Configuración del Juego',
		description: 'Configura las opciones del juego W.A.T.A - Where Are The Alices?'
	},
	robots: {
		index: true,
		follow: true
	}
}

export default function OptionsLayout({ children }: { children: React.ReactNode }) {
	return children
}


