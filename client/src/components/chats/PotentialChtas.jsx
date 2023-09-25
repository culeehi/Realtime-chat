import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';

const PotentialChtas = () => {
   const { PotentialChtas } = useContext(ChatContext);
   console.log(PotentialChtas);
   return <div>Start Chats</div>;
};

export default PotentialChtas;
