import React, { useState } from "react";
import {GlobalStyle} from "../StyleGlobal";
import * as S from "./ToDoStyle";

export default function Todo(){
    const [input, setInput] = useState()
    const [list, setList] = useState([])
  
    const handleClick = () =>{
  
        const InputValue ={
            value: input,
            id: Date.now()
        };

        if( input !== ""){
            setList( prevState => [...prevState, InputValue] )
            setInput('')
        };
    };
  
    const deleteTask = (id) => {
        const FiltredList = list.filter(item => item.id !== id)
    
        setList(FiltredList)
    };
  
    const deleteAll = () => {
        setList([])
    };
  
    return(
      <>
      <GlobalStyle />
        <S.Container>
            <S.Title>Metas do Dia</S.Title>
            <S.Form onSubmit={(e) => e.preventDefault()}>
              <input onChange={(e) => {setInput(e.target.value)}} value={input} placeholder="Digite sua Tarefa" />
              <button onClick={() => {handleClick()}}>+</button>
            </S.Form>
            <S.List>{list.map(item => (
              <li>
              {item.value}  
              <button onClick={() =>{deleteTask(item.id) }}>X</button>
              </li>
            ))}</S.List>
            <S.ClearAll onClick={() => {deleteAll()}}>Deletar Tudo</S.ClearAll>
        </S.Container>
      </>
    )
  };