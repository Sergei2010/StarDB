import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import './app.css';

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        hasError: false
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;
            console.log('switch to', Service.name);
            return {
                swapiService: new Service()
            };
        })
    };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()');
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <div className="stardb-app m-4 p-4">
                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />
                        <PeoplePage  />
                        <PlanetsPage />
                        <StarshipsPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
