import Axios from 'axios'


const connection = Axios.create();
connection.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
connection.defaults.headers.common['Content-Type'] = '*';
connection.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

