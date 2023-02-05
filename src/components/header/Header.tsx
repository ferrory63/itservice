import React from 'react'

import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import { color } from '@mui/system'

export const Header = () => {
    return (
        <AppBar component="nav" position="static">
            <Container fixed>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant="h6">
                        It Service
                    </Typography>
                    <Box mr={2}>
                        <Button color="inherit">
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                                to="/"
                            >
                                Главная
                            </Link>
                        </Button>
                    </Box>
                    <Box mr={2}>
                        <Button color="inherit">
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                                to="/about"
                            >
                                О нас
                            </Link>
                        </Button>
                    </Box>
                    <Box>
                        <Button color="inherit">
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                                to="/contacts"
                            >
                                Контакты
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
