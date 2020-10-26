import config from './fbconfig.json';
import Firebase from 'firebase/app';
import 'firebase/firestore';

const db = Firebase.initializeApp(config).firestore(),
      coll_name = 'notas';

class FirebaseStore {
    static setarAnotacao(id, descricao, completa, callback) {
        db.collection(coll_name)
            .doc(id.toString())
            .set({
                id: id,
                descricao: descricao,
                completa: completa
            })
            .then(() => {
                return callback(true);
            });
    }

    static pegarAnotacoes(callback) {
        db.collection(coll_name)
            .get()
            .then(snp => {
                return callback(snp.docs.map(doc => doc.data()), true);
            })
    }
 
    static deletarAnotacao(id, callback) {
        db.collection(coll_name)
            .doc(id)
            .delete()
            .then(() => {
                return callback(true);
            })
    }
}
export default { FirebaseStore };