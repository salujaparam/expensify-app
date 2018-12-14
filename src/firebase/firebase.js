import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:  process.env.FIREBASE_DATABASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
  
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').push({
// //     description: 'this is my coffe expense',
// //     note: 'coffee expense',
// //     amount: 1133,
// //     createdAt: 42424224244224
// // });

// // database.ref('notes/-LTHOrPR3TeYR9vouz6S').remove();

// // database.ref('notes').push({
// //     title: 'course topics',
// //     body: 'react angular python'
// // });

// // database.ref()
// //   .on('value', (snapshot) => {
// //     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// //   }, (e) => {
// //     console.log('error with data fetching', e);
// //   });

// // setTimeout(() => {
// //     database.ref('name').set('param saluja');
// // }, 5000);

// // const onValueChange = database.ref()
// //   .on('value', (snapshot) => {
// //     console.log(snapshot.val());
// //   }, (e) => {
// //     console.log('error with data fetching', e);
// //   });
  
// //   setTimeout(() => {
// //     database.ref('age').set(25);
// //   }, 5000);

// //   setTimeout(() => {
// //     database.ref().off(onValueChange);
// //   }, 10000);
  
// //   setTimeout(() => {
// //     database.ref('age').set(30);
// //   }, 15000);

// // database.ref('location')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('error fetching data', e);
// //     });

// // database.ref().set({
// //     name: 'param saluja',
// //     age: 20,
// //     stressLevel: 6,
// //     job: {
// //         title: 'software developer',
// //         company: 'google'
// //     },
// //     location: {
// //         city: 'Philly',
// //         country: 'U.S'
// //     }
// // }).then(() => {
// //     console.log('data is saved!');
// // }).catch((e) => {
// //     console.log('this failed', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'amazon',
// //     'location/city': 'seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('data was removed');
// //   })
// //   .catch((e) => {
// //     console.log('did not remove data', e);
// //   });