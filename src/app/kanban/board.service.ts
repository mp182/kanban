import { Injectable, inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CollectionReference, Firestore, addDoc, arrayRemove, collection, deleteDoc, doc, onSnapshot, orderBy, query, runTransaction, updateDoc, where } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Board, Task } from './board.model';

@Injectable({ providedIn: 'root' })
export class BoardService {

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  public async createBoard(data: Board) {
    const user = this.auth.currentUser;
    const boardsCollection: CollectionReference = collection(this.firestore, 'boards');
    return addDoc(boardsCollection, { ...data, uid: user?.uid, tasks: [{ description: 'Hello!', label: 'yellow' }] });
  }

  public getUserBoards(): Observable<Board[]> {
    return authState(this.auth).pipe(
      switchMap(user => {
        if (user) {
          const boardsCollection: CollectionReference = collection(this.firestore, 'boards');
          const q = query(boardsCollection, where('uid', '==', user.uid), orderBy('priority'));
          return new Observable<Board[]>(observer => {
            const unsubscribe = onSnapshot(q, (docs) => {
              const userBoards = docs.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Board[];
              observer.next(userBoards);
            });
            return () => unsubscribe();
          });
        } else {
          return of([] as Board[]);
        }
      })
    );
  }

  public async sortBoards(boards: Board[]) {
    try {
      await runTransaction(this.firestore, async (transaction) => {
        const boardsCollection: CollectionReference = collection(this.firestore, 'boards');
        boards.forEach(async (board: Board, idx: number) => {
          const boardRef = doc(boardsCollection, board.id);
          transaction.update(boardRef, { priority: idx });
        });
      });
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  }

  public async deleteBoard(boardId: string) {
    return await deleteDoc(doc(this.firestore, "boards", boardId));
  }

  public async updateTasks(boardId: string, tasks: Task[]) {
    const docRef = doc(this.firestore, "boards", boardId);
    return await updateDoc(docRef, { tasks });
  }

  public async removeTask(boardId: string, task: Task) {
    const docRef = doc(this.firestore, "boards", boardId);
    return await updateDoc(docRef, { tasks: arrayRemove(task) });
  }

}