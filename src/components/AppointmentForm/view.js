import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function AppoinmentForm({handleAppointments}) {
	// States

	const [cita, setCita] = useState({
		petName: '',
		ownerName: '',
		date: '',
		time: '',
		symptoms: '',
	});

	const [errorAlert, setErrorAlert] = useState(false);

	const {petName, ownerName, date, time, symptoms} = cita;

	const handleChange = (e) => {
		const {name, value} = e.target;

		setCita({...cita, [name]: value});
	};

	const submitForm = (e) => {
		e.preventDefault();

		// Validación

		if (
			petName.trim() === '' ||
			ownerName.trim() === '' ||
			date.trim() === '' ||
			time.trim() === '' ||
			symptoms.trim() === ''
		) {
			setErrorAlert(true);
			setTimeout(() => {
				setErrorAlert(false);
			}, 3000);

			return;
		} else {
			cita.id = uuidv4();

			handleAppointments(cita);
		}

		//resetear Formulario

		setCita({
			petName: '',
			ownerName: '',
			date: '',
			time: '',
			symptoms: '',
		});
	};

	return (
		<Fragment>
			<h2>Crear Cita</h2>
			{errorAlert ? (
				<div className='alert alert-danger'>
					Todos los campos son obligatorios
				</div>
			) : null}
			<form onSubmit={submitForm}>
				<div className='form-group'>
					<label htmlFor='petName'>Nombre de la Mascota</label>
					<input
						type='text'
						className='form-control'
						name='petName'
						placeholder='Nombre de la Mascota'
						onChange={handleChange}
						value={petName}
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='ownerName'>Nombre del Propietario</label>
					<input
						type='text'
						className='form-control'
						name='ownerName'
						placeholder='Nombre del propietario'
						onChange={handleChange}
						value={ownerName}
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='date'>Fecha</label>
					<input
						type='date'
						className='form-control'
						name='date'
						onChange={handleChange}
						value={date}
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='time'>Hora</label>
					<input
						type='time'
						className='form-control'
						name='time'
						placeholder='Nombre de la Mascota'
						onChange={handleChange}
						value={time}
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='symptoms'>Sintomas</label>
					<textarea
						className='form-control'
						name='symptoms'
						placeholder='Breve descipción de los sintomas'
						onChange={handleChange}
						value={symptoms}
					></textarea>
				</div>
				<button type='submit' className='btn btn-primary btn-block'>
					Agragar Cita
				</button>
			</form>
		</Fragment>
	);
}

export default AppoinmentForm;
