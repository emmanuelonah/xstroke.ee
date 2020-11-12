export const firestore = {
    get(collection = "") {
        const getOperation = db.collection(collection).onSnapshot((snapshot) => {
            snapshot.onChanges.map((change) => {
                return change;
            });
        });
        return getOperation;
    },

    post(collection = "", body = {}) {
        const postOperation = db.collection(collection).add(body);
        return postOperation;
    },

    put(collection = "", docId = "") {
        const putOperation = db.collection(collection).doc(docId).update();
        return putOperation;
    },

    delete(collection = "", docId = "") {
        const deleteOperation = db.collection(collection).doc(docId).delete();
        return deleteOperation;
    },
};
