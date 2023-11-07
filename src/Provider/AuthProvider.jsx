import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import app from './Firebase/FirebaseConfig';
import { useEffect } from 'react';
import { useState } from 'react';
export const Authcontext= createContext(null)

const AuthProvider = ({children}) => {

const auth = getAuth(app)


const[user,setUser] = useState(null);
console.log('hare krishna:' ,user)
  



const createUser =  (email,password)=> {
  return createUserWithEmailAndPassword(auth,email,password);


}


const update=(name,pic)=>{

  return updateProfile(auth.currentUser,name,pic)
}

const loginUser = (email,password)=>{

  return signInWithEmailAndPassword(auth,email,password)
}


const logout =()=>
{

  return signOut(auth)
}





useEffect(()=>{
const unSubcribe = onAuthStateChanged(auth,logednUser=>{
  console.log('observe something',logednUser);
  setUser(logednUser);

})

return()=>{
  unSubcribe();
}
 



},[])



const authinfo={
  
  
  user,createUser,loginUser,update,logout

}




  return (





      
    <Authcontext.Provider  value ={authinfo}>
{children}

    </Authcontext.Provider>
  );
};

export default AuthProvider;