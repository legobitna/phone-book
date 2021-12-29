import React, { useEffect, useState } from "react";
import SearchForm from "./searchForm";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div>
      <SearchForm />
      <div className="contact-list">
        num:{filteredList.length}
        {filteredList &&
          filteredList.map((item) => (
            <ContactItem phone={item.phone} name={item.name} />
          ))}
      </div>
    </div>
  );
};

export default ContactList;
