import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import albumsReducer from '../reducers/albums'
import artistReducer from '../reducers/artists'
import playlistReducer from '../reducers/playlist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        albums: albumsReducer,
        artists: artistReducer,
        playlist: playlistReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store