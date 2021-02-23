import React from 'react';
import { snakeCase } from 'snake-case';
import { useLocalStorage } from 'use-hooks';
import Alert from 'react-bootstrap/Alert';
import BranchInfoForm from './Components/BranchInfoForm/BranchInfoForm';

import './App.scss';
import CopyToClipboardButton from './Components/CopyToClipboardButton/CopyToClipboardButton';

function App() {
	const [ initials, setInitials ] = useLocalStorage( 'initials', '' );
	const [ issueName, setIssueName ] = useLocalStorage( 'issue-name', '' );
	const [ issueNumber, setIssueNumber ] = useLocalStorage( 'issue-number', '' );

	const clearFields = () => {
		setIssueNumber( '' );
		setIssueName( '' );
	};

	const branchName = issueName && initials ? `${issueNumber.trim()}-${initials.trim()}-${snakeCase( issueName )}` : '';
	const commitMessage = issueNumber ? `Close #${issueNumber} - ${issueName}` : '';

	return (
		<div className="App">
			<h3 className="title">Branch Namer</h3>
			<BranchInfoForm
				initials={initials}
				number={issueNumber}
				name={issueName}
				onInitialsChange={e => setInitials( e.target.value )}
				onNumberChange={e => setIssueNumber( e.target.value )}
				onNameChange={e => setIssueName( e.target.value )}
			/>
			<div className="container">
				<Alert variant="secondary" className="branch-name">{branchName}</Alert>
				<CopyToClipboardButton
					key={branchName}
					branchName={branchName}
					commitMessage={commitMessage}
					onFinalState={clearFields}
				/>
			</div>
		</div>
	);
}

export default App;
