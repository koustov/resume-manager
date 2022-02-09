const Macros = [
	{
		key: '>',
		rep: '&gt;',
	},
	{
		key: '<',
		rep: '&lt;',
	},
	{
		key: '__ignore__',
		rep: '',
	},
	{
		key: '__LINEBREAK__',
		rep: '<br/>',
	},
	{
		key: '__LISTITEM__',
		rep: '<li>',
	},
	{
		key: '__LIST__',
		rep: '<ol>',
	},
	{
		key: '__LISTITEMEND__',
		rep: '</li>',
	},
	{
		key: '__LISTEND__',
		rep: '</ol>',
	},
];

export const getTextFormatted = (text, data) => {
	if (text) {
		let s = text;
		Macros.forEach((m) => {
			var re = new RegExp(m.key, 'gi');
			s = s.replace(re, m.rep);
		});

		const res = { __html: s };
		return res;
	} else {
		return { __html: '<></>' };
	}
};
