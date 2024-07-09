import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import formImg from '../assets/images/forms_2020q4_48dp.png'
import appBtnImg from '../assets/images/al-icon.png'

interface HeaderProps {
    formTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ formTitle }) => {
    const location = useLocation();
    console.log(location.pathname)

  return (
    <HeaderContainer>
        {location.pathname === '/form' ?
        <>        
            <div className='headerInner'>
                <TitleWrap className=''>
                    <img src={formImg} alt="" aria-hidden/>
                    <h1 className='formTitle'>{formTitle || '제목 없는 설문지'}</h1>
                    <IconWrapper className='headerIconWrap icon28'>
                        <IconBtn aria-label='테마 맞춤설정'>
                                <Icon><span className='iconBg' style={{top: '-6411px'}}/></Icon>
                        </IconBtn>
                        <IconBtn aria-label='테마 맞춤설정'>
                                <Icon><span className='iconBg' style={{top: '-3592px'}}/></Icon>
                        </IconBtn>
                    </IconWrapper>
                </TitleWrap>
                <UserWrap>
                    <IconWrapper className='icon48'>
                        <IconBtn aria-label='테마 맞춤설정'>
                            <Icon><span className='iconBg' style={{top: '-5501px'}}/></Icon>
                        </IconBtn>
                        <IconBtn aria-label='미리보기'>
                            <Icon><span className='iconBg' style={{top: '-4623px'}}/></Icon>
                        </IconBtn>
                        <IconBtn aria-label='실행취소'>
                            <Icon><span className='iconBg' style={{top: '-8357px'}}/></Icon>
                        </IconBtn>
                        <IconBtn aria-label='다시실행'>
                            <Icon><span className='iconBg' style={{top: '-8929px'}}/></Icon>
                        </IconBtn>
                    </IconWrapper>
                    <button className='sendBtn' aria-label='보내기'>보내기</button>
                    <IconWrapper className='icon48'>
                        <IconBtn aria-label='더보기' className='moreBtn btn'>
                            <Icon><span className='iconBg' style={{top: '-5943px'}}/></Icon>
                        </IconBtn>
                    </IconWrapper>
                    <div className='userProfile'>
                        <a href='#' className='userImg'></a>
                    </div>
                </UserWrap>
            </div>
            <FormTab>
                <ul>
                    <li className='on'>질문</li>
                    <li>응답</li>
                    <li>설정</li>
                </ul>
            </FormTab>
        </> 
        :
        <div className='headerInner'>       
            <TitleWrap className=''>
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
        </div>
        }
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
    color:#5f6368;
    .headerInner{
        display: flex;
        justify-content: space-between;
        padding: 8px;
    }
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
        &.formTitle {
            color:rgb(32,33,36);
            font-size: 18px;
            padding: 0 20px;
        }
    }
    .headerIconWrap {
        display:flex;
        button {
            margin-right: 10px;
        }
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
    .sendBtn {
        background-color: #673ab7;
        color: #fff;
        margin: 0 10px;
        padding: 0 24px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .25px;
        line-height: 36px;
        box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
        border-radius: 4px;
        &:hover {
            background-color: #7349bd;
        }
    }
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
    &>div{
        display:flex;
    }
`;

const FormTab = styled.div`
    border-bottom: 1px solid #dadce0;
    ul{
        display: flex;
        justify-content: center;
        li{
            position: relative;
            text-align: center;
            line-height: 36px;
            padding: 0 12px;
            font-size: 14px;
            cursor: pointer;
            &.on {
                color: rgb(103, 58, 183);
            }
            &.on:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                border-radius: 3px 3px 0 0;
                height: 3px;
                background-color: #673ab7;
            }
        }
    }
`;

const Icon = styled.div.attrs(props => ({
    className: 'icon',
  }))`
    position: relative;   
    overflow:hidden;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    .iconBg{
        position: absolute;
        left: 0;
        &:before {
            content: url(https://ssl.gstatic.com/docs/forms/qp_sprite205.svg);
        }
    }
  `;

const IconBtn = styled.button`
    border-radius: 100%;
    &:hover {
        background-color: #f9f9f9;
    }
`;

const IconWrapper = styled.div `
  &.icon28 {
    button {
        width:28px;
        height:28px;
    }
  }
  &.icon48 {
    button {
        width:48px;
        height:48px;
    }
  }
`;

export default Header
