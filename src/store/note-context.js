import React from "react";

const NoteContext = React.createContext({
  itmes: [],
  totalAmount: 0,
  addNote: (item) => {},
});

export default NoteContext;
