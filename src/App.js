import React, {Fragment, useState, useEffect} from 'react';

import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
	// Arreglo de citas

	const [citas, setCitas] = useState([]);

	const handleAppointments = (cita) => {
		Object.keys(cita).map((key) => (cita[key] = cita[key].trim()));

		setCitas([...citas, cita]);
	};

	useEffect(() => {
		console.log(citas);
	}, [citas]);

	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-4 offset-sm-2'>
						<AppointmentForm handleAppointments={handleAppointments} />
					</div>
					<div className='col-sm-4 '>
						<AppointmentList />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
