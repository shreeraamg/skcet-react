import { useState } from "react";
import { useRef } from "react";
import { configForm } from "./form";

const FormData = () => {
  // Uncontrolled Form
  // const nameRef = useRef();
  // const mailRef = useRef();

  // Controlled Form
  const [data, setData] = useState({
    name: "",
    mail: "",
  });

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <input
          value={data.name}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
          type="text"
          required
        />
        <input
          value={data.mail}
          onChange={(e) =>
            setData({
              ...data,
              mail: e.target.value,
            })
          }
          type="email"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <form action="" onSubmit={configForm.onSubmit}>
        {configForm.fields.map((field) => (
          <input
            key={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
          />
        ))}
      </form>
    </div>
  );
};

export default FormData;
