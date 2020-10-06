import mergeLeft from 'ramda/src/mergeLeft';
import parseToRgb from 'polished/lib/color/parseToRgb';
import path from 'ramda/src/path';
import pipe from 'ramda/src/pipe';
import rgba from 'polished/lib/color/rgba';

export const getColor = (color: string, alpha = 1): string => {
	return pipe(
		path(['theme', 'color', color]),
		parseToRgb,
		mergeLeft({ alpha }),
		rgba
	);
};
