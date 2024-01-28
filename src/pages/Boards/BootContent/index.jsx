import theme from '~/theme.js'
import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        width: '100%',
      height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
            Board Content
    </Box>
  )
}

export default BoardContent