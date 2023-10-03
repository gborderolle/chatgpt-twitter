import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  // ...otros campos
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
