import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    YMaps,
    Map as YandexMap,
    TrafficControl,
    GeolocationControl,
    TypeSelector,
    FullscreenControl,
    Placemark,
    ZoomControl
} from 'react-yandex-maps';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },
    map: {
        width: 800,
        height: 600,
        margin: '0 auto',
    }
}));

const Map = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <YMaps>
                <YandexMap 
                    defaultState={{ 
                        center: [55.704608741742355,37.51918826277372],
                        zoom: 15,
                    }} 
                    className={classes.map}
                >
                    <TrafficControl options={{ float: 'right' }} />
                    <GeolocationControl options={{ float: 'left' }} />
                    <TypeSelector options={{ float: 'right' }} />
                    <FullscreenControl />
                    <Placemark 
                        geometry={[55.704608741742355,37.51918826277372]}
                        modules={['geoObject.addon.balloon']}
                        properties={{
                            balloonContentBody:
                                'Факультет Биоинженерии и Биоинформатики, МГУ',
                            }}
                    />
                    <ZoomControl options={{ float: 'right' }} />
                </YandexMap>
            </YMaps>
        </div>
    );
};

export default Map;