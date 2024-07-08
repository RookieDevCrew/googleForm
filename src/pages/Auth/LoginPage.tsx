import React, { useState } from 'react';
import styled from 'styled-components';
import InputEmailPhone from '../../components/common/InputEmailPhone';
import InputPassword from '../../components/common/InputPassword';

const LoginPage = () => {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailPhone(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <LoginPageContainer>
            <LoginContainer>
                <LoginForm>
                    <div className="heading">
                        <div className="logo">
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                                ></path>
                                <path
                                    fill="#FBBC05"
                                    d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                                ></path>
                                <path
                                    fill="#EA4335"
                                    d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                                ></path>
                                <path fill="none" d="M2 2h44v44H2z"></path>
                            </svg>
                        </div>
                        <div className="heading-text-container">
                            <h1 className="heading-text">로그인</h1>
                            <div className="heading-subtext">
                                <span>설문지로 이동</span>
                            </div>
                        </div>
                    </div>
                    <div className="login-form-container">
                        <div className="email-phone-form-wrapper">
                            <EmailPhoneForm>
                                <div className="input-wrapper">
                                    <InputEmailPhone
                                        label="이메일 또는 휴대전화"
                                        type="email"
                                        value={emailPhone}
                                        onChange={handleEmailPhoneChange}
                                    />
                                </div>
                                <div className="find-email-wrapper">
                                    <button className="find-email-button" type="button">
                                        이메일을 잊으셨나요?
                                    </button>
                                </div>
                            </EmailPhoneForm>
                            <div className="guest-wrapper">
                                <div className="guest-text">
                                    내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요.
                                    <a href="#">게스트 모드 사용 방법 자세히 알아보기</a>
                                </div>
                            </div>
                        </div>
                        <div className="password-form-wrapper">
                            <PasswordForm>
                                <InputPassword
                                    label="비밀번호 입력"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </PasswordForm>
                        </div>
                    </div>
                    <div className="signup-and-next-wrapper">
                        <div className="signup-and-next">
                            <div className="next-button-wrapper">
                                <button className="next-button">
                                    <span>다음</span>
                                </button>
                            </div>
                            <div className="signup-button-wrapper">
                                <button className="signup-button">
                                    <div></div>
                                    <span>계정 만들기</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </LoginForm>
            </LoginContainer>
            <LoginPageFooter>
                <div>
                    <footer className="footer-wrapper">
                        <div className="language-wrapper">
                            <span className="language">한국어</span>
                            <span className="language-button">
                                <svg
                                    viewBox="7 10 10 5"
                                    focusable="false"
                                    fill="#444746"
                                    className="icon-language-button"
                                >
                                    <polygon
                                        className="open-language-button"
                                        stroke="none"
                                        fill-rule="evenodd"
                                        points="7 10 12 15 17 10"
                                    ></polygon>
                                    <polygon
                                        className="close-language-button"
                                        stroke="none"
                                        fill-rule="evenodd"
                                        points="7 15 12 10 17 15"
                                    ></polygon>
                                </svg>
                            </span>
                        </div>
                        <ul className="legal-links">
                            <li>
                                <a href="#">도움말</a>
                            </li>
                            <li>
                                <a href="#">개인정보처리방침</a>
                            </li>
                            <li>
                                <a href="#">약관</a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </LoginPageFooter>
        </LoginPageContainer>
    );
};

export default LoginPage;

const PasswordForm = styled.form`
    flex-shrink: 0;
    width: 100%;
`;

const LoginPageFooter = styled.div`
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    height: 64px;

    @media (min-width: 600px) {
        padding: 0 16px;
        width: 480px;
    }
    @media (min-width: 600px) and (orientation: landscape) {
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
    }
    @media (min-width: 840px) {
        width: 480px;
    }
    @media (min-width: 840px) and (orientation: landscape) {
        padding-left: 32px;
        padding-right: 32px;
        width: 100%;
    }
    @media (min-width: 960px) {
        width: 480px;
    }
    @media (min-width: 960px) and (orientation: landscape) {
        padding: 0 16px;
        width: 840px;
    }
    @media (min-width: 1240px) {
        width: 480px;
    }
    @media (min-width: 1240px) and (orientation: landscape) {
        width: auto;
        margin-left: 200px;
        margin-right: 200px;
    }
    @media (min-width: 1600px) {
        width: 1040px;
    }
    @media (min-width: 1600px) and (orientation: landscape) {
        margin-left: auto;
        margin-right: auto;
        width: 1040px;
    }
    .footer-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 12px;
        .language-wrapper {
            padding-left: max(16px, 12px);
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: visible;
            width: 200px;
            margin-left: -16px;
            cursor: pointer;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                height: 28px;
                left: 0;
                right: 0;
                transform: translateY(-50%);
                border: 1px solid black;
                opacity: 0;
                background: #444746;
                pointer-events: none;
                border-radius: 8px;
            }
            &:hover::before {
                opacity: 0.08;
            }

            .language {
                font-size: 0.875rem;
                font-weight: 400;
                letter-spacing: 0rem;
                line-height: 1.4285714286;
            }
            .language-button {
                width: 20px;
                height: 20px;
                margin-left: 12px;
                margin-right: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon-language-button {
                    width: 41.6666666667%;
                    height: 20.8333333333%;

                    .open-language-button {
                    }
                    .close-language-button {
                        display: none;
                    }
                }
            }
        }

        .legal-links {
            display: flex;
            list-style: none;
            margin: 0 -12px;
            padding: 0;

            li {
                display: flex;
                margin: 16px 4px;
                a {
                    align-content: center;
                    border-radius: 8px;
                    color: #1f1f1f;
                    display: flex;
                    flex-wrap: wrap;
                    font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                    font-size: 0.75rem;
                    font-weight: 400;
                    letter-spacing: 0.00625rem;
                    line-height: 1.3333333333;
                    outline: none;
                    padding: 8px 12px;
                    text-decoration: none;
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        height: 28px;
                        left: 0;
                        right: 0;
                        transform: translateY(-50%);
                        border: 1px solid black;
                        opacity: 0;
                        background: #444746;
                        pointer-events: none;
                        border-radius: 8px;
                    }
                    &:hover::before {
                        opacity: 0.08;
                    }
                }
            }
            li:first-child {
                margin-left: 0;
            }
        }
    }
`;

const EmailPhoneForm = styled.form`
    .input-wrapper {
        width: 100%;
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        min-width: 0;
    }

    .find-email-wrapper {
        padding-bottom: 3px;
        padding-top: 9px;
        .find-email-button {
            color: #0b57d0;
            border-radius: 8px;
            display: inline-block;
            letter-spacing: 0.015625rem;
            outline: 0;
            z-index: 1;
            direction: ltr;
            font-size: 0.875rem;
            font-weight: 400;
            letter-spacing: 0rem;
            line-height: 1.4285714286;
            position: relative;

            &::before {
                background-color: #0b57d0;
                background-color: var(--gm3-sys-color-primary, #0b57d0);
                border-radius: 8px;
                bottom: -1px;
                content: '';
                left: -5px;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                right: -5px;
                top: -1px;
                z-index: -1;
            }
            &:hover::before {
                opacity: 0.05;
            }
        }
    }
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    direction: ltr;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0rem;
    line-height: 1.4285714286;
    color: #1f1f1f;
    @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .heading {
        margin-top: -72px;

        @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
            flex-basis: 50%;
            flex-grow: 1;
            max-width: 50%;
            padding-right: 24px;
        }
        .logo {
            style: contain;
        }
        .heading-text-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 32px;
            .heading-text {
                color: #1f1f1f;
                font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                font-weight: 400;
                line-height: 1.25;
                margin-bottom: 0;
                margin-top: 24px;
                word-break: break-word;
                font-size: 2.25rem;
            }
            .heading-subtext {
                color: #1f1f1f;
                color: var(--gm3-sys-color-on-surface, #1f1f1f);
                font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                font-weight: 400;
                letter-spacing: 0rem;
                line-height: 1.5;
                margin-bottom: 0;
                margin-top: 16px;
                font-size: 1rem;
            }
        }
    }

    .login-form-container {
        flex-grow: unset;

        @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
            padding-left: 24px;
            flex-basis: 50%;
            flex-grow: 1;
            max-width: 50%;
        }

        .guest-wrapper {
            margin-top: 32px;
            .guest-text {
                padding-bottom: 3px;
                padding-top: 9px;
                color: #444746;
                color: var(--gm3-sys-color-on-surface-variant, #444746);
                font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                font-size: 0.875rem;
                font-weight: 400;
                letter-spacing: 0rem;
                line-height: 1.4285714286;
                a {
                    color: #0b57d0;
                    color: var(--gm3-sys-color-primary, #0b57d0);
                    border-radius: 8px;
                    display: inline-block;
                    font-weight: 500;
                    font-size: 0.875rem;
                    letter-spacing: 0.015625rem;
                    outline: 0;
                    z-index: 1;
                    position: relative;

                    &::before {
                        background-color: #0b57d0;
                        background-color: var(--gm3-sys-color-primary, #0b57d0);
                        border-radius: 8px;
                        bottom: -1px;
                        content: '';
                        left: -5px;
                        opacity: 0;
                        pointer-events: none;
                        position: absolute;
                        right: -5px;
                        top: -1px;
                        z-index: -1;
                    }
                    &:hover::before {
                        opacity: 0.05;
                    }
                }
            }
        }
    }

    .signup-and-next-wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-bottom: -6px;
        margin-top: 32px;
        margin-left: -16px;
        height: 52px;

        @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
            width: 100%;
        }

        .signup-and-next {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            width: 100%;

            .next-button-wrapper {
                justify-content: flex-end;
                display: flex;
                flex-grow: 1;

                @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
                    margin-left: 40px;
                    margin-right: 0;
                }
                @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
                    flex-grow: unset;
                }
                .next-button {
                    height: 40px;
                    background: #0b57d0;
                    color: #fff;
                    font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                    font-size: 0.875rem;
                    font-weight: 500;
                    letter-spacing: 0rem;
                    line-height: 1.4285714286;
                    border-radius: 20px;
                    padding: 0 24px 0 24px;
                    position: relative;
                    &::before {
                        background-color: rgb(32, 33, 36);
                        border-radius: 20px;
                        bottom: -1px;
                        content: '';
                        left: 0;
                        opacity: 0;
                        pointer-events: none;
                        position: absolute;
                        right: 0;
                        top: -1px;
                        z-index: 20;
                    }
                    &:hover::before {
                        transition: opacity 15ms linear, background-color 15ms linear;
                        opacity: 0.16;
                    }
                }
            }

            .signup-button-wrapper {
                justify-content: flex-start;

                display: flex;
                flex-grow: 1;
                @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
                    margin-left: 0;
                    margin-right: -16px;
                }
                @media (min-width: 600px) and (orientation: landscape), (min-width: 1600px) {
                    flex-grow: unset;
                }

                .signup-button {
                    padding-left: 16px;
                    padding-right: 16px;
                    min-width: 0;
                    color: #0b57d0;
                    font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
                    font-size: 0.875rem !important;
                    font-weight: 500;
                    letter-spacing: 0rem;
                    line-height: 1.4285714286;
                    position: relative;
                    > div::before {
                        transition: opacity 15ms linear, background-color 15ms linear;
                        z-index: 1;
                        position: absolute;
                        border-radius: 20px;
                        opacity: 0;
                        pointer-events: none;
                        content: '';
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 40px;
                        background-color: var(--gm3-sys-color-primary, #0b57d0);
                    }
                    &:hover > div::before {
                        opacity: 0.05;
                    }
                }
            }
        }
    }
`;

const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: white;
    justify-content: space-between;

    @media (min-width: 600px) {
        background: #f0f4f9;
        justify-content: center;
        padding: 48px 0;
    }
    @media (min-width: 600px) and (orientation: landscape) {
        background: white;
        justify-content: space-between;
        padding: 48px 0;
    }
    @media (min-width: 960px) and (orientation: landscape) {
        background: #f0f4f9;
        justify-content: center;
        padding: 48px 0;
    }
`;

const LoginContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: white;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    position: relative;
    padding: 96px 24px 24px;

    @media (min-width: 600px) {
        border-radius: 28px;
        min-height: 528px;
        padding-left: 24px;
        padding-right: 24px;
        width: 480px;
    }

    @media (min-width: 600px) and (orientation: landscape) {
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
    }
    @media (min-width: 600px) and (orientation: landscape) {
        border-radius: 28px;
        min-height: unset;
    }

    @media (min-width: 840px) {
        padding: 96px 24px 24px;
        width: 480px;
    }

    @media (min-width: 840px) and (orientation: landscape) {
        padding-left: 32px;
        padding-right: 32px;
        width: 100%;
    }

    @media (min-width: 960px) {
        padding-left: 24px;
        padding-right: 24px;
        width: 480px;
    }

    @media (min-width: 960px) and (orientation: landscape) {
        border-radius: 28px;
        min-height: 384px;
        padding-left: 36px;
        padding-right: 36px;
        padding-bottom: 36px;
        padding-top: 108px;
        width: 840px;
    }

    @media (min-width: 1240px) {
        padding-left: 24px;
        padding-right: 24px;
        width: 480px;
    }

    @media (min-width: 1240px) and (orientation: landscape) {
        margin-left: 200px;
        margin-right: 200px;
        padding-left: 36px;
        padding-right: 36px;
        width: auto;
    }
    @media (min-width: 1600px) {
        min-height: 384px;
        padding-bottom: 36px;
        padding-left: 36px;
        padding-right: 36px;
        padding-top: 108px;
        width: 1040px;
    }
    @media (min-width: 1600px) and (orientation: landscape) {
        margin-left: auto;
        margin-right: auto;
        padding-left: 36px;
        padding-right: 36px;
        width: 1040px;
    }
`;
