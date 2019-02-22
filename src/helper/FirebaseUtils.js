import firebase from 'react-native-firebase'

const FirebaseUtils = {
    createUser: async () =>{
        firebase.database().ref('users/').set({test:"Hirenvaghela"})
    },
   getUser: async () =>{
    let universityRef = firebase.database().ref("users/");
    await universityRef.once()
        .then(function (snapshot) {
            res = snapshot.val();
        });
    return res;
    },
}

module.exports = FirebaseUtils ;