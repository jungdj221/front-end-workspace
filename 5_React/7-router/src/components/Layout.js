import {Outlet} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border: 1px solid #eee;
    height: 70px;
    line-height: 70px;
    h1{
        font-size: 3rem;
        
    }
    
    nav {
        a{
            margin-right: 15px;
        }
    }
`;

const Layout = ()=>{
    return( 
    <>
    <Header>
        <h1>Animal</h1>
        <nav>
        <a href="/">목록</a>
        <a href="/create"> 추가</a>
        </nav>
    </Header>
        
        
        <Outlet/>
    </>
    );
};
export default Layout;
// <Outlet/> 여기에 router 에서 놓은 children에 해당하는 부분이 들어가있음.