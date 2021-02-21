import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CopiedIcon from '@material-ui/icons/AssignmentTurnedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import className from 'classnames';
import { ReactComponent as CopyIcon } from '../../icons/clipboard.svg';

const CopyToClipboardButton = ( { text } ) => {
	const [ copied, setCopied ] = useState( false );
	const handleClick = () => {
		navigator.clipboard.writeText( text );
		setCopied( true );
	};
	const Icon = copied ? <CopiedIcon /> : <SvgIcon component={CopyIcon} />;
	const displayText = copied ? 'Branch name copied!' : 'Copy to clipboard!';

	return (
		<Button
			className={className( 'Button', { copied } )}
			variant="outline-secondary"
			onClick={handleClick}
		>
			{Icon} {displayText}
		</Button>
	);
};

export default CopyToClipboardButton;
