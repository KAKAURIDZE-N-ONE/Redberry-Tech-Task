import { useForm } from "react-hook-form";
import Mark from "../../public/svgs/Mark.svg";
import PlusCircle from "../../public/svgs/PlusCircle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAgentDetails,
  resetAgentInfo,
  updateAgentEmail,
  updateAgentModalIsOpen,
  updateAgentName,
  updateAgentPhone,
  updateAgentSurname,
} from "../slices/mainSlice";
import Button from "./Button";

function CreateAgentModalBody() {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const { name, surname, email, phone } = useSelector(getAgentDetails);

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

  const handleFileChange = (files) => {
    const file = files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const fileValue = watch("file");

  useEffect(() => {
    if (fileValue?.length > 0) {
      handleFileChange(fileValue);
    } else setImagePreview(null);
  }, [fileValue]);

  useEffect(() => {
    return () => dispatch(resetAgentInfo());
  }, [dispatch]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePhoneNumber = (value) => {
    if (!/^\d+$/.test(value)) {
      return "ნუმერული სიმბოლოები";
    }
    if (!/^5\d{8}$/.test(value)) {
      return "უნდა იყოს ფორმატის 5XXXXXXXX";
    }
    return true; // No error
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
        className="mt-[6rem] flex flex-col gap-[2rem]"
      >
        {/* first row */}
        <div className="flex items-center gap-[3rem]">
          {/* name */}
          <div className="flex flex-col gap-[0.4rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label
                style={{ color: "#021526" }}
                className="text-[1.4rem] font-medium"
                htmlFor="name"
              >
                სახელი*
              </label>
              <input
                style={{ border: "1px solid #808A93" }}
                className="w-[38.4rem] h-[4.2rem] rounded-[0.6rem] text-[1.6rem] px-4"
                id="name"
                {...register("name", {
                  required: "სავალდებულო",
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 სიმბოლო",
                  },
                })}
              />
            </div>
            {errors.name && (
              <div className="flex gap-[0.7rem] items-center">
                <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
                <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                  {errors.name.message}
                </p>
              </div>
            )}
          </div>
          {/* surname */}
          <div className="flex flex-col gap-[0.4rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label
                style={{ color: "#021526" }}
                className="text-[1.4rem] font-medium"
                htmlFor="surname"
              >
                გვარი
              </label>
              <input
                style={{ border: "1px solid #808A93" }}
                className="w-[38.4rem] h-[4.2rem] rounded-[0.6rem] text-[1.6rem] px-4"
                id="surname"
                {...register("surname", {
                  required: "სავალდებულო",
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 სიმბოლო",
                  },
                })}
              />
            </div>
            {errors.surname && (
              <div className="flex gap-[0.7rem] items-center">
                <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
                <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                  {errors.surname.message}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* second row */}
        <div className="flex items-center gap-[3rem]">
          {/* email */}
          <div className="flex flex-col gap-[0.4rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label
                style={{ color: "#021526" }}
                className="text-[1.4rem] font-medium"
                htmlFor="email"
              >
                ელ-ფოსტა*
              </label>
              <input
                style={{ border: "1px solid #808A93" }}
                className="w-[38.4rem] h-[4.2rem] rounded-[0.6rem] text-[1.6rem] px-4"
                id="email"
                type="email"
                {...register("email", {
                  required: "სავალდებულო",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                    message: "გამოიყენეთ @redberry.ge ფოსტა",
                  },
                })}
              />
            </div>
            {errors.email && (
              <div className="flex gap-[0.7rem] items-center">
                <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
                <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
          {/* phone number */}
          <div className="flex flex-col gap-[0.5rem]">
            <label
              style={{ color: "#021526" }}
              className="text-[1.4rem] font-medium"
              htmlFor="phone"
            >
              ტელეფონის ნომერი
            </label>
            <input
              style={{ border: "1px solid #808A93" }}
              className="w-[38.4rem] h-[4.2rem] rounded-[0.6rem] text-[1.6rem] px-4"
              id="phone"
              type="text"
              {...register("phone", {
                required: "სავალდებულო",
                validate: validatePhoneNumber,
              })}
            />
            {errors.phone && (
              <div className="flex gap-[0.7rem] items-center">
                <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
                <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                  {errors.phone.message}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* File Input */}
        <div>
          <label
            style={{ color: "#021526" }}
            className="text-[1.4rem] font-medium relative"
            htmlFor="file"
          >
            ატვირთეთ ფოტო*
          </label>
          <label
            style={{ border: "2px dashed #2D3648" }}
            className="flex items-center justify-center rounded-[0.5rem] h-[12rem] relative mt-3 cursor-pointer"
          >
            <input
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
            <div className="flex gap-[0.7rem] items-center mt-2">
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
