import {createStore,applyMiddleware,combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth';
import { videoReducer } from './reducers/video';


const rootReducer =combineReducers({
    auth:authReducer,
    video:videoReducer
})

const store =createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;