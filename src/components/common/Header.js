
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import header_logo from "./imgs/footer_logo.png";
import header_menu_stroke from "./imgs/header_menu.svg";
import myIcon from "./imgs/header_mypage.svg";
import userIcon from "./imgs/header_user.svg";
import searchIcon from "./imgs/header_search.svg";
import { useNavigate } from "react-router-dom";
// import AdminHome from "../admin/adminHome";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../context";
// --------------------------------------------------------------------------------------------------------------------

function Header() {
  const navItems = [
    // {
    //   name: "홈",
    //   path: "/",
    // },
    {
      name: "병원 소개",
      submenu: [
        { path: "/home", name: "병원 소개" },
        { path: "/introduce", name: "개요" },
        { path: "/directions", name: "오시는 길" },
        { path: "/department", name: "진료과 소개" },
      ],
    },
    { name: "공지사항",
      submenu: [
          { path: "/notice", name: "공지 사항" },
          { path: "/notice", name: "목록" },
          { path: "/notice", name: "관리자" },
      ]

    },
    {
      name: "온라인예약",
      submenu: [
        { path: "/userreserv", name: "온라인 예약" },
        { path: "/userreserv", name: "회원 예약" },
        { path: "#/nonuserreserve", name: "비회원 예약" },
      ],
    },
    {
      name: "온라인상담",
      submenu: [
          { path: "/onlineCounsel", name: "온라인 상담" },
          { path: "/onlineCounsel", name: "목록" },
          { path: "/onlineCounsel", name: "관리자" },
      ],
    },
    { name: "고객 리뷰",
      submenu: [
          { path: "/review", name: "고객 리뷰" },
          { path: "/review", name: "목록" },
        { path: "/review", name: "관리자" },
      ]

    },
  ];

  const [showBox, setShowBox] = useState(true);
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      // 100px 아래로 스크롤하면 박스 숨기기
      if (window.scrollY > 0) {
        setShowBox(false);
      } else {
        setShowBox(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id");
      setAuth(false);
      navigate("/");
    }
  };
  const handleMyPageClick = (e) => {
    if (!auth) {
      e.preventDefault(); // 기본 링크 동작 방지
      alert("로그인이 필요합니다! 로그인 페이지로 이동합니다.");
      navigate("/signIn");
    }
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo>
          <Link to="/">
            <img src={header_logo} width="128px" height="36px" alt="logo" />
          </Link>
        </Logo>

        <Navigation>
          <ul>
            <img
              src={header_menu_stroke}
              width="36px"
              height="36px"
              alt="menu"
            />
            {navItems.map((item) => (
              <li key={item.name}>
                <article>
                  {" "}
                  <MenuLink to={item.path || "#"}>{item.name}</MenuLink>
                </article>
                {item.submenu && showBox && (
                  <ul>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <SubLink to={subItem.path}>{subItem.name}</SubLink>
                        <div className="element">
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Navigation>
        <HederSectionB>
          <LoginBox>
            <Link to="/mypage" onClick={handleMyPageClick}>
              <img src={myIcon} alt="마이페이지" />
              <LoginButton>마이페이지</LoginButton>
            </Link>

            {auth ? (
              <Link to="/" onClick={handleLogout}>
                <img src={userIcon} />
                <LoginButton>로그아웃</LoginButton>
              </Link>
            ) : (
              <Link to="/signIn">
                <img src={userIcon} />
                <LoginButton>로그인</LoginButton>
              </Link>
            )}
          </LoginBox>
          <SearchBox>
            <Link to="/">
              <input type="search" placeholder="검색어를 입력해주세요."></input>
              <img src={searchIcon} />
              <LoginButton></LoginButton>
            </Link>
          </SearchBox>
        </HederSectionB>
      </HeaderSection>

      {/* ------------------------------------------------------------------------------------------------ */}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 1920px;
  margin: 0px auto;
  height: 100px;
  background-color: #0D326F;
`;

const HeaderSection = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
 //min-width: 1440px;
  height: 100px;
  float: left;
  //margin-left: 120px;
  width: 100%;
  position: fixed;
  z-index: 999999999;
  background-color: #0D326F;
  //backdrop-filter: blur(20px);
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 150px;
  height: 100px;
  
  img {
    cursor: pointer;
    margin-top: 5px;
  }
`;

//
const Navigation = styled.nav`
  display: flex;
  justify-content: left;
  align-items: left;
  
   z-index: 99 ;
  width: 500px;
  
  font-weight: 500;
  text-align: center;
  //position: relative;
  
  img {
    position: relative;
    top: -8px;
  }
  
  ul {

    position: relative;
    
    display: flex;
    justify-content: left;
    width: 500px;
    list-style: none;
  }
  ul:first-child {
    padding: 40px 50px 20px 20px;

  }
  a{
    font-family: "Noto Sans KR", serif;
  }
  ul li {
    //width: 140px;
    position: relative;
    margin-left: 20px;
    
    &:hover ul {
      display: block;
    }
  }
  ul ul li a{
    margin-right: 20px;
  }
  
  ul ul {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    //background: rgb(255, 255, 255);
    width: 100%;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    text-align: left;
    padding: 15px 50px 40px 20px;

    //하위메뉴 스타일
    li{
      width: 100px;
      //position: relative;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgb(0, 0, 0);
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      border:none;
      text-align: left;
      float: left;
      
    //border-bottom:1px solid black;
    //text-align: left;
    //right:-15px;
    //position: relative;
    //width: 95px;
    //padding-top:20px;
    }
  }
  li:first-child{
    font-size: 16px;
    font-weight: 700;
  }
  li:hover ul,
  &:hover ul ul {
    display: block;
    visibility: visible;
  }

 //서브메누
 div {
   background-color: #F6F7F8;
      display: none;
      position: fixed;
      height: 180px;
      top: 100px;
      left:0px;
      min-width :100vw;
      width: 100%;
      z-index: -1;
      flex-direction: row;
      padding: 10px;
      box-sizing: border-box;
   
 
    }
    &:hover div {
      display: block;
    }
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14.2px;
  width: 600px;
  //lineheight: 16;

  &:hover {
    color: #FFA228;
  }
`;

const SubLink = styled(Link)`
  text-decoration: none;
  color: #111;

  &:hover {
    color:#FFA228;
  }
`;
//네비)오른쪽
const HederSectionB = styled.div`
  
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    color:#FFA228;
  }
`;

const LoginBox = styled.div`
  padding: 50px 20px 20px 20px;
  font-size: 14.2px;
  position: relative;
  display: flex;
  justify-content: left;
  color: #fff;
  
  width: 300px;
  


  a{
    &:hover {
      color:#FFA228;
    }
  }
  
  
  a {
    padding: 16px;
    &:hover {
      color:#FFA228;
    }
  }

  a:nth-child(2) img {
    top: 3px;
    position: relative;
    &:hover {
      color:#FFA228;
    }
  }
`;
// ---------------------------------------------------------------
const LoginButton = styled.button`
  font-family: "Noto Sans KR", serif;
  margin-left: 8px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  lineheight: 16;
`;

const SearchBox = styled.button`
  
  top: 20px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  position: relative;
 
  width: 260px;
  height: 30px;
  border-radius: 15px 13px;
  margin-bottom: 16px;
  
  outline: none;
  input {
    //height: 25px;
    //width: 190px;
    //border: none;
    //border-bottom: 1px solid rgba(0,0,0,0.2);
    //padding-bottom: 2px;
    
    font-size: 13px;
    font-weight: 300;
    border: none;
    background: rgb(255, 255, 255);
    width: 260px;
    height: 30px;
    border-radius: 15px 13px;
    outline: none;
    text-align: end;
  }
  input:focus {
    outline: none;
  }
  img {
    bottom: 5px;
    left: 0px;
    padding-left: 10px;
    position: absolute;
  }
`;

export default Header;
