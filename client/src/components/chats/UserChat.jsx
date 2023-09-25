import React from 'react';
import { useFetchRecipientUser } from '../hooks/useFetchRecipient';

import { Stack } from 'react-bootstrap';
import avata from '../../assets/avatar.png';

const UserChat = ({ chat, user }) => {
   const { recipientUser } = useFetchRecipientUser({ chat, user });

   console.log(recipientUser);
   return (
      <Stack
         direction="horizontal"
         gap={3}
         className="user-card align-items-center p-2 justify-content-between "
         role="button"
      >
         <div className="d-flex">
            <div className="me-2">
               <img src={avata} alt="" />
            </div>
            <div className="text-content">
               <div className="name">{recipientUser?.name}</div>
               <div className="text">Text Message</div>
            </div>
         </div>
         <div className="d-flex flex-column align-items-end">
            <div className="date">24/09/2023</div>
            <div className="this-user-notifications">2</div>
            <span className="user-online"></span>
         </div>
      </Stack>
   );
};

export default UserChat;
