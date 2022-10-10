import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

import { toast } from "react-toastify";
import { auth } from "../../firebase";
import Note from "../../models/Note.model";

export default class FirebaseService {
    async login(email: string, password: string): Promise<boolean> {
        try {
            await signInWithEmailAndPassword(auth, email, password);

            if (!auth.currentUser?.emailVerified) {
                toast.info("Please verify your email to login!");
                return false;
            } else toast.success("Successfully logged in!");

            return true;
        } catch (error: any) {
            if (error?.message?.includes("auth")) toast.error("Wrong email/password");
            else
                toast.error("Something went wrong", {
                    icon: "🤔",
                });

            return false;
        }
    }

    async logout() {
        try {
            await auth.signOut().then(() => {
                toast.success("Successfully logged out!");
            });
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    async saveNote(note: Note) {
        const notesRef = ref(getDatabase(), "notes/" + auth.currentUser?.uid + "/" + note?.createdAt);
        try {
            await set(notesRef, JSON.stringify(note));
        } catch (error) {
            console.log(error);
        }
    }

    async saveCategory(cats: string[]) {
        const userRef = ref(getDatabase(), "categories/" + auth.currentUser?.uid);
        try {
            await set(
                userRef,
                JSON.stringify({
                    categories: cats,
                })
            );
        } catch (error) {
            console.log(error);
        }
    }

    async getCategories() {
        const catREf = ref(getDatabase());

        try {
            const snapshot = await get(child(catREf, "categories/" + auth.currentUser?.uid));
            if (snapshot.exists()) {
                let cats = JSON.parse(snapshot.val())?.categories ?? [];
                return cats;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
