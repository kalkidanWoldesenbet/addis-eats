import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/cartStore";
import { validateCheckout } from "./validate";
import Field from "./Field";

const initialFields = { name: "", address: "", phone: "" };

function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [fields, setFields] = useState(initialFields);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = validateCheckout(fields);
  const hasErrors = Object.keys(errors).length > 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, address: true, phone: true });

    if (hasErrors) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600)); // simulate placing the order
    clearCart();
    setSubmitting(false);
    navigate("/", { state: { orderPlaced: true } });
  }

  if (items.length === 0) {
    return <p>Your cart is empty — nothing to check out.</p>;
  }

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit} noValidate>
        <Field
          label="Full name"
          name="name"
          value={fields.name}
          error={errors.name}
          touched={touched.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Delivery address"
          name="address"
          value={fields.address}
          error={errors.address}
          touched={touched.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Phone number"
          name="phone"
          value={fields.phone}
          error={errors.phone}
          touched={touched.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <h2>Total: {total} ETB</h2>

        <button type="submit" disabled={submitting}>
          {submitting ? "Placing order…" : "Place order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;