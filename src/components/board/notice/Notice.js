import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeTable from "./NoticeTable";
import NoticePagination from "./NoticePagination";
import axios from "axios";

function Notice() {
  const [bbsList, setBbsList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCnt, setTotalCnt] = useState(0);

  const getBbsList = async (page) => {
    try {
      const response = await axios.get("/api/member/notice/list", {
        params: { page: page - 1 },
      });
      console.log(response.data.content);
      setBbsList(response.data.content);
      setPageSize(response.data.pageSize || 10);
      setTotalCnt(response.data.totalElements > 0 ? response.data.totalElements : 1);
      console.log("notice seccess")
      console.log(response);
      console.log("총 개수:", totalCnt); 
    } catch (error) {
      console.log("Error fetching board data:", error);
    }
  };
  useEffect(() => {
    getBbsList(page);
  }, [page]);

  //----------
  return (
    <Container>
      <ContentWrapper>
        <LoginBox>
          <LoginTitle>공지사항</LoginTitle>
          <LoginSub>하이펫병원의 새로운 소식을 확인하세요.</LoginSub>
        </LoginBox>

        <NoticeTable
           bbsList={bbsList}
        />

        <PaginationBox>
          <NoticePagination 
            page={page} 
            setPage={setPage} 
            pageSize={pageSize} 
            totalCnt={totalCnt} 
          />

        </PaginationBox>
      </ContentWrapper>
    </Container>
  );
}

// 컨테이너
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 1.로그인 문구_박스
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

//  내부 콘텐츠
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//  공지사항 제목
const NoticeTitle = styled.div`
  width: 1000px;
  height: 50px;
  margin-top: 100px;
  text-align: left;
  h1 {
    font-weight: bold;
    font-size: 36px;
    font-family: "Noto Sans KR", serif;
  }
`;

const PaginationBox = styled.div``;

export default Notice;
