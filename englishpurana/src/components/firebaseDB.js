import { config } from "../config";
import firebase from 'firebase/compat/app';

firebase.initializeApp(config);

const database = firebase.database();

export default database;
