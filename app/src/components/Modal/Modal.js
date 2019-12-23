import React from 'react';
import { ModalBackground, ModalNotContent } from './styled';

const Modal = props => {
	const { component, handleClose } = props;

	return (
		<ModalBackground
			id="modalBackground"
			onClick={e => {
				if (e.target.id === 'modalBackground') {
					handleClose(false);
				} else {
					e.preventDefault();
				}
			}}>
			<ModalNotContent id="modalContent" onClick={e => e.preventDefault()}>
				{component}
			</ModalNotContent>
		</ModalBackground>
	);
};

export default Modal;
