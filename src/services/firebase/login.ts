import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.';

export const toLogUser = async (email: string, password: string) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {

	}
};
