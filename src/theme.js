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
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange
        //     }
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange
        //     }
        // }
    },
    components: {
        MuiCssBaseline : {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#bdc3c7',
                        borderRadius: '12px'
                    }
                    ,
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#fff',
                        borderRadius: '12px'
                    }

                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // Some CSS
                    textTransform: 'none',
                    borderWidth: '1px',
                    '&:hover' : {
                        borderWidth: '2px',
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {

                frontSize: '0.875rem',
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                fontSize: '0.875rem',
                // '.MuiOutlinedInput-notchedOutline': {
                //     borderColor: theme.palette.primary.main
                // }, '&:hover': {
                //     '.MuiOutlinedInput-notchedOutline': {
                //         borderColor: theme.palette.primary.main
                //     }
                // },
                '& fieldset': {
                    borderWidth: '1px'
                },
                '&:hover fieldset': {
                    borderWidth: '2px',
                },
                '&.Mui-focused fieldset': {
                    borderWidth: '2px !important',
                },
                root: ({ theme }) => {
                    return {
                        // color: theme.palette.primary.main,

                    }
                }
            }
        }

    }
//     other properties

})
export default theme