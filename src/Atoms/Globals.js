import { atom } from 'jotai';

// Create the atom
// localStorage.removeItem('user')
// localStorage.removeItem('accessToken')
// localStorage.removeItem('isAdmin')
export const loginVisible = atom(localStorage.getItem('user')?false:true);
