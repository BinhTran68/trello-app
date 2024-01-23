import { Box, Container } from '@mui/material'
import theme from '../../theme.js'
import AppBar from '../../components/AppBar/index.jsx'
import BoardBar from './BoardBar/index.jsx'
import BoardContent from "./BootContent/index.jsx";

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