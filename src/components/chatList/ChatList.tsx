import React, { Fragment } from 'react';
import styles from './../../styles/chatList';
//material-ui
import {
  withStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import { Divider, Button, ListItemIcon } from '@material-ui/core';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

const ChatList = (props: any) => {
  const { classes, chats, selectedChatIndex, userEmail } = props;

  const newChat = () => {
    console.log('new chat click');
  };
  const selectChat = (index: any) => {
    console.log('Select Chat ', index);
  };
  if (chats.length > 0) {
    return (
      <main className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          className={classes.newChatBtn}
          onClick={newChat}
        >
          New Message
        </Button>
        <List>
          {chats.map((_chat: any, _index: any) => {
            return (
              <div key={_index}>
                <ListItem
                  onClick={() => selectChat(_index)}
                  className={classes.listItem}
                  selected={selectedChatIndex === _index}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp">
                      {
                        _chat.users
                          .filter((_user: any) => _user != userEmail)[0]
                          .split('')[0]
                      }
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      _chat.users.filter((_user: any) => _user != userEmail)[0]
                    }
                    secondary={
                      <Fragment>
                        <Typography component="span" color="textPrimary">
                          {_chat.messages[
                            _chat.messages.length - 1
                          ].message.substring(0, 30) + '...'}
                        </Typography>
                      </Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </main>
    );
  } else {
    return (
      <main className={classes.root}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={newChat}
          className={classes.newChatBtn}
        >
          New Message
        </Button>
        <List></List>
      </main>
    );
  }
};

export default withStyles(styles)(ChatList);
