import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (e) {
    console.log(e);
  }
};

//logout

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};
