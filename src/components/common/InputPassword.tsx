import React, { useState } from 'react';
import styled from 'styled-components';

interface LabelInputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autocomplete?: string;
}

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
    flex-wrap: wrap;
`;

const InputField = styled.input`
    color: #1f1f1f;
    font-size: 17px;
    height: 54px;
    margin: 1px 1px 0 1px;
    padding: 13px 15px;
    border-radius: 4px;
    width: 100%;
    z-index: 1;
    direction: ltr;
    text-align: left;
    display: block;
    border: 1px solid rgb(113, 113, 113);
    white-space: nowrap;

    &:focus {
        outline: 2px solid #0b57d0;
        border: 1px solid transparent;
    }

    &:focus ~ .floating-label {
        color: #0b57d0;
        transform: scale(0.75) translateY(-39px);
    }
`;

const FloatingLabel = styled.div`
    overflow: hidden;
    max-width: calc(100% - 16px);
    width: auto;
    box-sizing: border-box;
    background: white;
    color: #444746;
    transform-origin: bottom left;
    font-weight: 400;
    font-size: 17px;
    pointer-events: none;
    position: absolute;
    padding: 0 8px;
    top: 16px;
    left: 8px;
    white-space: nowrap;
    z-index: 1;
    text-overflow: ellipsis;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &.is-value {
        transform: scale(0.75) translateY(-39px);
    }
`;

const ShowPassword = styled.div`
    width: 100%;
    display: inline-flex;
    min-height: 24px;
    max-height: 37px;
    padding: 8px 0 0;
    position: relative;

    .checkbox-wrapper {
        margin-left: 4px;
        position: relative;
        width: 48px;
        height: 24px;

        input {
            display: inline-flex;
            position: absolute;

            box-sizing: border-box;
            width: 18px;
            height: 18px;
            border: 2px solid currentColor;
            border-radius: 2px;
            background-color: transparent;
            will-change: background-color, border-color;
        }
    }
    label {
        align-items: flex-start;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        margin-left: 16px;
        min-width: 0;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Google Sans', roboto, 'Noto Sans Myanmar UI', arial, sans-serif;
        font-size: 0.875rem;
        line-height: 1.4285714286;
    }
`;

const InputPassword: React.FC<LabelInputProps> = ({ label, value, onChange, autocomplete = 'off' }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <InputWrapper>
            <InputField
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                autoComplete={autocomplete}
            />
            <FloatingLabel className={`floating-label ${value ? 'is-value' : ''}`}>{label}</FloatingLabel>
            <ShowPassword>
                <div className="checkbox-wrapper">
                    <input type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
                </div>
                <label htmlFor="showPassword">비밀번호 표시</label>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
            </ShowPassword>
        </InputWrapper>
    );
};

export default InputPassword;
