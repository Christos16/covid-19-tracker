import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ onCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetchCountries();
      setFetchedCountries(response);
    };
    getCountries();
  }, []);

  console.log(fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={e => onCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
