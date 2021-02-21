import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CopiedIcon from '@material-ui/icons/AssignmentTurnedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as CopyIcon } from '../../icons/clipboard.svg';

const CopyToClipboardButton = ( { text } ) => {
	const [ copied, setCopied ] = useState( false );
	const handleClick = () => {
		navigator.clipboard.writeText( text );
		setCopied( true );
	};
	const Icon = copied ? <CopiedIcon /> : <SvgIcon component={CopyIcon} />;

	return (
		<Button className="Button" variant="outline-secondary" onClick={handleClick}>{Icon} Copy to clipboard!</Button>
	);
};

export default CopyToClipboardButton;
