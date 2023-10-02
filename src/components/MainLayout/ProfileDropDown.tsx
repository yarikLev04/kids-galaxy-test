'use client';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProfileDropDown = () => {
  const { status, data: session } = useSession();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToAuthUpdatePage = (url: string) => {
    push(url);

    handleClose();
  };

  const logout = async () => {
    await signOut();

    handleClose();
  };

  return status === 'authenticated' ? (
    <>
      <Tooltip title="Open settings">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="primary"
        >
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={() => redirectToAuthUpdatePage('/update-login')}>Update Login</MenuItem>
        <MenuItem onClick={() => redirectToAuthUpdatePage('/update-password')}>Update Password</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  ) : null;
};

export default ProfileDropDown;
