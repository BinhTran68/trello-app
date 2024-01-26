import {
  Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme, useColorScheme
} from '@mui/material/styles'
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    // setAge(event.target.value)
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <InputLabel id="demo-select-dark-light-mode">Mode</InputLabel>
    <Select
      labelId="demo-select-dark-light-mode"
      id="select-dark-light-mode"
      value={mode}
      label="Mode"
      onChange={handleChange}
    >
      <MenuItem value="light">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Light
        </Box>
      </MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
      <MenuItem value="system">System</MenuItem>
    </Select>
  </FormControl>)
}

ModeSelect.propTypes = {}

export default ModeSelect