import React, {Fragment, useState, useEffect} from 'react';

import AppointmentForm from './components/AppointmentForm';
import AppointmentCard from './components/AppointmentCard';

function App() {
	// Arreglo de citas

	let citasIniciales = JSON.parse(localStorage.getItem('citas'));

	if (!citasIniciales) {
		citasIniciales = [];
	}

	const [citas, setCitas] = useState(citasIniciales);

	useEffect(() => {
		if (citasIniciales) {
			localStorage.setItem('citas', JSON.stringify(citas));
		} else {
			localStorage.setItem('citas', JSON.stringify([]));
		}
	}, [citas, citasIniciales]);

	const handleAppointments = (cita) => {
		Object.keys(cita).map((key) => (cita[key] = cita[key].trim()));

		setCitas([...citas, cita]);
	};

	const deleteAppointment = (id) => {
		const newCitas = citas.filter((cita) => cita.id !== id);
		setCitas(newCitas);
	};

	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-4 offset-sm-2'>
						<AppointmentForm handleAppointments={handleAppointments} />
					</div>
					<div className='col-sm-3 offset-1'>
						{!citas.length ? (
							<h2>No hay citas agendadas</h2>
						) : (
							<h2>Gestiona tus Citas</h2>
						)}
						{citas.map((cita, i) => {
							return (
								<AppointmentCard
									key={i}
									cita={cita}
									deleteAppointment={deleteAppointment}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
