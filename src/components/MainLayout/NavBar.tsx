import NavButton, { NavButtonProps } from '@/components/MainLayout/NavButton';
import Offset from '@/components/MainLayout/Offset';
import ProfileDropDown from '@/components/MainLayout/ProfileDropDown';
import { AppBar, Stack, Toolbar } from '@mui/material';

const navButtons: NavButtonProps[] = [
  { children: 'About', href: '/#about' },
  { children: 'Contacts', href: '/#contacts' },
  { children: 'What We Do', href: '/#whatWeDo' },
  { children: 'Rules', href: '/#rules' }
];

const NavBar = () => {
  return (
    <>
      <AppBar component="nav" position="fixed">
        <Toolbar>
          <Stack spacing={2} direction="row" margin="0 auto">
            {navButtons.map((btn, index) => (
              <NavButton key={index} href={btn.href}>
                {btn.children}
              </NavButton>
            ))}
            <ProfileDropDown />
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
