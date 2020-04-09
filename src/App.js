import React, {Fragment} from 'react';

import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
	return (
		<Fragment>
			<h1>Administrador de Pacientes</h1>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-3 offset-sm-3'>
						<AppointmentForm />
					</div>
					<div className='col-sm-3 '>
						<AppointmentList />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
