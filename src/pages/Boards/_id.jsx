import { Box, Container } from '@mui/material'
import AppBar from '~/components/AppBar/index.jsx'
import BoardBar from '~/pages/Boards/BoardBar/index.jsx'
import BoardContent from '~/pages/Boards/BootContent/index.jsx'

const Board = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{
        height: '100vh'
      }}>
        <AppBar/>
        <BoardBar/>
        <BoardContent/>
      </Container>

      <hr/>
    </>
  )
}

export default Board