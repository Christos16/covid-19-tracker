import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import styles from './Alert.module.css';


export default function SimpleAlerts() {


  return (
    <div className={styles.root}>
      <Alert variant='filled' severity='info'>
       Get the latest information from the WHO about coronavirus. <span style={{ marginTop: '10px', justifyContent: 'center', alignItems: 'center'}}><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"><Button style={{backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}}>Learn More</Button></a></span>
      </Alert>
    </div>
  );
}
