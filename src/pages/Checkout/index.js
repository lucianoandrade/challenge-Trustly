import PageContainer from "../../components/PageContainer";
import LineStage from "../../components/Stages";
import CheckoutDesktop from "../../components/CheckoutDesktop";
import CheckoutMobile from "../../components/CheckoutMobile";

function CheckoutPage(props) {
  return (
    <PageContainer>
      <LineStage />
      <CheckoutDesktop product={props.location.state}/>
      <CheckoutMobile product={props.location.state} />
    </PageContainer>
  );
};

export default CheckoutPage;