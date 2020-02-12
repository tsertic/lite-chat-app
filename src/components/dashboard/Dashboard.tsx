import React, { useState, useEffect } from 'react';
import ChatList from '../chatList/ChatList';
import styles from './Dashboard.module.css';
import { auth, firestore } from './../../firebase/firebase_utils';
const Dashboard = (props: any) => {
  const { history } = props;
  const [selectedChat, setSelectedChat] = useState(null);
  const [newChatFormVisible, setNewChatFormVisible] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [chats, setChats] = useState<any>([]);

  const selectChat = (chatIndex: any) => {
    console.log('selected a chat');
  };

  const newChatBtnClicked = () => {
    setNewChatFormVisible(true);
    setSelectedChat(null);
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
  console.log(chats);
  return (
    <div className={styles.Dashboard}>
      <p>{userEmail}</p>
      <ChatList
        history={history}
        newChatBtnFn={newChatBtnClicked}
        selectChatFn={selectChat}
        chats={chats}
        userEmail={userEmail}
        selectedChatIndex={selectedChat}
      />
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
