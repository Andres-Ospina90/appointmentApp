import React, {Fragment} from 'react';

function AppointmentList({cita, deleteAppointment, editAppointment}) {
	return (
		<Fragment>
			<div className='card m-1'>
				<div className='card-body'>
					<p className='card-text'>
						<strong>Mascota: </strong>
						{cita.petName}
					</p>
					<p className='card-text'>
						<strong>Propietario: </strong>
						{cita.ownerName}
					</p>
					<p className='card-text'>
						<strong>Fecha: </strong>
						{cita.date}
					</p>
					<p className='card-text'>
						<strong>Hora: </strong>
						{cita.time}
					</p>
					<p className='card-text'>
						<strong>Sintomas: </strong>
						{cita.symptoms}
					</p>

					<button
						className='btn btn-danger btn-block'
						onClick={() => deleteAppointment(cita.id)}
					>
						Eliminar
					</button>
				</div>
			</div>
		</Fragment>
	);
}

export default AppointmentList;
