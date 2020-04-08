import React from 'react';
import { Cards, Chart, CountryPicker, AppBar, Alert, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covidImage from './images/covid19.png';
class App extends React.Component {
  state = {
    data: {},
    country: ''
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  onCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <React.Fragment>
        <AppBar />
        <div className={styles.container}>
          <img src={covidImage} className={styles.image} alt='COVID-19' />
          <Alert />
          <Cards data={data} />
          <CountryPicker onCountryChange={this.onCountryChange} />
          <Chart data={data} country={country} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
