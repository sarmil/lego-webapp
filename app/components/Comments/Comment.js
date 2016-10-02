// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import Time from 'app/components/Time';
import CommentForm from 'app/components/CommentForm';
import ProfilePicture from 'app/components/ProfilePicture';
import styles from './Comment.css';

type Props = {
  comment: Object,
  commentFormProps: Object,
};

export default class Comment extends Component {
  props: Props;

  state = {
    replyOpen: false
  };

  closeReply = () => {
    this.setState({ replyOpen: false });
  };

  toggleReply = () => {
    this.setState((prevState) => ({
      replyOpen: !prevState.replyOpen
    }));
  };

  render() {
    const { comment, commentFormProps } = this.props;
    const { createdAt, text, author } = comment;
    const { replyOpen } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.comment}>
          <ProfilePicture
            user={author.id}
            size={64}
            style={{ marginRight: 20 }}
          />

          <div className={styles.content}>
            <div className={styles.header}>
              <Link to={`/users/${author.username}`}>
                {author.username}
              </Link>
              <span className={styles.bullet}>•</span>
              <Time className={styles.timestamp} time={createdAt} wordsAgo />
              <span className={styles.bullet}>•</span>
              <a onClick={this.toggleReply}>
                {this.state.replyOpen ? 'Lukk svar' : 'Svar'}
              </a>
            </div>

            <div
              className={styles.text}
              style={{
                fontStyle: this.state.replyOpen && 'italic'
              }}
            >
              {text}
            </div>
          </div>
        </div>

        {replyOpen && (
          <CommentForm
            form={`comment.${commentFormProps.commentTarget}-${comment.id}`}
            parent={comment.id}
            submitText='Send svar'
            inlineMode
            autoFocus
            {...commentFormProps}
          />
        )}
      </div>
    );
  }
}