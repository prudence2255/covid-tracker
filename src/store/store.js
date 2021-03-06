import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './slices/rootReducer';



/**
 * store
 */
const appStore = (initialStore) => {
  const store = configureStore({
        middleware: getDefaultMiddleware({
          serializableCheck: false,
          immutableStateInvariant: false
        }),
          reducer: rootReducer,
          initialStore
        })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
     module.hot.accept('./slices/rootReducer.js', () => store.replaceReducer(rootReducer))
    }
        
   return store     
}


export default appStore;




