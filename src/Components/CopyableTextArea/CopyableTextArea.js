import React from 'react';
import Alert from 'react-bootstrap/Alert';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

const CopyableTextArea = ( { text } ) => (
	<div className="CopyableTextArea">
		<Alert variant="secondary" className="branch-name">{text}</Alert>
		<CopyToClipboardButton text={text} />
	</div>
);

export default CopyableTextArea;
