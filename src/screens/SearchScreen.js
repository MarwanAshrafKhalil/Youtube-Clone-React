import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosBySearch } from '../redux/actions/videos.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../Components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SearchScreen(props) {

    const {query}= useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosBySearch(query))
    },[query, dispatch])

    const {videos, loading} = useSelector(state => state.searchedVideos)
    // console.log("videos###: ",videos)

    return (
        <Container>
            {!loading ? (
                videos?.map(video => (
                    <VideoHorizontal video={video} key={video.id.videoId} SearchScreen/>
                ))
            )
                :
                (
                    <SkeletonTheme color="#343a40" heightLightColor="#3c4147">
                    <Skeleton width="100%" height="160px" count={20}/>
                </SkeletonTheme>
                )
            }
        </Container>
    );
}

export default SearchScreen;