import React, { useState } from "react";
import styled from "styled-components";

import search from "./imgs/search.png";
import { Link } from "react-router-dom";


//NoticeTable
function NoticeTable({ bbsList }) {
   console.log("bbsList여부", bbsList);  // bbsList가 전달되고 있는지 확인
  // const notices = [
  //   { id: 1, title: "제목", date: "2025-02-20", views: 11 },
  //   { id: 2, title: "제목", date: "2025-02-20", views: 10 },
  //   { id: 3, title: "제목", date: "2025-02-20", views: 10 },
  //   { id: 4, title: "제목", date: "2025-02-20", views: 10 },
  //   { id: 5, title: "제목", date: "2025-02-20", views: 10 },
  //   { id: 6, title: "제목", date: "2025-02-20", views: 11 },
  //   { id: 7, title: "제목", date: "2025-02-20", views: 10 },
  //   { id: 8, title: "제목", date: "2025-02-20", views: 10 },
  // ];

  const addEmptyRows = (data) => {
  
  // 데이터가 배열인지 확인하고, 배열이 아니면 빈 배열을 반환
  if (!Array.isArray(data)) {
    return [];
  }

  const rowsWithEmpty = [];
  data.forEach((item, index) => {
    rowsWithEmpty.push({});  // 빈 데이터 행 추가
    rowsWithEmpty.push(item); // 실제 데이터 행 추가
  });
  return rowsWithEmpty;
};
    const noticesWithEmptyRows = addEmptyRows(bbsList);



  return (
    <Container>
      <NoticeTableBox>
      <NoticeSearchBox>
        <img src={search} />
        <SearchField
            type="text"
            placeholder="무엇이든 찾아보세요." />
      </NoticeSearchBox>


        <NoticeTabled>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>


            </tr>
          </thead>

          <tbody>
            {noticesWithEmptyRows.map((response, index) => (
              <tr key={index}>
                {response.id ? (
                  // 데이터가 있을 때
                  <>
                    <td>{response.id}</td>
                    <Link to={`/noticedetail/${response.id}`}>
                      <td>{response.title}</td>
                     </Link>
                     

                  </>
                ) : (
                  // 빈 데이터 행일 때 (공백 행)
                  <>
                    <td colSpan={4}>&nbsp;</td>
                    <td> 글</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </NoticeTabled>
      </NoticeTableBox>
    </Container>
  );
}

// 컨테이너
const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
`;

//  검색 박스
const NoticeSearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  border: none;
  outline: none;
  margin-bottom: 80px;
  
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 26px;
    height: 26px;
    opacity: 0.5;
    cursor: pointer;
  }
  input {
    padding-left: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
    color: #888;
    
  }
  input:focus {
    outline: none;
    color: #111;
  }
`;

//  검색 필드 스타일
const SearchField = styled.input`
  margin-top: 25px;
  width: 920px;
  height: 55px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 18px;
  font-family: "Noto Sans KR", serif;
`;

//  공지사항 테이블 박스
const NoticeTableBox = styled.div`
  
`;

//  공지사항 테이블
const NoticeTabled = styled.table`
  width: 900px;
  padding: 40px 20px 20px 20px;
  border-bottom: 1px solid rgb(176, 184, 193);
  

  thead {
    background-color: #f5f7f9;
  }

  thead th {
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
    font-family: "Noto Sans KR", serif;
    color: #111;
  }

tbody tr {
  &:nth-child(odd) {
    border: none;
    height: 40px;
  }
  &:nth-child(even) {
    background-color: #f5f7f9;
    border-bottom: 1px solid rgb(176, 184, 193);
    height: 70px;
  }
}

tbody td {
  padding: 10px;
  font-weight: 400;
  font-size: 14.2px;
  color: #888;
  font-family: "Noto Sans KR", serif;
  text-align: center;  /* 기본적으로 가운데 정렬 */
}

tbody td:nth-of-type(1) {
  width: 80px;
}

tbody td:nth-of-type(2) {
  width: 920px;
}


`
export default NoticeTable;
