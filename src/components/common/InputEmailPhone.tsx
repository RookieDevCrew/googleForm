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
    bottom: 16px;
    left: 8px;
    white-space: nowrap;
    z-index: 1;
    text-overflow: ellipsis;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &.is-value {
        transform: scale(0.75) translateY(-39px);
    }
`;

const InputEmailPhone: React.FC<LabelInputProps> = ({ label, type, value, onChange, autocomplete = 'on' }) => {
    return (
        <InputWrapper>
            <InputField type={type} value={value} onChange={onChange} autoComplete={autocomplete} />
            <FloatingLabel className={`floating-label ${value ? 'is-value' : ''}`}>{label}</FloatingLabel>
        </InputWrapper>
    );
};

export default InputEmailPhone;
