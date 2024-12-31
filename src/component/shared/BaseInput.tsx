import {
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  TimePicker,
} from "antd";
import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from "libphonenumber-js";

function BaseInput(props: any) {
  const [defaultCountry, setDefaultCountry] = useState("AE");
  const dateFormat = "YYYY-MM-DD";
  const [value, setValue] = useState(props.value ? props.value : "");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Update local state if props.value changes
    setValue(props.value || "");
  }, [props.value]);

  const handleChange = (newValue: any) => {
    setValue(newValue || "");
    setIsValid(isValidPhoneNumber(newValue || ""));
  };

  useEffect(() => {
    // Only parse if the value is not empty
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber && phoneNumber.country) {
          setDefaultCountry(phoneNumber.country);
        }
      } catch (error) {
        console.error("Failed to parse phone number:", error);
        // Fallback to a default country if parsing fails
        setDefaultCountry("AE");
      }
    } else {
      setDefaultCountry("AE"); // Default when no value is provided
    }
  }, [value]);

  if (props.type === "text") {
    return (
      <Input
        prefix={props.icon && <img className="w-[24px]" src={props.icon} />}
        className="!rounded-[5px] h-[44px] w-[100%]"
        {...props}
      />
    );
  } else if (props.type === "textarea") {
    return <Input.TextArea className="!rounded-[11px] !h-[103px]" {...props} />;
  } else if (props.type === "select") {
    return (
      <Select
        mode={props.mode}
        placeholder=""
        className="!rounded-[11px] h-[44px]"
        options={props.options}
        {...props}
      />
    );
  } else if (props.type === "date") {
    return (
      <DatePicker
        format={dateFormat}
        className="!rounded-[11px] h-[44px]"
        style={{ width: "100%" }}
        placeholder=""
        {...props}
      />
    );
  } else if (props.type === "time") {
    return (
      <TimePicker
        className="!rounded-[11px] h-[44px] w-[100%]"
        // defaultValue={dayjs('12:08', format)}
        // format={format}
        placeholder=""
        {...props}
      />
    );
  } else if (props.type === "radio") {
    return <Radio.Group options={props.options} {...props} />;
  } else if (props.type === "password") {
    return (
      <Input.Password
        prefix={props.icon && <img className="w-[24px]" src={props.icon} />}
        className="!rounded-[5px] h-[44px] w-[100%]"
        {...props}
      />
    );
  } else if (props.type === "phonePicker") {
    return (
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry={defaultCountry as any}
          value={value}
          onChange={(newValue) => {
            handleChange(newValue); // Your custom handler
            if (props.onChange) {
              props.onChange(newValue); // Call any additional onChange passed via props
            }
          }}
          style={{
            border: isValid ? "1px solid #d9d9d9" : "1px solid red",
            borderRadius: "10px",
            padding: "9.5px",
            gap: "5px",
            width: "100%", // Ensure it fills the container
          }}
        />
        {!isValid && <span style={{ color: "red" }}>Invalid phone number</span>}
      </div>
    );
  } else if (props.type === "number") {
    return (
      <InputNumber
        prefix={props.icon && <img className="w-[24px]" src={props.icon} />}
        className="!rounded-[5px] h-[44px] w-[100%]"
        {...props}
      />
    );
  } else {
    return <div>Invalid input type</div>;
  }
}

export default BaseInput;
