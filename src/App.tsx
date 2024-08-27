import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import { Fragment, useState } from 'react';
import Button from './components/Button';
import CancelButton from './components/CancelButton';
import './App.css';

function App() {
	const items = ['New York', 'London', 'San Francisco', 'Tokyo', 'Paris'];
	const [alertVisible, setAlertVisibility] = useState(false);

	const handleSelectedItem = (item: string) => {
		console.log(item);
	};

	return (
		<Fragment>
			<div>
				{alertVisible && (
					<Alert onClose={() => setAlertVisibility(false)}>
						<p>I am Alert</p>
					</Alert>
				)}
				<Button color='secondary' onClick={() => setAlertVisibility(true)}>
					Buy
				</Button>
			</div>
			<div>
				<ListGroup items={items} heading='Cities' onSelectedItem={handleSelectedItem} />
			</div>
			<CancelButton/>
		</Fragment>
	);
}

export default App;
