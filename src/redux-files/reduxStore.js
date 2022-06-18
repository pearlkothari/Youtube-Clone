import {createStore,applyMiddleware,combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth';
import { videoReducer, _metaReducer } from './reducers/video';


const rootReducer =combineReducers({
    auth:authReducer,
    video:videoReducer,
    video_meta:_metaReducer
})

const store =createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;