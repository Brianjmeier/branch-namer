/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import CopiedIcon from '@material-ui/icons/AssignmentTurnedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import className from 'classnames';

import { ReactComponent as CopyIcon } from '../../icons/clipboard.svg';
import ButtonWithAnimation from '../ButtonWithAnimation/ButtonWithAnimation';
import CommitIcon from '../CommitIcon/CommitIcon';

const COPY_BRANCH_NAME = 'COPY_BRANCH_NAME';
const BRANCH_NAME_COPIED = 'BRANCH_NAME_COPIED';
const COPY_COMMIT_MESSAGE = 'COPY_COMMIT_MESSAGE';

const BUTTON_STATES = {
	COPY_BRANCH_NAME: {
		render: () => <Fragment> <SvgIcon component={CopyIcon} /> Copy to Clipboard! </Fragment>,
		nextState: BRANCH_NAME_COPIED
	},
	BRANCH_NAME_COPIED: {
		render: () => <Fragment> <CopiedIcon /> Branch name copied! </Fragment>,
		nextState: COPY_COMMIT_MESSAGE
	},
	COPY_COMMIT_MESSAGE: {
		render: () => <Fragment> <CommitIcon /> Copy commit messange! </Fragment>,
		nextState: COPY_BRANCH_NAME
	}
};

class CopyToClipboardButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			buttonOnTransition: false,
			buttonState: COPY_BRANCH_NAME
		};

		this._handleClick = this._handleClick.bind( this );
		this._handleTransitionEnd = this._handleTransitionEnd.bind( this );
	}

	_handleClick() {
		const {
			state: { buttonState },
			props: { branchName, commitMessage, onFinalState }
		} = this;

		const initialState = buttonState === COPY_BRANCH_NAME;
		const finalState = buttonState === COPY_COMMIT_MESSAGE;

		navigator.clipboard.writeText( initialState ? branchName : commitMessage );
		this.setState(
			prevState => ( {
				buttonOnTransition: initialState,
				buttonState: BUTTON_STATES[ prevState.buttonState ].nextState
			} )
		);

		if ( finalState ) { onFinalState(); }
	}

	_handleTransitionEnd() {
		this.setState(
			prevState => ( {
				buttonOnTransition: false,
				buttonState: BUTTON_STATES[ prevState.buttonState ].nextState
			} )
		);
	}

	render() {
		const {
			props: { branchName },
			state: { buttonOnTransition, buttonState },
			_handleClick,
			_handleTransitionEnd
		} = this;

		const copied = buttonState === BRANCH_NAME_COPIED;
		const commitMessage = buttonState === COPY_COMMIT_MESSAGE;

		return (
			<div className={className( 'CopyToClipboardButton', { copied, commitMessage } )}>
				<ButtonWithAnimation
					onClick={_handleClick}
					transition={buttonOnTransition}
					onAnimationEnd={_handleTransitionEnd}
					disabled={buttonOnTransition || !branchName}
				>
					{BUTTON_STATES[ buttonState ].render()}
				</ButtonWithAnimation>
			</div>
		);
	}
}

export default CopyToClipboardButton;
