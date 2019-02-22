import firebase from 'react-native-firebase'

const FirebaseUtils = {
    createUser: async (name,password) =>{
        firebase.database().ref(`user ${name}`).set({name:"HarsHPatel1",password:"123456"})
    },
   getUser: async () =>{
    let universityRef = firebase.database().ref("user");
    await universityRef.once()
        .then(function (snapshot) {
            res = snapshot.val();
        });
    return res;
    },
}

module.exports = FirebaseUtils ;