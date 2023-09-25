import React, { useContext } from 'react';

import { ChatContext } from '../context/ChatContext';
import { Container, Stack } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

import UserChat from '../components/chats/UserChat';
import PotentialChtas from '../components/chats/PotentialChtas';

const Chat = () => {
   const { userChats, isUserChatsLoading, userChatsError } = useContext(ChatContext);
   const { user } = useContext(AuthContext);

   console.log('userChats ' + userChats);

   return (
      <Container>
         <PotentialChtas/>
         {userChats?.length < 1 ? null : (
            <Stack direction="horizontal" gap={4} className="align-items-start">
               <Stack className="flex-grow-0 messages-box pe-3" gap={3}>
                  {isUserChatsLoading && <p>Loading chats .... </p>}
                  {userChats?.map((chat, index) => {
                     return (
                        <div key={index}>
                           <UserChat chat={chat} user={user} />
                        </div>
                     );
                  })}
               </Stack>
               <p>Chatbox</p>
            </Stack>
         )}
      </Container>
   );
};

export default Chat;
