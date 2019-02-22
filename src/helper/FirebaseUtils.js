import firebase from 'react-native-firebase'

const FirebaseUtils = {
    createUser: async (name,password,email,type) =>{
        firebase.database().ref(`user/ ${email}`).set({name:name,password:password,email:email,type:type})
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