import { ref, watchEffect } from 'vue'

// firebase
import { db } from '../firebase/config'
import { collection, onSnapshot, query } from "firebase/firestore";

const getCollection = (col) => {
  const documents = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let colRef = collection(db, col)

  let q = query(colRef)

  let results = []

  const unsub = onSnapshot(q, (snapshot) => {
    error.value = null // Clear any previous error

    try {
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      documents.value = results
    } catch (err) {
      // Handle the error
      error.value = err.message
    }
  }, (err) => {
    // Handle the Firestore listener error
    error.value = err.message
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  })

  return { documents, error }
}

export default getCollection