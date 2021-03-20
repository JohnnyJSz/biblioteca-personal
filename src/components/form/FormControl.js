import React from "react";
import Input from "./formControls/Input";
import Textarea from "./formControls/Textarea";
import Radio from "./formControls/Radio";
import SelectField from "./formControls/SelectField";
import FieldArr from "./formControls/FieldArr";
import File from "./formControls/File";

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    case "fieldarray":
      return <FieldArr {...rest} />;
    case "file":
      return <File {...rest} />;
    default:
  }
};

export default FormControl;
