const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const credSource = path.resolve('credentials', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'credentials');

	return src(credSource).pipe(dest(credDestination));
}
