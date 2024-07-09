import CardDetails from '../components/checkout/cardDetails';
import DeliveryDetails from '../components/checkout/deliveryDetails';
import Footer from '../components/home/footer';
import Header from '../components/home/header';

function Checkout() {
  return (
    <div>
      <Header />
      <DeliveryDetails/>
      <CardDetails/>
      <Footer />
    </div>
  );
}
export default Checkout;
