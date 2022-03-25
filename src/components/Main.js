import styled from 'styled-components'
import '../index.css';
import { useEffect, useState } from 'react';

const MainWrapper = styled.div`
   background-color: black;
   height: auto;
   width: auto;
`;

const MainLogo = styled.div`
`;


const MainImage = styled.div`
   float: right;
   margin-top: -36rem;
   @media (max-width: 600px) {
       display: none;
   }
`;

const LaunchDetails = styled.div`
   font-family: 'Orbitron', sans-serif;
   color: white;
   margin: 1rem;
   padding: 2rem;
   width: 58%;
   border: 1px solid white;
   @media (max-width: 600px) {
       margin: auto;
       width: auto;
       padding: 1rem;
       font-size: 0.79rem;
   }
`;

const Footer = styled.div`
   display: flex;
   flex-direction: row;
   color: white;
   margin: 1rem;
   @media (max-width: 600px) {
    justify-content: center;
    margin: 0;
   }
`;

const FooterText = styled.h2`
    font-family: 'Orbitron', sans-serif;
   color: white;
`;


function Main() {
    const [launch, setlaunch] = useState([])

    useEffect(() => {
        //fetch data
        fetch("https://api.spacexdata.com/v4/launches/latest")
            .then(response => response.json())
            .then(data => setlaunch(data))
    }, [])
    console.log(launch)
    let data;
    if (launch.length === 0) {
        data = 'No Data'
    }
    return (
        <MainWrapper>
            <MainLogo>
                <img className='logo' src='spacex.png' alt='logo' />
            </MainLogo>
            <LaunchDetails>
                <h1>RECENT LAUNCH</h1>
                <h2>Rocket: {launch.name} {data}</h2>
                <h2>Date: {launch.date_local} {data}</h2>
                <h2>Flight: {launch.flight} {data}</h2>
            </LaunchDetails>
            <MainImage>
                <img className='rocket' src='rocket.png' alt='logo' />
            </MainImage>
            <Footer>
                <img width={150} height={150} src='me.png' alt='me' />
                <FooterText>Made by Jesse</FooterText>
            </Footer>
        </MainWrapper>
    )
}
export default Main;