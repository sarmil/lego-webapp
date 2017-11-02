// @flow

import React from 'react';
import styles from './AnnouncementsList.css';
import Flex from 'app/components/Layout/Flex';
import AnnouncementItem from './AnnouncementItem';
import AnnouncementsCreate from './AnnouncementsCreate';
import { Content, ContentMain } from 'app/components/Content';

type Props = {
  announcement: Object,
  announcements: Array<Object>,
  actionGrant: /* TODO: ActionGrant */ any,
  sendAnnouncement: () => void,
  createAnnouncement: (announcement: any) => void,
  deleteAnnouncement: () => void,
  handleSubmit: /*SubmitHandler<>*/ any => void,
  invalid: string,
  pristine: string,
  submitting: string
};

const AnnouncementsList = ({
  createAnnouncement,
  sendAnnouncement,
  deleteAnnouncement,
  announcements,
  actionGrant,
  handleSubmit,
  invalid,
  pristine,
  submitting
}: Props) => {
  return (
    <Content>
      <AnnouncementsCreate
        createAnnouncement={createAnnouncement}
        actionGrant={actionGrant}
      />
      {actionGrant.includes('list') &&
        actionGrant.includes('delete') && (
          <ContentMain>
            <h1 className={styles.header}> Mine kunngjøringer </h1>
            <Flex column className={styles.list}>
              {announcements.map((a, i) => (
                <AnnouncementItem
                  key={i}
                  announcement={a}
                  sendAnnouncement={sendAnnouncement}
                  deleteAnnouncement={deleteAnnouncement}
                  actionGrant={actionGrant}
                />
              ))}
            </Flex>
          </ContentMain>
        )}
    </Content>
  );
};

export default AnnouncementsList;
