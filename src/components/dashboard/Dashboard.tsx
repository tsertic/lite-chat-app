import React, { useState, useEffect } from 'react';
import styles from './../../styles/dashBoard';
import ChatList from '../chatList/ChatList';

import { auth, firestore } from './../../firebase/firebase_utils';
import { withStyles, Button } from '@material-ui/core';
import ChatView from '../chatView/ChatView';
const Dashboard = (props: any) => {
  const { history, classes } = props;
  const [selectedChat, setSelectedChat] = useState<any>(0);
  const [newChatFormVisible, setNewChatFormVisible] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [chats, setChats] = useState<any>([]);

  const selectChat = (chatIndex: any) => {
    console.log('selected a chat');
    setSelectedChat(chatIndex);
  };

  const newChatBtnClicked = () => {
    setNewChatFormVisible(true);
    setSelectedChat(0);
    console.log('button click');
  };
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (!user) {
        props.history.push('/login');
      } else {
        firestore
          .collection('chats')
          .where('users', 'array-contains', user.email)
          .onSnapshot(async res => {
            const chatsaa = res.docs.map(doc => doc.data());
            setUserEmail(user.email);
            setChats(chatsaa);
          });
      }
    });
  }, []);

  return (
    <div>
      <ChatList
        history={history}
        newChatBtnFn={newChatBtnClicked}
        selectChatFn={selectChat}
        chats={chats}
        userEmail={userEmail}
        selectedChatIndex={selectedChat}
      />

      <Button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </Button>
      {!newChatFormVisible && (
        <ChatView user={userEmail} chat={chats[selectedChat]} />
      )}
    </div>
  );
};

export default withStyles(styles)(Dashboard);
