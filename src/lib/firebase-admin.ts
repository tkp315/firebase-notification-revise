import admin from 'firebase-admin'
import serviceKey from '../../service_key.json'

if(admin.apps.length===0){
    admin.initializeApp({
        credential:admin.credential.cert(serviceKey as admin.ServiceAccount)
    })
}

else {
    console.log("Firebase app already initialized");
  }
export default admin