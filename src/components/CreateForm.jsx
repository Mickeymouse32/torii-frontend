import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { PiWarningCircle } from "react-icons/pi";
import { BiImageAdd } from "react-icons/bi";
import { propertySchema } from "../utils/formValidator";
import ConfirmModal from "./ConfirmModal";

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(propertySchema),
  });
  const [showModal, setShowModal] = useState(true);
  const [imagePreviews, setImagePreviews] = useState(Array(6).fill(null));
  const [images, setImages] = useState(Array(6).fill(null)); // will store actual File objects

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const newImages = [...images];
      const newPreviews = [...imagePreviews];
      newImages[index] = file;
      newPreviews[index] = URL.createObjectURL(file);
      setImages(newImages);
      setImagePreviews(newPreviews);
    } else {
      alert("Please select a valid image file.");
    }
  };
  const handleCancel = () => {
    reset();
    setImages(Array(6).fill(null));
    setImagePreviews(Array(6).fill(null));
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    images.forEach((file, index) => {
      if (file) formData.append("images", file); // backend should handle array field
    });
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // e.g. send formData via fetch or axios
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {showModal && <ConfirmModal setShowModal={setShowModal} />}
      <h1 className="text-2xl font-bold mb-6">Create New Property</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Property Name */}
        <div className="mb-4">
          <label className="mylabel">Property name</label>
          <input
            type="text"
            {...register("title")}
            placeholder="Enter property name"
            className={`myinput ${
              errors.title ? "border-red-500" : "border-[#f6f6f6]"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Property Description */}
        <div className="mb-4">
          <label className="mylabel">Property description</label>
          <textarea
            {...register("description")}
            placeholder="Enter description"
            rows={3}
            className={`myinput ${
              errors.description ? "border-red-500" : "border-[#f6f6f6]"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Property Location */}
        <div className="mb-4">
          <label className="mylabel">Property Location</label>
          <input
            type="text"
            {...register("location")}
            placeholder="Enter property address"
            className={`myinput ${
              errors.location ? "border-red-500" : "border-[#f6f6f6]"
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Facilities */}
        <div className="mb-6">
          <label className="mylabel">Facilities</label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="mylabel">Bedroom</label>
              <input
                type="number"
                {...register("bedroom")}
                placeholder="Enter number"
                className={`myinput ${
                  errors.bedroom ? "border-red-500" : "border-[#f6f6f6]"
                }`}
              />
              {errors.bedroom && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bedroom.message}
                </p>
              )}
            </div>
            <div>
              <label className="mylabel">Living room</label>
              <input
                type="number"
                {...register("livingRoom")}
                placeholder="Enter number"
                className={`myinput ${
                  errors.livingRoom ? "border-red-500" : "border-[#f6f6f6]"
                }`}
              />
              {errors.livingRoom && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.livingRoom.message}
                </p>
              )}
            </div>
            <div>
              <label className="mylabel">Toilet</label>
              <input
                type="number"
                {...register("toilet")}
                placeholder="Enter number"
                className={`myinput ${
                  errors.toilet ? "border-red-500" : "border-[#f6f6f6]"
                }`}
              />
              {errors.toilet && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.toilet.message}
                </p>
              )}
            </div>
            <div>
              <label className="mylabel">Kitchen</label>
              <input
                type="number"
                {...register("kitchen")}
                placeholder="Enter number"
                className={`myinput ${
                  errors.kitchen ? "border-red-500" : "border-[#f6f6f6]"
                }`}
              />
              {errors.kitchen && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.kitchen.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4 bg-[#FBFBFB]">
          <label className="mylabel">Price</label>
          <div className="flex items-center">
            <input
              type="number"
              {...register("price")}
              placeholder="Enter price"
              className={`myinput ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
          {/* Payment Period */}
          <div className="my-6">
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register("paymentPeriod")}
                  value="yearly"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Yearly</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register("paymentPeriod")}
                  value="monthly"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Monthly</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register("paymentPeriod")}
                  value="weekly"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Weekly</span>
              </label>
            </div>
            {errors.paymentPeriod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentPeriod.message}
              </p>
            )}
          </div>
        </div>

        {/* Property Images Warning */}
        <div className="bg-[#FE740B0D] rounded-lg border border-[#ff8e37] text-[#FF8E37] font-medium text-[14px] flex gap-6 p-3">
          <PiWarningCircle size={22} className="hidden md:block" />
          <div>
            <ul className="md:list-disc">
              <li>JPEG or PNG format supported</li>
              <li>Minimum of 6 images which must include House front view</li>
              <li>
                Show atleast living room, bedroom, kitchen, bathroom &
                surrounding
              </li>
              <li>
                Images should accurately represent the property's
                condition and feature
              </li>
            </ul>
          </div>
        </div>
        {/* Images Part */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {imagePreviews.map((preview, index) => (
            <label
              key={index}
              className="w-full h-32 border border-[#f6f6f6] flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt={`preview-${index}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <BiImageAdd size={22} />
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleImageChange(e, index)}
              />
            </label>
          ))}
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 mt-3.5">
          <button
            onClick={handleCancel}
            type="button"
            className="px-6 cursor-pointer py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg cursor-pointer"
          >
            Create property
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
