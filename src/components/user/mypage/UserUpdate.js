import React from "react";
import styled from "styled-components";
import AnimalProfile from "./AnimalProfile";
import {useNavigate} from "react-router-dom";


//마이페이지-회원정보수정
function UserUpdate() {

    // 강사 수정(네비)
    const navigate = useNavigate();

    const goToPage = path => {
        navigate(path);
    };


  return (
    <UserUpdateContainer>

        {/*타이틀*/}
        <LoginBox>
            <LoginTitle>회원정보수정</LoginTitle>
            <LoginSub>정보 수정 후 변경하기 버튼을 눌러 확실하게 저장해주세요.</LoginSub>
        </LoginBox>

      {/*  1.내정보 수정*/}
        <SignupBox>
            <SignupTitle>내정보</SignupTitle>
            <SignupSub><span className="point">*</span>&nbsp;중복 확인은 필수 입력 항목입니다.</SignupSub>
        </SignupBox>

        {/* 2.내정보 수정 전체 박스*/}
        <UserUpdateUserBox>
            <MailBox>
                <Table>
            {userFields.map((field, index) => (
              <TableRow key={index}>
                  {/*라벨*/}
                  <TableHead>{field.label}</TableHead>

                   {/*데이터*/}
                    <TableData>
                    <Input type={field.type} />
                    </TableData>

                {field.button && (
                  <TableData>
                    <ActionButton>{field.button}</ActionButton>
                  </TableData>
                )}
              </TableRow>
            ))}
                </Table>
            </MailBox>
      </UserUpdateUserBox>




        {/*  2.반려동물정보 수정*/}
        <SignupBox>
            <SignupTitle>반려동물정보</SignupTitle>
            <SignupSub><span className="point">*</span>&nbsp;정보 수정 후 변경하기 버튼을 눌러 확실하게 저장해주세요.</SignupSub>
        </SignupBox>

      <UserUpdateAnimalBox>
        <AnimalProfile />
      </UserUpdateAnimalBox>

      <UserUpdateButtonBox>
        <SubmitButton>수정</SubmitButton>
        <CancelButton>취소</CancelButton>
      </UserUpdateButtonBox>
    </UserUpdateContainer>

  );
}

const userFields = [
  // { label: "이름", type: "text", disabled: isNameDisabled },
  // { label: "이메일", type: "text", button: "중복 확인"  },
  { label: "비밀번호", type: "password" },
  { label: "비밀번호 확인", type: "password" },
  { label: "닉네임", type: "text", button: "중복 확인" },
  { label: "주소", type: "text", button: "검색" },
  { label: "상세 주소", type: "text" },
  // { label: "생년월일", type: "date" },
  { label: "핸드폰 번호", type: "text" },
];


//css-------------
const MailBox = styled.div`
  width: 900px;
  //display: flex;
  align-items: center;
  justify-content: center;
  //padding: 20px 20px 20px 20px;
    text-indent: 10px;
    margin-bottom: 80px;
    
  .th_title{
    font-size: 14px;
    font-weight: 600;
    color: #111;
  }
  .point{
    color: #ff27a3;
  }
  td {
    position: relative;
  }
  //인풋
  input {
    width: 610px;
    height: 54px;
    padding: 0 32px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    outline: none;
    font-size: 14.2px;
    color: #111;
    font-weight: 400;
      margin-left: 40px;
  }
  
  //버튼
  button {
    width: 114px;
    height: 54px;
    background-color: transparent;
    border: 1px solid #0D326F;
    border-radius: 5px;
    max-width: 16rem;
    color: #0D326F;
    font-size: 13.2px;
    font-weight: 600;
    
    &:hover{
      background-color: #0D326F;
      border: 1px solid #0D326F;
      color: #fff;
    }
  }
  
  .idError {
   display: none;
    //padding-top: 8px;
    //width: 460px;
    //height: 20px;
  }
  small {
    padding-left: 10px;
    font-size: 12px;
    color: #ff27a3;
  }
`;


const Table = styled.div`
  width: 900px;
  //display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
    margin-top: 25px;
  
  .th_title{
    min-width: 92px;
    font-size: 14px;
    color: #111;
    margin-right: 40px;
  }

  .th_form{
   margin-right: 20px;
  }
`;


const UserUpdateContainer = styled.div`
    margin: 0 auto;
    width: 1200px;
    padding-bottom: 120px;
`;

// 1.문구_박스
const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20vh;
    pointer-events: none;
    margin-top: 60px;
    margin-bottom: 30px;
`;
const LoginTitle = styled.h1`
  font-weight: 700;
  line-height: 1.3em;
  font-size: 42px;
  color: #111;
  text-align: center;
`;
const LoginSub = styled.p`
  display: block;
  margin-top: 1.5em;
  color: #888888;
  font-size: 14px;
  text-align: center;
`;

//2.
const SignupBox = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 45px;
  
`;
const SignupTitle = styled.h3`
  height: 43px;
  //margin-bottom: 20px;
  font-size: 27px;
  color: #111;
  font-weight: 900;
  text-align: left;
`;
const SignupSub = styled.p`
  height: 14px;
  //margin-bottom: 20px;
  font-size: 14px;
  color: #888;
  font-weight: 300;
  text-align: right;
  
  .point{
    color: #ff27a3;
  }
`;

//3 회원가입 최종 박스
const UserUpdateUserBox = styled.div`
    width: 900px;
    margin: 0 auto;
    margin-top: 40px;
    //padding: 45px 20px 20px 20px;
    border-top: 1.5px solid #000;
`;

// const UserUpdateUserTable = styled.table`
//     width: 900px;
//     margin: 0 auto;
//     margin-top: 40px;
//     //padding: 45px 20px 20px 20px;
//     border-top: 1.5px solid #000;
// `;

const TableHeader = styled.th`
  font-size: 20px;
  padding: 12px;
  text-align: left;
  background-color: #111111;
  color: #ffffff;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ffffff;
  }
`;

const TableHead = styled.th`
    min-width: 92px;
    font-size: 14px;
    font-weight: 600;
    color: #111;
    text-align: left;
    ;
`;

const TableData = styled.td`
  padding: 10px;
  //border: 1px solid #ddd;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline:none;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  background-color: #f4f4f4;
  color: #111111;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Noto Sans KR", serif;
  

  &:hover {
    background-color: #111111;
    color: #ffffff
  }
`;

const UserUpdateAnimalBox = styled.div`
    width: 900px;
    margin: 0 auto;
    margin-top: 40px;
    //padding: 45px 20px 20px 20px;
    border-top: 1.5px solid #000;
`;

// 수정, 취소 감싸는 박스
const UserUpdateButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: 30px;
`;

// 수정 버튼
const SubmitButton = styled.button`
    color: #0d326f;
    border: 1px solid #0d326f;
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 180px;
    height: 54px;
    padding: 0 31.5px;
    font-weight: 500;
    font-size: 15.3px;
    text-align: center;
    border-radius: 80px;
    margin-right: 20px;


  &:hover {
      background-color: #0d326f;
      color: #fff;
  }
`;

const CancelButton = styled.button`
    color: #ff27a3;
    border: 1px solid #ff27a3;
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 180px;
    height: 54px;
    padding: 0 31.5px;
    font-weight: 500;
    font-size: 15.3px;
    text-align: center;
    border-radius: 80px;
    margin-right: 20px;


  &:hover {
    background-color: #ff27a3;
      color: #fff;
  }
`;

export default UserUpdate;
