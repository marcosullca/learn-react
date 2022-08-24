import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const ReactRouterLearn = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography style={{ padding: '10px' }} variant='h5' component="h3" >React Router Learn (v6)</Typography>
            </Grid>
            <Grid item xs={4} display="flex">
                <List>
                    <Link to="">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Navigate 1" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/react_router/navigate2">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Navigate 2" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/react_router/routes-element-error">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Routes element - error" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="nav-link">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Link and NavLink" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="use-params">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="useParams" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="use-search-params">
                        <ListItem>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="useSearchParams" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Grid>
            <Grid item xs={12}>
                <Outlet />
            </Grid>
        </Grid>
    )
}

export default ReactRouterLearn