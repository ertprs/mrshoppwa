export enum DataServiceType {
  http = 'HTTP',
  firebase = 'FIREBASE',
}

export const apiUrl = 'assets/misc/data.json';
// export const apiUrl = 'https://s3.amazonaws.com/xxxxx/data.json';

export const firebaseConfig = {
  // This is a placeholder. Replace with real values.
  apiKey: 'AIzaSyCsAES9S79l1OvbutPS34WS5yOuNlIxmjI',
  authDomain: 'monthlyrepeat-23062.firebaseapp.com',
  databaseURL: 'https://monthlyrepeat-23062.firebaseio.com',
  projectId: 'monthlyrepeat-23062',
  storageBucket: 'monthlyrepeat-23062.appspot.com',
  messagingSenderId: '617488315989',
  appId: '1:617488315989:web:6f9fda0e9a8abd9083c6dc',
  measurementId: 'G-SYNQFRW0EV',
};

export const DATA_SERVICE: DataServiceType = DataServiceType.firebase;

export const appTitle = 'monthlyrepeat.com';
