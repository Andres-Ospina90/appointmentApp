import React, {Fragment} from 'react';

function AppoinmentForm() {
	return (
		<Fragment>
			<h2>Crear Cita</h2>
			<form>
				<div className='form-group'>
					<label htmlFor='petName'>Nombre de la Mascota</label>
					<input
						type='text'
						className='form-control'
						id='petName'
						placeholder='Nombre de la Mascota'
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='ownerName'>Nombre del Propietario</label>
					<input
						type='text'
						className='form-control'
						id='ownerName'
						placeholder='Nombre del propietario'
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='date'>Fecha</label>
					<input type='date' className='form-control' id='date'></input>
				</div>
				<div className='form-group'>
					<label htmlFor='time'>Hora</label>
					<input
						type='time'
						className='form-control'
						id='petName'
						placeholder='Nombre de la Mascota'
					></input>
				</div>
				<div className='form-group'>
					<label htmlFor='symptoms'>Sintomas</label>
					<textarea
						className='form-control'
						id='symptoms'
						placeholder='Breve descipción de los sintomas'
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
