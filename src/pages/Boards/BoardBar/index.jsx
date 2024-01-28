import {AvatarGroup, Box, Chip} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
    color: 'white',
    border: 'none',
    bgcolor: 'transparent',
    paddingX: '5px',
    borderRadius: '6px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        backgroundColor: 'primary.50'
    }
}

const BoardBar = () => {
    return (
        <Box px={2} sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            borderBottom: '1px solid #00bfa5'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Chip
                    sx={MENU_STYLES}
                    icon={<DashboardIcon/>}
                    label="Trần Bình FullStack"
                    clickable={true}/>

                <Chip
                    sx={MENU_STYLES}
                    icon={<VpnLockIcon/>}
                    label="Public/Private Workspace"
                    clickable={true}/>
                <Chip
                    sx={MENU_STYLES}
                    icon={<AddToDriveIcon/>}
                    label="Add to Drivers"
                    clickable={true}/>
                <Chip
                    sx={MENU_STYLES}
                    icon={<BoltIcon/>}
                    label="Automation"
                    clickable={true}/>
                <Chip
                    sx={MENU_STYLES}
                    icon={<AddToDriveIcon/>}
                    label="Filters"
                    clickable={true}/>

            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Button sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover' : {
                        borderColor: 'white',
                    }
                }} startIcon={<PersonAddIcon/>} variant={"outlined"}>
                    Invite
                </Button>

                <AvatarGroup max={6} total={24}
                    sx={{
                        gap: '3px',
                        '& .MuiAvatar-root': {
                            width: 36,
                            height: 36,
                            frontSize: 16,
                            border: 'none'
                        }
                    }}
                >
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Tooltip>
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/220px-Official_portrait_of_Barack_Obama.jpg" />
                    </Tooltip>
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Tooltip>
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Tooltip>
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Tooltip>
                    <Tooltip title={'123'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Tooltip>

                </AvatarGroup>


            </Box>
        </Box>
    )
}

export default BoardBar