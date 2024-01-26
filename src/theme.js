import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import {colors} from "@mui/material";

// Create a theme instance.
// Sửa cấu hình button
//
const theme = extendTheme({
    trello: {
        appBarHeight: '58px',
        boardBarHeight: '58px'
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange
            }
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange
            }
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // Some CSS
                    textTransform: 'none'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({theme}) => {
                    return {
                        color: theme.palette.primary.main,
                        frontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: ({ theme }) => {
                    return {
                        color: theme.palette.primary.main,
                        fontSize: '0.875rem',
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                        }, '&:hover': {
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.primary.main
                            }
                        },
                        // '& fieldset': {
                        //     borderWidth: '1px !important'
                        // }
                    }
                }
            }
        }

    }
//     other properties

})
export default theme