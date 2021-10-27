import logo from './logo.svg';
import './App.scss';
import Navbar from './component/navbar/Navbar';
import TopBar from './component/topbar/TopBar';
import SliderImgs from './component/carasol/SliderImgs';
import Team from './component/team/Team';

function App() {
	return (
		<div className="App">
			<TopBar></TopBar>
			<Navbar></Navbar>
			<SliderImgs></SliderImgs>
			<Team></Team>
		</div>
	);
}

export default App;
