 import CardDetails from "./cardDetails"
 import DeliveryDetails from "./deliveryDetails"
//  import OrderSummary from "./orderSummary"
 
 function Content(){
    return (
  <div 
  // className="w-[1280px] h-[807.78px]  justify-between items-start inline-flex"
  >
    <DeliveryDetails/>
    <CardDetails/>
    
    {/* <OrderSummary/> */}
  </div>
    )
}
export default Content
