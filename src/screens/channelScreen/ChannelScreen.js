import  { useEffect } from 'react';
import './channelScreen.scss'
import { getVideosByChannel } from '../../redux/actions/videos.action';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../../Components/video/Video';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { getChannelDetails } from '../../redux/actions/channel.action';
import numeral from 'numeral';

function ChannelScreen(props) {

    const {channelId} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))
    },[dispatch, channelId])

    const {videos,loading} = useSelector(state=>state.channelVideos)
    const {snippet,statistics} = useSelector(state=>state.channelDetails.channel)



    return (
        <div>
            <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center'>
               <img src={snippet?.thumbnails?.default?.url} alt='' />

               <div className=' ms-3 ml-3 channelHeader__details'>
                  <h3>{snippet?.title}</h3>
                  <span>
                     {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                     subscribers
                  </span>
               </div>
            </div>

            <button>Subscribe</button>
         </div>
            <Container>
                <Row className="mt-2">
                {
                    !loading ? videos?.map(video=><Col md={3} lg={3}>
                        <Video video={video} channelScreen/>
                        
                        </Col>
                        )
                        :
                        [...Array(15)].map(()=>
                        <Col md={3} lg={3}>
                        <SkeletonTheme color="#343a40" heightLightColor="#3c4147">
                        <Skeleton width="100%" height="140px"/>
                    </SkeletonTheme>
                    </Col>
                        )
                        
                }
                </Row>
            </Container>
        </div>
    );
}

export default ChannelScreen;