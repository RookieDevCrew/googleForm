import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';

const FormPage = () => {
  return (
    <>
        <GlobalStyle />
        <Header/>
        <Form>
            <div className='innerWrapper'>
                <Card className='formInfo'>
                    <span className='form'/>
                    <div className='formTitle'>
                        <input
                            type='text'
                            placeholder='설문지 제목'
                        />
                    </div>
                    <div className=''>
                        <input
                            type='text'
                            placeholder='설문지 설명'
                        />
                    </div>
                </Card>

                <Card>어쩌구</Card>
            </div>
        </Form>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0ebf8;
  }
`;

const Form = styled.div`
    .innerWrapper {
        width: 770px;
        margin: 0 auto;
    }
`;

const Card = styled.div`
    background-color:#fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 30px 20px;
    margin-bottom: 25px;
    &.formInfo{
        .formTitle{
            input{
                width:100%;
                font-size:30px;
                border-bottom: 1px solid #e0e0e0;
            }
        }
    }
`;

export default FormPage;
