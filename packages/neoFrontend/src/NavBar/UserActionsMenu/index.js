import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authentication';
import { CloseSVG } from '../../svg';
import { Avatar } from './Avatar';
import { AvatarOverlay, Wrapper, Menu, Item, HorizontalRule } from './styles';
import { useCloseOnGlobalClick } from './useCloseOnGlobalClick';

export const UserActionsMenu = ({ height, avatarBorderColor }) => {
  const { me, signOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useCloseOnGlobalClick(isOpen, close);

  return (
    <Wrapper height={height}>
      <Avatar
        size={height}
        borderColor={avatarBorderColor}
        user={me}
        onClick={open}
      />
      {isOpen ? (
        <>
          <AvatarOverlay size={height}>
            <CloseSVG height={parseFloat(height) / 2} />
          </AvatarOverlay>
          <Menu>
            <Link to="create-viz">
              <Item className="test-create-viz">Create Visualization</Item>
            </Link>
            <HorizontalRule />
            <Item className="test-sign-out" onClick={signOut}>
              Sign out
            </Item>
          </Menu>
        </>
      ) : null}
    </Wrapper>
  );
};
