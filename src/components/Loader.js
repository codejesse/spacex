import styled from 'styled-components'
import '../index.css';

const LoaderWrapper = styled.div`
   background-image: url("background.png");
   background-size: cover;
   background-repeat: no-repeat;
   height: 100vh;
`;

const LogoWrapper = styled.div`
   display: flex;
   margin-left: 3.5rem;
   justify-content: center;
`;

const Loading = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
`;

function Loader() {
    return (
        <LoaderWrapper>
            <LogoWrapper>
                <img src='spacex.png' alt='logo' />
            </LogoWrapper>
            <Loading><div className="loader"></div></Loading>
        </LoaderWrapper>
    )
}
export default Loader;