import React, {Fragment} from 'react';

function AppointmentList({cita, deleteAppointment}) {
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

					<button className='btn btn-primary m-1'>Editar</button>
					<button
						className='btn btn-danger'
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
