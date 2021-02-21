import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './BranchInfoForm.scss';

const BranchInfoForm = ( {
	initials, onInitialsChange, onNumberChange, onNameChange, onInitialsBlur
} ) => (
	<Form.Row>
		<Col>
			<Form.Control onBlur={onInitialsBlur} placeholder="Initials" value={initials} onChange={onInitialsChange} />
		</Col>
		<Col>
			<Form.Control placeholder="Number" onChange={onNumberChange} />
		</Col>
		<Col xs={7}>
			<Form.Control placeholder="Name" onChange={onNameChange} />
		</Col>
	</Form.Row>
);

export default BranchInfoForm;
