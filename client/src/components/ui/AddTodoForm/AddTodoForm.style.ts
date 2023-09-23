import { Input } from '@mui/material';
import styled from 'styled-components';


const TextFiled= styled(Input)<{errorInput:boolean}>`
   display:inline-block;
   width:80%;
   border:1px solid ${props=>props.errorInput?'red':'black'};
   padding:15px 16px;
`;
const Form = styled.form`
height:70px;
    margin:auto;
    width:60%;
    display:flex;
    justify-content: space-between;
`;

export {Form,TextFiled}