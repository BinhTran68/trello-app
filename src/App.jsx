import { pink } from '@mui/material/colors'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function ModeSelect() {
  // const [age, setAge] = React.useState('');
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    // setAge(event.target.value)
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="demo-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  )
}


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>

      <ModeSelect/>
      <hr/>
      <ModeToggle/>
      <div>
                Trần Bình
      </div>
      <Button color="error" variant="contained">Hello world</Button>
      <Button variant="text">Hello world</Button>
      <Button variant="outlined">Hello world</Button>


      <HomeIcon/>
      <HomeIcon color="primary"/>
      <HomeIcon color="secondary"/>
      <HomeIcon color="success"/>
      <HomeIcon color="action"/>
      <HomeIcon color="disabled"/>
      <HomeIcon sx={{ color: pink[500] }}/>


    </>
  )
}

export default App
