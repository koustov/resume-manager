export const ProfileInformationTemplate = [
	{
		name: 'Theme',
		description: 'Theming Information',
		fields: [
			[
				{
					type: 'color',
					label: 'Sidebar Color',
					datafield: 'sidebar_color',
				},
			],
			[
				{
					type: 'color',
					label: 'Text Highlight',
					datafield: 'text_highlight',
				},
			],
			[
				{
					type: 'color',
					label: 'Text Color',
					datafield: 'text_color',
				},
			],
		],
	},
	{
		name: 'General',
		description: 'General Information',
		fields: [
			[
				{
					type: 'imageupload',
					label: 'Image',
					placeholder: 'Your Photo',
					datafield: 'image',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46f',
				},
			],
			[
				{
					type: 'text',
					label: 'First Name',
					placeholder: 'Your name',
					datafield: 'firstname',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46f',
				},
				{
					type: 'text',
					label: 'Last Name',
					placeholder: 'Last name',
					datafield: 'lastname',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46f',
				},
			],
			[
				{
					type: 'text',
					label: 'Designation',
					placeholder: 'Designation',
					datafield: 'designation',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
			],
			[
				{
					type: 'text',
					multiline: true,
					label: 'About',
					placeholder: 'About',
					datafield: 'about',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
			],
			[
				{
					type: 'text',
					label: 'Address Line 1',
					placeholder: 'Address',
					datafield: 'address1',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
				{
					type: 'text',
					label: 'Address Line 2',
					placeholder: 'Address',
					datafield: 'address2',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
				{
					type: 'text',
					label: 'Address Line 3',
					placeholder: 'Address',
					datafield: 'address3',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
			],
			[
				{
					type: 'text',
					label: 'Contact 1',
					placeholder: 'Contact',
					datafield: 'contact1',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
				{
					type: 'text',
					label: 'Contact 2',
					placeholder: 'Contact',
					datafield: 'contact2',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
			],
			[
				{
					type: 'text',
					label: 'Email 1',
					placeholder: 'Email',
					datafield: 'email1',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
				{
					type: 'text',
					label: 'Email 2',
					placeholder: 'Email',
					datafield: 'email2',
					id: 'af9a2335-0555-4f24-b8c8-25dd5deda46i',
				},
			],
		],
	},
	{
		name: 'Social',
		description: 'Social Information',
		fields: [
			[
				{
					type: 'text',
					label: 'Facebook',
					datafield: 'facebook',
				},
			],
			[
				{
					type: 'text',
					label: 'Tweeter',
					datafield: 'tweeter',
				},
			],
			[
				{
					type: 'text',
					label: 'Linkedin',
					datafield: 'linkedin',
				},
			],
			[
				{
					type: 'text',
					label: 'Youtube',
					datafield: 'youtube',
				},
			],
		],
	},
];
