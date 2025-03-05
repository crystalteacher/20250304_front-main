import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import plus from './imgs/plus.svg';
import minus  from './imgs/minus.svg';

//AnimalProfile
const AnimalProfile = () => {
    const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        axios.get('/api/{memerId}/pet')
            .then(response => {
                setInputValue([{
                    name: response.data.name,
                    species: response.data.species,
                    age: response.data.age,
                    weight: response.data.weight
                }]);
            })
            .catch(() => {
                setInputValue([{name: '', species: '', age: '', weight: ''}]);
            });
    }, []);

    const addContent = () => {
        setInputValue([...inputValue, {name: '', species: '', age: '', weight: ''}]);
    };

    const deleteContent = (index) => {
        setInputValue(inputValue.filter((_, i) => i !== index));
    };

    return (
        <AnimalProfileContainer>

            <AddButton onClick={addContent}>
                <img src={plus} />
                <p className="b_tit">반려동물정보 추가</p>
            </AddButton>


            {/*/반려동물 구간*/}
            {inputValue.map((item, index) => (
                <AnimalTableWrapper key={index}>

                    <DeleteButton onClick={() => deleteContent(index)}>
                        <img src={minus} />
                        <p className="b_tit">반려동물정보 삭제</p>
                    </DeleteButton>


                    <AnimalTable>
                        {["반려동물 이름", "반려동물 종류", "번려동물 나이"].map((label, i) => (
                            <TableRow key={i}>
                                <TableHead>{label}</TableHead>
                                <TableData>
                                    <Input
                                        type="text"
                                        value={item[label.toLowerCase()]}
                                        onChange={(e) => {
                                            const newInputValue = [...inputValue];
                                            newInputValue[index][label.toLowerCase()] = e.target.value;
                                            setInputValue(newInputValue);
                                        }}
                                    />

                                </TableData>
                            </TableRow>
                        ))}

                    </AnimalTable>
                </AnimalTableWrapper>
            ))}
        </AnimalProfileContainer>
    );
};


// 📌 `UserUpdate` 폼과 일관된 너비 유지
const AnimalProfileContainer = styled.div`
    width: 900px;
    margin: 0 auto;
    padding: 45px 10px 10px 10px;
    position: relative;
`;

// const Table = styled.div`
//     width: 900px;
//     margin: 0 auto;
//     display: flex;
//     justify-content: center;
// `;
//반려동물 추가 버튼
const AddButton = styled.button`
    width: 100%;
    height: 51px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 15px;
    background-color: #0d326f;
    transition: color 0.3s, background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    .b_tit{
        font-family: "Noto Sans KR", serif;
        font-size: 16px;
        text-align: center;
        color: #fff;
        font-weight: 400;
        float: right;
       
    }
    img{
        cursor: pointer;
        width: 25px;
        height: auto;
        margin-top: 2px;
        margin-right: 15px;
    }
    &:hover {
        background-color: #ff27a3;
        color: #fff;
    }
`;
//반려동물 삭제 버튼
const DeleteButton = styled.button`
    width: 880px;
    height: 51px;
    padding: 12px;
    cursor: pointer;
    background-color: #ff27a3;
    transition: color 0.3s, background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    
    .b_tit {
        font-family: "Noto Sans KR", serif;
        font-size: 16px;
        text-align: center;
        color: #fff;
        font-weight: 400;
        float: right;
    }

    img {
        cursor: pointer;
        width: 25px;
        height: auto;
        margin-top: 2px;
        margin-right: 15px;
    }

    &:hover {
        background-color: #ff0063;
        color: #fff;
    }
`;

const AnimalTableWrapper = styled.div`
    width: 900px;
    margin: 0 auto;
    
`;


const AnimalTable = styled.table`
    width: 900px;
    margin: 0 auto;
    background-color: #fff;
    //padding: 20px 20px 20px 20px;
`;

const TableRow = styled.tr`
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: left;
 
`;

const TableHead = styled.th`
    min-width: 92px;
    font-size: 14px;
    font-weight: 600;
    color: #111;
    text-align: left;
    //margin-left: 10px;
    text-indent: 10px;
`;

const TableData = styled.td`
  
    padding: 10px;
`;

const Input = styled.input`
    width: 730px;
    height: 54px;
    outline: none;
    font-size: 14.2px;
    color: #111;
    font-weight: 400;
    padding: 0 32px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin-left: 40px;
`;

export default AnimalProfile;
