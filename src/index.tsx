import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.out.css";

// import VsForm and ISchema
import { VsForm, ISchema } from "@vs-form/tailwind";

// define the schema
const schema: ISchema = {
  type: "card",
  label: "Example",
  // add css classes
  classes: {
    // css classes are grouped by categories
    width: 'w-1/2',
    margin: 'm-10',
  },
  children: [
    {
      type: "input",
      placeholder: 'Name..',
      field: "name",
      classes: {
        margin: 'mb-2',
      },
    
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
  name: "Bill",
};

ReactDOM.render(
  <VsForm schema={schema} values={values} />,
  document.getElementById("root")
);
