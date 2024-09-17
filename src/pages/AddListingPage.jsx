import { useForm } from "react-hook-form";
import NormalInput from "../ui/NormalInput";
import SelectInput from "../ui/SelectInput";
import Mark from "../../public/svgs/Mark.svg";
import PlusCircle from "../../public/svgs/PlusCircle.svg";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCities, getRegions } from "../services/apiRegionsAndCities";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../../public/svgs/Trash.svg";
import Modal from "../ui/Modal";
import {
  getListingFormDetails,
  updateAddress,
  updateArea,
  updateDealType,
  updateDescription,
  updatePrice,
  updateRoomsQuantity,
  updateSelectedAgent,
  updateSelectedCity,
  updateSelectedRegion,
  updateZipAddress,
} from "../slices/listingSlice";
import { getAgents } from "../services/apiAgents";
import { validateWordLength } from "../utils/validation";
import { useCreateRealEstate } from "../hooks/useCreateRealEstate";

function AddListingPage() {
  const [customErrors, setCustomErrors] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const {
    selectedRegion,
    selectedCity,
    selectedAgent,
    dealType,
    zipAddress,
    address,
    price,
    area,
    roomsQuantity,
    description,
  } = useSelector(getListingFormDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: createRealEstate, isPending, error } = useCreateRealEstate();

  const { data: agentsData } = useQuery({
    queryKey: ["agents"],
    queryFn: getAgents,
  });

  const { data: regionsData } = useQuery({
    queryKey: ["regions"], // or ["regions"] if that's what you're querying
    queryFn: getRegions, // Function that fetches the data
  });

  const { data: citiesData } = useQuery({
    queryKey: ["cities"], // or ["regions"] if that's what you're querying
    queryFn: getCities, // Function that fetches the data
  });

  const selectedRegionId = selectedRegion?.id;
  const filteredCitiesData = citiesData?.filter(
    (city) => city?.region_id === selectedRegionId
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      address,
      zipAddress,
      price,
      area,
      roomsQuantity,
      description,
    },
  });

  const addressValue = watch("address");
  const zipAddressValue = watch("zipAddress");
  const priceValue = watch("price");
  const areaValue = watch("area");
  const roomsQuantityValue = watch("roomsQuantity");
  const descriptionValue = watch("description");
  const fileValue = watch("file");

  useEffect(() => {
    if (addressValue !== address) dispatch(updateAddress(addressValue));
    if (zipAddressValue !== zipAddress)
      dispatch(updateZipAddress(zipAddressValue));
    if (priceValue !== price) dispatch(updatePrice(priceValue));
    if (areaValue !== area) dispatch(updateArea(areaValue));
    if (roomsQuantityValue !== roomsQuantity)
      dispatch(updateRoomsQuantity(roomsQuantityValue));
    if (descriptionValue !== description)
      dispatch(updateDescription(descriptionValue));
  }, [
    address,
    zipAddress,
    addressValue,
    zipAddressValue,
    price,
    priceValue,
    area,
    areaValue,
    roomsQuantity,
    roomsQuantityValue,
    description,
    descriptionValue,
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

  useEffect(() => {
    dispatch(updateSelectedCity(""));
  }, [selectedRegion, dispatch]);

  const { id: agent_id } = selectedAgent;
  const { id: city_id } = selectedCity;
  const { id: region_id } = selectedRegion;

  function onSubmit(data) {
    if (!region_id || !city_id || !agent_id || !dealType) return;
    createRealEstate({
      ...data,
      agent_id,
      region_id,
      city_id,
      dealType: dealType === "ქირავდება" ? 1 : 0,
      avatarFile,
    });
  }

  const handleOptionChange = (event) => {
    const value = event.target.value;
    dispatch(updateDealType(value));
  };

  // useEffect(() => {
  //   return () => dispatch(resetListingInfo());
  // }, [dispatch]);

  return (
    <div className="wrapper2 pb-[10rem]">
      {isPending && (
        <Modal turnOfFn={() => {}}>
          <span className="loader"></span>
        </Modal>
      )}
      <h1 className="text-[3.2rem] font-medium text-center mt-[5rem]">
        ლისტინგის დამატება
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[5rem]">
        <div className="flex flex-col gap-[8rem]">
          <div className="flex flex-col gap-[0.4rem]">
            <h2 className="text-[1.6rem] font-medium">გარიგების ტიპი</h2>
            <div className="flex items-center gap-[4rem]">
              <div className="flex gap-[8rem] items-center">
                <label className="custom-radio">
                  <input
                    onChange={handleOptionChange}
                    type="radio"
                    name="option"
                    value="იყიდება"
                    checked={dealType === "იყიდება"}
                    // checked={dealType === "იყიდება"}
                  />
                  <span className="custom-radio-label text-[1.4rem]">
                    იყიდება
                  </span>
                </label>

                <label className="custom-radio">
                  <input
                    onChange={handleOptionChange}
                    type="radio"
                    name="option"
                    value="ქირავდება"
                    checked={dealType === "ქირავდება"}

                    // checked={dealType === "ქირავდება"}
                  />
                  <span className="custom-radio-label text-[1.4rem]">
                    ქირავდება
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2.2rem]">
            <h2 className="text-[1.6rem] font-medium">მდებარეობა</h2>
            <div className="flex flex-col gap-[4rem]">
              <div className="flex justify-between items-center">
                <NormalInput
                  register={register}
                  errors={errors}
                  label="მისამართი"
                  name="address"
                  validate={{
                    validate: {
                      notEmpty: (value) => value.trim() !== "" || "სავალდებულო",
                      hasMinWordLength: (value) =>
                        validateWordLength(value) || "მინიმუმ 2 სიმბოლო",
                    },
                  }}
                />
                <NormalInput
                  register={register}
                  errors={errors}
                  label="საფოსტო ინდექსი*"
                  name="zipAddress"
                  validate={{
                    required: "სავალდებულო",
                    validate: {
                      numeric: (value) =>
                        /^-?\d*(\.\d+)?$/.test(value) || "რიცხობრივი",
                    },
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <SelectInput
                  label="რეგიონი"
                  name="region"
                  options={regionsData}
                  selectedOption={selectedRegion}
                  setSelectedOption={(selectedRegion) =>
                    dispatch(updateSelectedRegion(selectedRegion))
                  }
                />
                <span
                  className={`${
                    selectedRegion?.id ? "inline-block" : "hidden"
                  }`}
                >
                  <SelectInput
                    label="ქალაქი"
                    name="city"
                    options={filteredCitiesData}
                    selectedOption={selectedCity}
                    setSelectedOption={(selectedCity) =>
                      dispatch(updateSelectedCity(selectedCity))
                    }
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2.2rem]">
            <h2 className="text-[1.6rem] font-medium">ბინის დეტალები</h2>
            <div className="flex flex-col gap-[4rem]">
              <div className="flex justify-between items-center">
                <NormalInput
                  register={register}
                  errors={errors}
                  label="ფასი"
                  name="price"
                  validate={{
                    required: "სავალდებულო",
                    validate: {
                      numeric: (value) =>
                        /^-?\d*(\.\d+)?$/.test(value) || "რიცხობრივი",
                    },
                  }}
                />
                <NormalInput
                  register={register}
                  errors={errors}
                  label="ფართობი"
                  name="area"
                  validate={{
                    required: "სავალდებულო",
                    validate: {
                      numeric: (value) =>
                        /^-?\d*(\.\d+)?$/.test(value) || "რიცხობრივი",
                    },
                  }}
                />
              </div>

              <NormalInput
                register={register}
                errors={errors}
                label="საძინებლების რაოდენობა*"
                name="roomsQuantity"
                validate={{
                  required: "სავალდებულო",
                  validate: {
                    numeric: (value) =>
                      /^-?\d*(\.\d+)?$/.test(value) || "რიცხობრივი",
                    numeric2: (value) =>
                      /^\d+$/.test(value) || "მთელი რიცხვები",
                  },
                }}
              />

              <div className="flex flex-col gap-[0.5rem]">
                <label
                  style={{ color: "#021526" }}
                  className="text-[1.4rem] font-medium"
                  htmlFor="description"
                >
                  აღწერა *
                </label>
                <div className="relative">
                  <textarea
                    style={{ border: "1px solid #808A93", resize: "none" }}
                    className="w-full h-[13.5rem] rounded-[0.6rem] text-[1.6rem] px-4 py-2"
                    id={"description"}
                    {...register("description", {
                      required: "სავალდებულო",
                      validate: {
                        minWords: (value) => {
                          const wordCount = value.trim().split(/\s+/).length;
                          return wordCount >= 5 || "მინიმუმ 5 სიტყვა";
                        },
                      },
                    })}
                  />
                  {errors["description"] && (
                    <div className="absolute left-0 bottom-[-2.1rem] flex gap-[0.7rem] items-center">
                      <img
                        src={Mark}
                        alt="mark"
                        className="w-[1rem] h-[0.8rem]"
                      />
                      <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                        {errors["description"].message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
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
                    type="file"
                    id="file"
                    className="file-input"
                    {...register("file", {
                      required: "სავალდებულო",
                      validate: {
                        image: (fileList) => {
                          // Ensure the fileList is not empty and contains valid file type
                          const file = fileList?.[0];
                          const validImageTypes = [
                            "image/jpeg",
                            "image/png",
                            "image/gif",
                            "image/bmp",
                            "image/webp",
                            "image/tiff",
                          ];
                          return (
                            (file && validImageTypes.includes(file.type)) ||
                            "სურათის ტიპი"
                          );
                        },
                        size: (fileList) => {
                          const file = fileList?.[0];
                          const maxSizeInBytes = 1000000; // 1MB in bytes
                          return (
                            (file && file.size <= maxSizeInBytes) ||
                            "არ უნდა აღებმატებოდეს 1mb-ის ზომაში"
                          );
                        },
                      },
                    })}
                  />
                  {!imagePreview && (
                    <label htmlFor="file" className="upload-icon">
                      <img src={PlusCircle} className="w-[2.4rem] h-[2.4rem]" />
                    </label>
                  )}
                  {imagePreview && (
                    <div className="relative w-[9.2rem] h-[8.2rem]">
                      <img
                        className="absolute -bottom-3 -right-3 w-[2.4rem] h-[2.4rem] z-30"
                        src={Trash}
                        alt="Trash btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setImagePreview(null);
                          setAvatarFile(null);
                        }}
                      />
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
                    </div>
                  )}
                </label>
                {errors.file && (
                  <div className="absolute left-0 bottom-[-2.1rem] flex gap-[0.7rem] items-center mt-2">
                    <img
                      src={Mark}
                      alt="mark"
                      className="w-[1rem] h-[0.8rem]"
                    />
                    <p className="text-[1.4rem]" style={{ color: "#021526" }}>
                      {errors.file.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2.2rem]">
            <h2 className="text-[1.6rem] font-medium">აგენტი</h2>{" "}
            <SelectInput
              label="აირჩიე"
              name="agent"
              options={agentsData}
              setSelectedOption={(agent) =>
                dispatch(updateSelectedAgent(agent))
              }
              selectedOption={selectedAgent}
            />
          </div>
        </div>
        <div className="flex items-center gap-[2rem] justify-end mt-[9.5rem]">
          <Button
            type="outline"
            clickFn={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
              navigate("/");
            }}
          >
            გაუქმება
          </Button>
          <Button isInForm={true} type="filled">
            დაამატე ლისტინგი
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddListingPage;
