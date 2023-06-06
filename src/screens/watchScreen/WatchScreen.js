import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Comments from '../../Components/comments/Comments';
import VideoHorizontal from '../../Components/videoHorizontal/VideoHorizontal';
import VideoMetadata from '../../Components/videoMetadata/VideoMetadata';
import './watchScreen.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action';
import SkeletonVideo from '../../Components/skeletons/SkeletonVideo';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function WatchScreen(props) {

    const {id} = useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    },[dispatch, id])

    const {videos,loading:relatedVideosLoading} = useSelector(state=>state.relatedVideos)

    const {video,loading} = useSelector(state=>state.selectedVideo)
    
    

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        style={{border:0}}
                        title={video?.snippet?.title}
                        allowFullScreen
                        width="100%"
                        height="100%"></iframe>
                </div>
                {!loading?
                 (<VideoMetadata video={video} videoId={id} />
                 ) : (<h6>Loading...</h6>)}
                
                <Comments videoId={id}  totalComments = {video?.statistics?.commentCount}/>
            </Col>

            <Col lg={4}>
                {!loading ?
                     (videos?.filter(video => video.snippet).map(video =>(
                    <VideoHorizontal video={video} key={video.id.videoId}/>)
                ))

                :
                <SkeletonTheme color="#343a40" heightLightColor="#3c4147">
                    <Skeleton width="100%" height="130px" count={15}/>
                </SkeletonTheme>
                        
            }
            </Col>
        </Row>
    );
}

export default WatchScreen;