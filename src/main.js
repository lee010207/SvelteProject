import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Kiri',
		flavor : 'cream',
		product : 'cheese'
	}
});

export default app;