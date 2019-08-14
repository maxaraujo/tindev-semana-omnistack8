import axios from 'axios';

//const celular = '192.168.0.13';
const emuladorGenyMotion = '10.0.3.2';
//const emuladorAndroidStudio = '10.0.2.2';
//const localhost = 'localhost';

const api = axios.create({
    baseURL: `http://${emuladorGenyMotion}:3333`
});

export default api;