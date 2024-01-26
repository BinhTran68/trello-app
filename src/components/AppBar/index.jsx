import {Badge, Box, TextField, Typography} from '@mui/material'
import ModeSelect from '~/components/ModeSelect/index.jsx'
import AppsIcon from '@mui/icons-material/Apps'
import {ReactComponent as TrelloIcon} from '~/assets/trello.svg'
import SvgIcon from '@mui/icons-material/Apps'
import Workspaces from "~/components/AppBar/Menu/Workspaces.jsx";
import Recent from "~/components/AppBar/Menu/Recent.jsx";
import Button from "@mui/material/Button";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from "~/components/AppBar/Menu/Profiles.jsx";

const AppBar = () => {
    return (
        <Box px={2} sx={{
            width: '100%',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <AppsIcon sx={{color: 'primary.main'}}/>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.3
                }}>
                    <SvgIcon component={TrelloIcon} fontSize={"small"} inheritViewBox={true} sx={{color: 'primary.main'}}/>
                    <Typography variant={'span'} sx={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}>Trello</Typography>
                </Box>
                <Workspaces/>
                <Recent/>
                <Button  variant={"outlined"}>
                    Create
                </Button>
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
                    type="search"/>
                <ModeSelect/>
                <Tooltip title="Notifications">
                    <Badge color="secondary" variant={"dot"} sx={{
                        cursor: 'pointer'
                    }}>
                        <NotificationsNoneIcon/>
                    </Badge>
                </Tooltip>
                <Tooltip title="help">
                    <HelpOutlineIcon sx={{
                        cursor: 'pointer',
                    }}/>
                </Tooltip>
                <Profiles/>
            </Box>
        </Box>
    )
}

export default AppBar