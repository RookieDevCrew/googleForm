import React from 'react'
import styled from "styled-components";
import Header from '../../components/Header';
import formBlank from '../../assets/images/forms-blank-googlecolors.png'
import formImg1 from '../../assets/images/formlistimg1.png'
import formImg2 from '../../assets/images/formlistimg2.png'
import formImg3 from '../../assets/images/formlistimg3.png'
import formImg4 from '../../assets/images/formlistimg4.png'
import formImg5 from '../../assets/images/formlistimg5.png'

const FormListPage = () => {
  return (
    <>    
        <Header/>
        <FormList>
          <div className='innerWrapper'>
            <div className='contractedHeader'>
              <h2>새 양식 시작하기</h2>
            </div>

            <ul className='formTemplateList'>
              <FormTemplate onClick={()=>{window.location.href = '/form'}}>
                <div className='formImg'>
                  <img src={formBlank} alt='빈 양식'/>
                </div>
                <p className='formTemplateTitle'>빈 양식</p>
              </FormTemplate>
              <FormTemplate>
                <div className='formImg'>
                  <img src={formImg1} alt='연락처 정보'/>
                </div>
                <p className='formTemplateTitle'>연락처 정보</p>
              </FormTemplate>
              <FormTemplate>
                <div className='formImg'>
                  <img src={formImg2} alt='행사 참석 여부'/>
                </div>
                  <p className='formTemplateTitle'>행사 참석 여부</p>
              </FormTemplate>
              <FormTemplate>
                <div className='formImg'>
                  <img src={formImg3} alt='파티 초대'/>
                </div>
                <p className='formTemplateTitle'>파티 초대</p>
              </FormTemplate>
              <FormTemplate>
                <div className='formImg'>
                  <img src={formImg4} alt='티셔츠 신청'/>
                </div>
                <p className='formTemplateTitle'>티셔츠 신청</p>
              </FormTemplate>
              <FormTemplate>
                <div className='formImg'>
                  <img src={formImg5} alt='행사 등록'/>
                </div>
                <p className='formTemplateTitle'>행사 등록</p>
              </FormTemplate>
            </ul>
          </div> 
        </FormList>
    </>
  )
}

const FormList = styled.div`
  background-color: #f1f3f4;
  .innerWrapper {
    width: 1150px;
    // border: 1px dotted lightgray;
    margin: 0 auto;
  }
  .contractedHeader{
    h2 {
      font-weight:400;
      padding: 30px 0;
    }
  }
  .formTemplateList {
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
  }
`;

const FormTemplate = styled.li`
display:inline-block;
width: 171px;
margin-bottom: 45px;
.formImg{
  border: 1px solid rgb(218,220,224);
  border-radius: 4px;
  overflow:hidden;
  margin-bottom: 10px;
  cursor: pointer;
    img{
      width:100%;
      display:block;
    }
    &:hover {
      border: 1px solid #673ab7;
    }
  }
  .formTemplateTitle {
    font-size: 14px;
  }
`;

export default FormListPage
