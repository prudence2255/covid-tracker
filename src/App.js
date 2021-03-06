import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './styles/w3.css';
import Card from 'components/Card';
import Chart from 'components/Chart';
import CountryPicker from 'components/CountryPicker';



function App() {
  return (
    <div className="app container">
    <div className="row mb-2">
<div className="col-md-4 mx-auto text-center">
<img src="/covid-19.png" className="img-fluid" alt="covid-19"/>
</div>
    </div>
      <Card />
      <CountryPicker />
      <Chart />
    </div>
  )
}

export default App;








