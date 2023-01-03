import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/category/${id}`
        );
        reset(data.data);
      } catch (error) {}
    })();
  }, []);

  const onSubmit = async (category) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/category/${id}`,
        category
      );
      console.log("data", data);
      navigate("/admin/manageCategory");
    } catch (error) {}
  };

  return (
    <div className="">
      <h1 class="text-3xl py-3 font-bold text-uppercase">Thêm mới danh mục</h1>
      <form class="row g-3 max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div class="col-md-8">
          <label for="CategoryID" class="form-label">
            CategoryID
          </label>
          <input type="text" class="form-control" id="CategoryID" disabled />
        </div>

        <div class="col-md-8">
          <label for="categoryName" class="form-label">
            Category Name
          </label>
          <input
            type="text"
            class="form-control"
            id="categoryName"
            {...register("categoryName")}
          />
        </div>
        <div class="col-12">
          <button class="btn btn-danger text-red-500">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
