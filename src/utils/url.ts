export function replaceImageSrc(html: string): string {
	console.log(html);
	console.log(html.replace(/src="\/static\//g, 'src="https://static.zoy.one/static/'));
	return html
		.replace(/src="\/static\//g, 'src="https://static.zoy.one/static/')
		.replace(/<p>(\s*<img[^>]*>\s*)<\/p>/g, '$1');
}
