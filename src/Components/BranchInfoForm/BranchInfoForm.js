import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './BranchInfoForm.scss';

const BranchInfoForm = ( {
	initials, number, name, onInitialsChange, onNumberChange, onNameChange
} ) => (
	<Form.Row>
		<Col>
			<Form.Control placeholder="Initials" value={initials} onChange={onInitialsChange} />
		</Col>
		<Col>
			<Form.Control placeholder="Number" value={number} onChange={onNumberChange} />
		</Col>
		<Col xs={7}>
			<Form.Control placeholder="Name" value={name} onChange={onNameChange} />
		</Col>
	</Form.Row>
);

export default BranchInfoForm;
