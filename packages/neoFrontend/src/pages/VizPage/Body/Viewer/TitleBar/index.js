import React from 'react';
import { VoteSVG } from '../../../../../svg';
import { showUpvote, showDownvote } from '../../../../../featureFlags';
import { Wrapper, Title, Voter, VoteIcon } from './styles';
import { PrivacyNotice } from './PrivacyNotice';

export const TitleBar = ({
  title,
  upvoteCount,
  onUpvoteClick,
  canVote,
  didVote,
  isPrivate,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Voter>
      {showUpvote ? (
        <>
          <VoteIcon
            leftmost={true}
            onClick={onUpvoteClick}
            canVote={canVote}
            title={
              canVote
                ? didVote
                  ? 'Remove upvote'
                  : 'Upvote'
                : 'Sign in to upvote.'
            }
          >
            <VoteSVG didVote={didVote} />
          </VoteIcon>
          {upvoteCount}
        </>
      ) : null}
      {showDownvote ? (
        <>
          <VoteIcon>
            <VoteSVG down={true} />
          </VoteIcon>
          6
        </>
      ) : null}
      {isPrivate ? <PrivacyNotice /> : null}
    </Voter>
  </Wrapper>
);
