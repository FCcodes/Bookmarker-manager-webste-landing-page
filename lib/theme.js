import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 500,
            laptop: 980,
            desktop: 1440
        }
    }
})

theme.typography.h1 = {
    fontSize: '7.5vw',
    [theme.breakpoints.up('tablet')]: {
        fontSize: '4.8vw'
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '3rem'
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '3.3rem'
    }
}

theme.typography.h2 = {
    fontSize: '5vw',
    [theme.breakpoints.up('tablet')]: {
        fontSize: '3.5vw'
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '2.4rem'
    }
}

theme.typography.h3 = {
    fontSize: '3.5vw',
    [theme.breakpoints.up('tablet')]: {
        fontSize: '2vw'
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '1vw'
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '.8vw'
    }
}

theme.typography.h4 = {
  fontSize: "3vw",
  fontWeight: 600,
  [theme.breakpoints.up("tablet")]: {
    fontSize: "2vw",    
  },
  [theme.breakpoints.up("laptop")]: {
    fontSize: "1vw",
  },
  [theme.breakpoints.up("desktop")]: {
    fontSize: ".9vw",
  },
}
        
theme = responsiveFontSizes(theme)



export default theme