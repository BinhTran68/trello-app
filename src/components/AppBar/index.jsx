import {useState} from "react";
import {Badge, Box, InputAdornment, TextField, Typography} from '@mui/material'
import ModeSelect from '~/components/ModeSelect/index.jsx'
import AppsIcon from '@mui/icons-material/Apps'
import {ReactComponent as TrelloIcon} from '~/assets/trello.svg'
import SvgIcon from '@mui/icons-material/Apps'
import Workspaces from "~/components/AppBar/Menu/Workspaces.jsx";
import Recent from "~/components/AppBar/Menu/Recent.jsx";
import Button from "@mui/material/Button"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from "~/components/AppBar/Menu/Profiles.jsx"
import Starred from "~/components/AppBar/Menu/Starred.jsx"
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'


const AppBar = () => {

    const [searchValue, setSearchValue] = useState('')
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            overflowX: 'auto',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <AppsIcon sx={{color: 'white'}}/>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.3
                }}>
                    <SvgIcon component={TrelloIcon} fontSize={"small"} inheritViewBox={true} sx={{color: 'white'}}/>
                    <Typography variant={'span'} sx={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Trello</Typography>
                </Box>
                <Box sx={{
                    display: {xs: 'none', md: "flex"}
                }}>
                    <Workspaces/>
                    <Recent/>
                    <Starred/>
                    <Button
                        sx={{
                            color: 'white',
                            border: 'none',
                            '&:hover': {
                                border: 'none',
                                opacity: '0.8'
                            }
                        }}
                        variant={"outlined"}>
                        Create
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <TextField
                    size={"small"}
                    id="outlined-search"
                    label="Search..."
                    type="text"
                    value={searchValue}
                    onChange={(e)=> setSearchValue(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{
                                    color: 'white'
                                }}/>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <CloseIcon
                                onClick={()=> setSearchValue('')}
                                sx={{
                                fontSize: 18,
                                color: searchValue?'white':'transparent',
                                cursor: 'pointer'
                            }}/>
                        )
                    }}
                    sx={{
                        minWidth: 120,
                        maxWidth: '160px',
                        '& label': {
                            color: 'white'
                        },
                        '& input': {
                            color: 'white'
                        },
                        '& label.Mui-focused': {
                            color: 'white'
                        },
                        '& .MuiOutlinedInput-root': {
                           '& fieldset': {
                              borderColor: 'white',
                           },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                               borderColor: 'white'
                            }
                        }
                    }}
                />
                <ModeSelect/>
                <Tooltip title="Notifications">
                    <Badge color="warning" variant={"dot"} sx={{
                        cursor: 'pointer'
                    }}>
                        <NotificationsNoneIcon
                            sx={{
                                cursor: 'pointer',
                                color: 'white'
                            }}
                        />
                    </Badge>
                </Tooltip>
                <Tooltip title="help">
                    <HelpOutlineIcon sx={{
                        cursor: 'pointer',
                        color: 'white'
                    }}/>
                </Tooltip>
                <Profiles/>
            </Box>
        </Box>
    )
}

export default AppBar