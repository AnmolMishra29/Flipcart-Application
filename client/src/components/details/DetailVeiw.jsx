import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;   
`

const Container =styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  diplay: 'flex',
  [theme.breakpoints.down('md')]: {
    margin:0
  }
}))
    
const RightContainer =styled(Grid)`
    background: #FFFFFF;
    margin-top: 50px;
`

const DetailVeiw = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  //const { loading, product } = useSelector((state) => state.getProductDetails);
  const { product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
      dispatch(getProductDetails(id))
  }, [dispatch]);

  return (

    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid Item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
           <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product}/>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailVeiw;
