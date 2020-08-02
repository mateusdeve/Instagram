import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

import './style.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 210,
    paddingRight: 210
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="line"></div>
      <div position="static" className="AppBar" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Publicações" {...a11yProps(0)} />
          <Tab label="IGTV" {...a11yProps(1)} />
          <Tab label="Salvos" {...a11yProps(2)} />
          <Tab className="teste" label="Marcados" {...a11yProps(2)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card>
                <div className="primeira">
                </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
                <div className="segunda">
                </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
                <div className="terceira">
                </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
                <div className="quarta">
                </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
                <div className="quinta">
                </div>
            </Card>
          </Grid>
        </Grid>

      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <footer className="footer">
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">SOBRE</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">AJUDA</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">IMPRENSA</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">API</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">CARREIRAS</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">PRIVACIDADE</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">TERMOS</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">LOCALIZAÇÕES</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">CONTAS MAIS RELEVANTES</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">HASHTAGS</a>
        </Grid>
        <Grid item className="inline" xs={1}>
          <a href="#" className="ml-foter">IDIOMA</a>
        </Grid>
        <Grid item xs={12} className="mt-foo">
          <a className="a-copy">© 2020 INSTAGRAM DO FACEBOOK</a>
        </Grid>
        <Grid item className="grid"></Grid>
      </footer>
      
    </div>
  );
}
