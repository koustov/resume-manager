import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './index.module.scss';

const ContainerEdtitable = ({ datafield, text, onChange }) => {
	const [editable, setEditable] = useState(false);
	const [originalText, setOriginalText] = useState(text);
	const onTextChange = (v) => {
		setEditable(false);
		if (onChange) {
			onChange(v);
		}
	};

	return (
		<div className={styles.container}>
			{editable ? null : (
				<div className={styles.buttonContiner}>
					<Button
						onClick={() => {
							setEditable(true);
							document.getElementById(`ce-${datafield}`).focus();
						}}>
						Edit
					</Button>
					<Button>Delete</Button>
					<Button>Save</Button>
				</div>
			)}
			<div
				id={`ce-${datafield}`}
				contentEditable={editable}
				onBlur={(e) => onTextChange(e.target.value)}>
				{text}
			</div>
		</div>
	);
};

export default ContainerEdtitable;
