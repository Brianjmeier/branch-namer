import React, { useState } from 'react';
import { snakeCase } from 'snake-case';
import BranchInfoForm from './Components/BranchInfoForm/BranchInfoForm';
import CopyableTextArea from './Components/CopyableTextArea/CopyableTextArea';
import './App.scss';

function App() {
	const [ initials, setInitials ] = useState( localStorage.getItem( 'initials' ) );
	const [ issueNumber, setIssueNumber ] = useState();
	const [ issueName, setIssueName ] = useState();

	const branchName = issueName ? `${issueNumber}-${initials}-${snakeCase( issueName )}` : '';

	const saveInitials = () => {
		localStorage.setItem( 'initials', initials );
	};

	return (
		<div className="App">
			<h3 className="title">Branch Namer</h3>
			<BranchInfoForm
				initials={initials}
				onInitialsChange={e => setInitials( e.target.value )}
				onNumberChange={e => setIssueNumber( e.target.value )}
				onNameChange={e => setIssueName( e.target.value )}
				onInitialsBlur={saveInitials}
			/>
			<CopyableTextArea text={branchName} />
		</div>
	);
}

export default App;
