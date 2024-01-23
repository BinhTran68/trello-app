import theme from '../../../theme.js'
import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
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