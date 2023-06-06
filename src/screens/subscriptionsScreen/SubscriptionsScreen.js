import React from 'react';
import './subscriptionsScreen.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSubscribedChannels } from '../../redux/actions/videos.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../../Components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SubscriptionsScreen(props) {

        
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSubscribedChannels())
    },[dispatch])

    const {loading, videos} = useSelector(state => state.subscriptionsChannel)

    return (

        <Container>
            {
            !loading ? (
                 videos?.map(video => (
                <VideoHorizontal video={video} key={video.id} subScreen  />
                ))
            )
            :
            (
            <SkeletonTheme color="#343a40" heightLightColor="#3c4147">
                    <Skeleton width="100%" height="160px" count={25}/>
                </SkeletonTheme>
           ) }
        </Container>
    );
}

export default SubscriptionsScreen;