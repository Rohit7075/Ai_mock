import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
const initFirebaseAdmin =()=>
{
    const apps=getApps()

if(!apps.length)
{
    initializeApp({
        credential:cert({
            // 
            projectId:process.env.FIREBASE_PROJECT_ID,
            clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
            privateKey:process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n')
        })

    })
}
    return {
        // we are using the cert method to create a credential object from the service account key
        auth:getAuth(),
        // we are using the getAuth method to get the auth object from firebase admin sdk
        db:getFirestore(),

        // we are using the getFirestore method to get the firestore object from firebase admin sdk
    }
}

export const { auth, db } = initFirebaseAdmin();
    

// in this code we are initializing firebase admin  ,which mmean we are using firebase 
// admin sdk to access the firebase services like firestore and auth.

// stteps
// 1
// create Adamina.ts
// create client.ts and admin.ts
// 2  write the code to initialize firebase admin sdk in admin.ts
// 3 write the code to initialize firebase client sdk in client.ts

// now weare going to use the firebase admin sdk to access the firestore and auth services
