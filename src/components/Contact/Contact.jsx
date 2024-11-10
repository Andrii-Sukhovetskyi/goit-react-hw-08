import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/483464/person.svg"
            alt="person"
            width="18px"
            height="18px"
          />
          <p>{name}</p>
        </div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/535565/phone.svg"
            alt="phone"
            width="18px"
            height="18px"
          />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;