import React, { useEffect, useState } from 'react';
import Header from './Components/header/Header';
import { Container } from "react-bootstrap"
import Sidebar from './Components/sidebar/Sidebar';
import HomeScreens from './screens/homeScreens/HomeScreens';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom"
import './_app.scss'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen';
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen';
import ChannelScreen from './screens/channelScreen/ChannelScreen';









const Layout = ({children})=>{
    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = ()=>
    {
           toggleSidebar(value => !value)
    }

    return(
        <>
           <Header handleToggleSidebar={handleToggleSidebar} />
           <div className="app__container ">
                <Sidebar 
                sidebar={sidebar}
                handleToggleSidebar={handleToggleSidebar}
                />
            <Container fluid className='app__main '>
                {children}
            </Container>

           </div>
        </>
    )
}



function App() {

    const {accessToken, loading} = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=> {
        if(!loading && !accessToken){
            navigate('/auth')
        }

    }, [accessToken,loading,navigate])


    return (

            
            <Routes>

                <Route path='/' exact element={
                    <Layout>
                        <HomeScreens/>
                    </Layout>
                }/>

                <Route path='/auth' element={
                    <LoginScreen/>
                }/>


                <Route path='/search/:query' element={
                    <Layout>
                        <SearchScreen/>
                    </Layout>
                }/>

                <Route path='/watch/:id' element={
                    <Layout>
                        <WatchScreen/>
                    </Layout>
                }/>

                <Route path='/feed/subscriptions' element={
                    <Layout>
                        <SubscriptionsScreen/>
                    </Layout>
                }/>

                <Route path='/channel/:channelId' element={
                    <Layout>
                        <ChannelScreen/>
                    </Layout>
                }/>

                <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
                
           
        
    );
}

export default App;