import React, { createElement } from 'react';
export default function SectionRenderer({ sections, data }) {
	return (
		<>
			{sections && sections.length ? (
				<React.Fragment>
					{sections.map((sec) => {
						return createElement(sec.template, {
							data: data,
							id: sec.name,
							key: sec.name,
							display: sec.display,
						});
					})}
				</React.Fragment>
			) : null}
		</>
	);
}
