import { Contact } from '../../interfaces/contact.interface';

export const validateContact = {
  name: (name: string) => {
    const nameRegex = /^[a-z ,.'-]+$/i;
    return name !== "" && nameRegex.test(name);
  },
  phone: (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  },
  email: (email: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+([a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  },
  validate: (newContact: Contact) => {
    const { id, fname, lname, phone, email } = newContact;

    if (id && fname != undefined && !validateContact.name(fname) ||
          !id && fname == undefined || !validateContact.name(fname))
      return { error: "The first name entered is invalid" };
    if (id && lname != undefined && !validateContact.name(lname) ||
          !id && lname == undefined || !validateContact.name(lname))
      return { error: "The last name entered is invalid" };
    if(phone && phone !== "" && !validateContact.phone(phone))
      return { error: "The phone number entered is invalid" };
    if(email && email !== "" && !validateContact.email(email))
      return { error: "The email entered is invalid" };
    
    return { message: "All input is valid" };
  }
};
