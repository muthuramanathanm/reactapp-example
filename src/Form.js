import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: send to server
    console.log(data);
  };

  return (
    <form className="has-text-left" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="hello@mail.com"
            {...register("email", {
              required: true,
              maxLength: 80,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="e.g. Hello world"
            {...register("description", {
              required: true,
            })}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Options</label>
        <div className="control">
          <div className="select">
            <select {...register("options", { required: true })}>
              <option>Option One</option>
              <option>Option Two</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              placeholder="Checkbox"
              {...register("checkbox")}
            />
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Radio Field</label>
          <label className="radio">
            <input
              {...register("radio", { required: true })}
              type="radio"
              value="true"
            />
            Yes
          </label>
          <label className="radio">
            <input
              {...register("radio", { required: true })}
              type="radio"
              value="false"
            />
            No
          </label>
        </div>
      </div>

      <div className="control">
        <button className="button is-link" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
