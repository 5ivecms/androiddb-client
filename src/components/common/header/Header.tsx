import AdbIcon from '@mui/icons-material/Adb'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { headerMenu } from './header.data'
import { linkMenu, linksContainer, logoIcon, logoText, toolbar } from './style.sx'

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbar}>
          <AdbIcon sx={logoIcon} />
          <Typography variant="h6" noWrap component="a" href="/" sx={logoText}>
            AndroidDB
          </Typography>
          <Box sx={linksContainer}>
            {headerMenu.map((item) => (
              <Button key={item.url} sx={linkMenu} component={Link} to={item.url}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
