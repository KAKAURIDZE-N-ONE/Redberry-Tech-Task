import { useForm } from "react-hook-form";
import Mark from "../../public/svgs/Mark.svg";
import PlusCircle from "../../public/svgs/PlusCircle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAgentDetails,
  updateAgentEmail,
  updateAgentModalIsOpen,
  updateAgentName,
  updateAgentPhone,
  updateAgentSurname,
} from "../slices/agentSlice";
import Button from "./Button";
import NormalInput from "./NormalInput";
import { useCreateAgent } from "../hooks/useCreateAgent";

function CreateAgentModalBody() {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const { name, surname, email, phone } = useSelector(getAgentDetails);
  const {
    mutate: createAgent,
    isLoading: isCreating,
    error: creationError,
  } = useCreateAgent();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name,
      surname,
      email,
      phone,
    },
  });

  const nameValue = watch("name");
  const surnameValue = watch("surname");
  const emailValue = watch("email");
  const phoneValue = watch("phone");
  const fileValue = watch("file");

  useEffect(() => {
    if (nameValue !== name) {
      dispatch(updateAgentName(nameValue));
    }
    if (surnameValue !== surname) {
      dispatch(updateAgentSurname(surnameValue));
    }
    if (emailValue !== email) {
      dispatch(updateAgentEmail(emailValue));
    }
    if (phoneValue !== phone) {
      dispatch(updateAgentPhone(phoneValue));
    }
  }, [
    name,
    nameValue,
    surname,
    surnameValue,
    email,
    emailValue,
    phone,
    phoneValue,
    dispatch,
  ]);

  useEffect(() => {
    if (fileValue && fileValue.length > 0) {
      const file = fileValue[0];
      if (file) {
        setAvatarFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setImagePreview(null);
      setAvatarFile(null);
    }
  }, [fileValue]);

  const onSubmit = (data) => {
    createAgent({ ...data, avatarFile });
  };

  return (
    <div
      style={{ zIndex: "2000" }}
      className="bg-white opacity-100 relative rounded-[1rem] py-[8rem] px-[11rem]"
    >
      <h2
        style={{ color: "#021526" }}
        className="text-[3.2rem] font-medium text-center"
      >
        აგენტის დამატება
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[6rem] flex flex-col gap-[4rem]"
      >
        {/* first row */}
        <div className="flex items-center gap-[3rem]">
          {/* name */}
          <NormalInput
            register={register}
            name="name"
            label="სახელი*"
            errors={errors}
            validate={{
              required: "სავალდებულო",
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლო",
              },
            }}
          />
          {/* surname */}
          <NormalInput
            register={register}
            name="surname"
            label="გვარი"
            errors={errors}
            validate={{
              required: "სავალდებულო",
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლო",
              },
            }}
          />
        </div>
        {/* second row */}
        <div className="flex items-center gap-[3rem]">
          {/* email */}
          <NormalInput
            register={register}
            name="email"
            label="ელ-ფოსტა*"
            errors={errors}
            validate={{
              required: "სავალდებულო",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                message: "გამოიყენეთ @redberry.ge ფოსტა",
              },
            }}
          />
          {/* phone number */}
          <NormalInput
            register={register}
            name="phone"
            label="ტელეფონის ნომერი"
            errors={errors}
            validate={{
              required: "სავალდებულო",
              validate: {
                numeric: (value) =>
                  /^\d+$/.test(value) || "ნუმერული სიმბოლოები",
                format: (value) =>
                  /^5\d{8}$/.test(value) || "უნდა იყოს ფორმატის 5XXXXXXXX",
              },
            }}
          />
        </div>
        {/* File Input */}
        <div className="relative">
          <label
            style={{ color: "#021526" }}
            className="text-[1.4rem] font-medium relative"
            htmlFor="file"
          >
            ატვირთეთ ფოტო*
          </label>
          <label
            style={{ border: "2px dashed #808A93" }}
            className="flex items-center justify-center rounded-[0.5rem] h-[12rem] relative mt-3 cursor-pointer"
          >
            <input
              accept="image/*"
              type="file"
              id="file"
              className="file-input"
              {...register("file", {
                required: "სავალდებულო",
              })}
            />
            <label htmlFor="file" className="upload-icon">
              <img src={PlusCircle} className="w-[2.4rem] h-[2.4rem]" />
            </label>
            {imagePreview && (
              <div
                style={{
                  backgroundImage: `url(${imagePreview})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                alt="Profile image a"
                className="w-[9.2rem] h-[8.2rem] absolute
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[0.4rem]"
              ></div>
            )}
          </label>
          {errors.file && (
            <div className="absolute left-0 bottom-[-2.1rem] flex gap-[0.7rem] items-center mt-2">
              <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
              <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                {errors.file.message}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-6 mt-[7rem]">
            <Button clickFn={() => dispatch(updateAgentModalIsOpen(false))}>
              გაუქმება
            </Button>
            <Button isInForm={true} type="filled">
              დაამატე აგენტი
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAgentModalBody;
