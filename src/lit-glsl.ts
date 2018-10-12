
// Remove all lines, that start with a //
let _removeCommentLines = true;

/**
 *
 */
export const glsl = (strings: TemplateStringsArray, ...values: any[]) => {
	let lines = strings.map(s => s.trim());
	return lines.join('\n');
};