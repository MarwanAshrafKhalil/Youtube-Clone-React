import { legacy_createStore as createStore,applyMiddleware, combineReducers} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/auth.reducers'
import { homeVideosReducer, 
    searchedVideosReducer, 
    subscriptionsChannelReducer,
    selectedVideoReducer, 
    relatedVideoReducer,
    channelVideosReducer } from './reducers/videos.reducers'
import {  } from './reducers/videos.reducers'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer

})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store 