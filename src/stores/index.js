import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import auth from './modules/auth/reducer';
import me from './modules/me/reducer';
import profiles from './modules/profiles/reducer';

const reducers = combineReducers({
  auth,
  me,
  profiles,
});

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancher = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(reducers, enhancher);

  return store;
};

export default configureStore();
