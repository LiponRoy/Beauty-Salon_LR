import logo from './logo.svg';
import './App.scss';
import Navbar from './component/navbar/Navbar';
import TopBar from './component/topbar/TopBar';

function App() {
	return (
		<div className="App">
			<TopBar></TopBar>
			<Navbar></Navbar>
		</div>
	);
}

export default App;
