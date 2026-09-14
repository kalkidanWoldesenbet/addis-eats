export function validateCheckout(fields) {
    const errors = {};
    if(!fields.name.trim()){
        errors.name = "Name is required.";
    }
    if (!fields.address.trim()) {
    errors.address = "Delivery address is required.";
    }
  
    if (!/^\d{9,10}$/.test(fields.phone.trim())) {
      errors.phone = "Enter a valid phone number (9–10 digits).";
    }
  
    return errors;
}