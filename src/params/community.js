/**
 * @param {string} param
 * @return {param is ('internship' | 'scholarship' | 'firstyear' | 'activity')}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	return param === 'internship' || 
         param === 'scholarship' || 
         param === 'firstyear' || 
         param === 'activity';
}
