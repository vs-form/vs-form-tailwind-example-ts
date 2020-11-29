import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.out.css";

// import VsForm
import { VsForm } from "@vs-form/tailwind";

// define the schema
const schema = {
  type: "form",
  children: [
    {
      type: "input",
      field: "text1",
      label: "Text1",
    },
    {
      type: "button",
      label: "Save",
      onClick({sm}) {
        // alert the values (sm is the instance of the SchemaManager)
        alert(JSON.stringify(sm.Values, null, 2));
      }
    },
  ],
};

// define the values
const values = {
  text1: "Hello",
};

ReactDOM.render(
  <VsForm schema={schema} values={values} />,
  document.getElementById("root")
);
