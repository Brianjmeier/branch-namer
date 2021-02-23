import React from 'react';
import className from 'classnames';
import Button from 'react-bootstrap/Button';

import './ButtonWithAnimation.scss';

const ButtonWithAnimation = ( {
	onClick, transition, onAnimationEnd, children, disabled
} ) => (
	<Button
		className={className( 'ButtonWithAnimation', { transition } )}
		onClick={onClick}
		variant="outline-secondary"
		onAnimationEnd={onAnimationEnd}
		disabled={disabled}
	>
		{children}
	</Button>
);

export default ButtonWithAnimation;
