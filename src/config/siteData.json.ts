export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // Por defecto es false. Establecer en true para habilitar algunas transiciones de vista de Astro 3.0
	author: {
		name: string;
		email: string;
		twitter: string; // Usado para el enlace a twitter (X)
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Actualiza este archivo con la información específica de tu sitio
const siteData: SiteDataProps = {
	name: "Elena Cibaja - Interiorismo",
	// El título y la descripción de tu sitio web (campos meta)
	title: "Elena Cibaja - Interiorismo",
	description:
		"Bienvenido a mi portfolio, donde podrás explorar mis proyectos de diseño de interiores y conocer más sobre mi trabajo en el sur de España.",
	useViewTransitions: true,
	// ¡Tu información aquí!
	author: {
		name: "Manuel Denis Developer | @madendev",
		email: "manueldenis.developer@gmail.com",
		twitter: "madendev",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/assets/images/elenaCibaja-Interiorismo.jpg",
		alt: "Elena Cibaja - Interiorismo",
	},
};

export default siteData;
