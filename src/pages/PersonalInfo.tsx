import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../store/useCheckoutStore";
import { useCartStore } from "../store/useCartStore";
import OrderSummary from "../components/OrderSummary";
import PersonalForm from "../components/PersonalInformation/PersonalForm";
import ShippingMethod from "../components/PersonalInformation/ShippingMethod";
import PaymentMethod from "../components/PersonalInformation/PaymentMethod";

const PersonalInfo = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState("Free");
  const [payment, setPayment] = useState("Cash on delivery");

  const { setInfo } = useCheckoutStore();
  const navigate = useNavigate();

  const handleBuy = () => {
    setInfo({ name, email, phone, address, shipping, payment });
    navigate("/order-information");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-10">
        <PersonalForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
        />
        <ShippingMethod shipping={shipping} setShipping={setShipping} />
        <PaymentMethod payment={payment} setPayment={setPayment} />
      </div>

      <div className="mt-12">
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery="01 May, 2025"
          step="info"
          onAction={handleBuy}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
