import { Box ,styled, Typography} from "@mui/material";
import { navData } from "../../constants/data";

const Data = styled(Box)(({ theme }) => ({
     display:'flex',
     margin: '55px 135px 0 135px',
     justifyContent: 'space-between',
     overflow:'hidden',
     background: '#fff',
     [theme.breakpoints.down('lg')]: {
          margin:0
     }
}));

const Component =styled(Box)`
     padding: 12px 8px;
     text-align: center;
`
const Text =styled(Typography)`
     font-size: 14px;
     font-weight: 600;
     font-family: inherit
`

const NavBar = ()=> {
    return(
     <Box style={{ background: '#fff'}}>
        <Data>
             {
                navData.map((data,index) =>(
                    <Component key={index}>
                         <img src={data.url} alt='nav' style={{width: 64}}/>
                         <Text>{data.text}</Text>
                    </Component>
                ))
                
             }
        </Data>
     </Box>
    )
}

export default NavBar;