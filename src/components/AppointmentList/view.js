import React, {Fragment} from 'react';

function AppointmentList({citas}) {
	return (
		<Fragment>
			{!citas.length ? (
				<h2>No hay citas agendadas</h2>
			) : (
				<h2>Gestiona tus Citas</h2>
			)}

			{citas.map((cita, i) => {
				return (
					<div key={i} className='card m-1'>
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
							<button className='btn btn-danger'>Eliminar</button>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default AppointmentList;
