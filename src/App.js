
import './App.css';
import Header from "./components/headers/AppHeaders";
import {TabContext,TabList,TabPanel} from "@material-ui/lab";
import {AppBar,Tab} from "@material-ui/core";
import React,{ useState } from 'react';
import Inicio from './screens/Inicio';
import Funcionarios from './screens/Funcionarios';
import LocalStorage from './screens/LocalStorage';







function App() {

    const [tabIndex, updateTabIndex] = useState('1') // [valorActual, functionReference()<- que actualiza el valor actual]

    const onChangeTabIndex = (event, value) => updateTabIndex(value)


    return (
        <div>
            <Header />
            <TabContext value={tabIndex}>
                <AppBar position="static">
                    <TabList onChange={onChangeTabIndex}>
                        <Tab label="Inicio" value="1" />
                        <Tab label="API" value="2" />
                        <Tab label="LocalStorage" value="3" />
                    </TabList>
                </AppBar>

                <TabPanel value="1">
                    <Inicio />
                </TabPanel>

                <TabPanel value="2">
                    <Funcionarios />
                </TabPanel>

                <TabPanel value="3">
                    <LocalStorage />
                </TabPanel>

            </TabContext>
        </div>
    );





}


export default App;
