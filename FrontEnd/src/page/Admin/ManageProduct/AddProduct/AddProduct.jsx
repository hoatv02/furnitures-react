import React, { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (product) => {
    try {
      const formData = new FormData();
      const fileName = product.image[0].name;
      formData.append("name", fileName);
      formData.append("image", product.image[0]);
      await axios.post(`http://localhost:8000/uploadFile`, formData);
      product.image = product.image[0].name;
      const { data } = await axios.post(
        `http://localhost:8000/product`,
        product
      );
      // console.log("data", data);
      navigate("/admin/manageProduct");
    } catch (error) {}
  };
  const imagesWatch = watch(["image"]);
  useEffect(() => {
    const subscription = watch(({ image }, { name, type }) => {
      if (name === "image") {
        let url = [];
        for (let index = 0; index < image.length; index++) {
          url.push(URL.createObjectURL(image[index]));
        }
        setFiles((prev) => [...prev, ...url]);
      }
    });
    console.log(files);
  }, []);
  return (
    <div className={styles.addProduct}>
      <h1 class="text-3xl py-3 font-bold">Thêm mới sản phẩm</h1>
      <form class="gap-10 max-w-full grid grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <div class=''>
        <div class="">
          <label for="productName" class="form-label">
           Tên sản phẩm
          </label>
          <input
            type="text"
            class="form-control"
            id="productName"
            {...register("productName")}
          />
        </div>
        <div class="">
          <label for="price" class="form-label">
            Giá sản phẩm
          </label>
          <input
            type="text"
            class="form-control"
            id="price"
            {...register("price")}
          />
        </div>

        <div class="">
          <label for="quanity" class="form-label">
            Số lượng
          </label>
          <input
            type="text"
            class="form-control"
            id="quanity"
            {...register("quantity")}
          />
        </div>
         
        <div class="">
          <label for="category" class="form-label">
            Danh mục sản phẩm
          </label>
          <select
            id="category"
            class="form-select rounded-sm "
            {...register("category")}
          >
            <option>Bàn ghế hiện đại loại 1</option>
            <option>Bàn ghế hiện đại loại 2</option>
            <option>Bàn ghế hiện đại loại 3</option>
          </select>
        </div>
        <div class="">
          <button className={`${styles.btnAdd} btn btn-danger mt-3  text-white-500` }>Thêm mới sản phẩm</button>
        </div>
        </div>
        <div class=''>
        <div class="">
          <label for="File." class="form-label">
            Hình Ảnh
          </label>
          <input
            type="file"
            class="form-control p-2 mx-1"
            id="image"
            multiple
            placeholder="1234 Main St"
            {...register("image")}
          />
         <div className={styles.displayImage}>
         {files &&
          files.map((item) => {
            return (
              <div >
                <img
                  src={item}
                  width="10"
                  height="10"
                  className={styles.imageShow}
                />
              </div>
            );
          })}
         </div>
        </div>
        
        {/* <img src={files} alt="" /> */}
        <div class="">
          <label for="description" class="form-label">
           Mô tả sản phẩm
          </label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            {...register("description")}
          />
        </div>
        </div>
       
      </form>
    </div>
  );
};

export default AddProduct;
