import React from 'react'
import styled from "styled-components";
import formImg from '../assets/images/forms_2020q4_48dp.png'
import appBtnImg from '../assets/images/al-icon.png'

const Header = () => {
  return (
    <HeaderContainer>
        <TitleWrap>
            <button className='toggleBtn btn'>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
            </button>
            <img src={formImg} alt="" aria-hidden/>
            <h1>설문지</h1>
        </TitleWrap>
        <SearchWrap>
            <button className="searchBtn btn" aria-label="검색" role="button">
                <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
            </button>
            <input 
                type='text'
                placeholder='검색'
            />
        </SearchWrap>
        <UserWrap>
            <button className='appBtn btn'>
                <img src={appBtnImg} alt='Google 앱'/>
            </button>
            <div className='userProfile'>
                <a href='#' className='userImg'></a>
            </div>
        </UserWrap>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    color:#5f6368;
    div {}
    .btn:hover {
        background-color: #ebecec;
    }
`;

const TitleWrap = styled.div`
    min-width: 200px;
    display:flex;
    align-items: center;
    .toggleBtn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 4px;
        position: relative;
        svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    img {
        width: 40px;
        height: 40px;
        padding-right: 4px;
    }
    h1{
        font-size:22px;
        font-weight: 400;
    }
`;

const SearchWrap = styled.div`
    display: flex;
    width: 720px;
    height: 46px;
    padding: 0 5px;
    margin-right: 49px;
    background-color: #f1f3f4;
    border:none;
    border-radius: 8px;
    font-size: 16px;
    .searchBtn{
        width: 40px;
        height: 40px;
        padding: 8px;
        margin: 3px;
        border-radius: 50%;
        &:hover {
            background-color: #e3e5e6;
        }
    }
    input{
        // border:1px solid red;
        flex-grow: 1;
        padding-left: 5px;
    }
`;

const UserWrap = styled.div`
    min-width: 200px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    .appBtn {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .userProfile{
        // border: 1px solid red;
        margin: 0 10px;
        .userImg{
            display: block;
            background-color: gray;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
`;

export default Header
