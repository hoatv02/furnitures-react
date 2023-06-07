import React, { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import './Add.css'
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
      await axios.post(`http://localhost:3000/uploadFile`, formData);
      product.image = product.image[0].name;
      const { data } = await axios.post(
        `http://localhost:3000/product`,
        product
      ).then(()=>{
        navigate("/admin/manageProduct");
      })
    } catch (error) { }
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
  }, []);
  return (
    <div className={styles.addProduct}>
      <h1 className="text-3xl py-3 font-bold">Thêm mới sản phẩm</h1>
      <form className="gap-10 max-w-full grid grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <div className="">
            <label for="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              {...register("productName")}
            />
          </div>
          <div className="">
            <label for="price" className="form-label">
              Giá sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              {...register("price")}
            />
          </div>

          <div className="">
            <label for="quanity" className="form-label">
              Số lượng
            </label>
            <input
              type="text"
              className="form-control"
              id="quanity"
              {...register("quantity")}
            />
          </div>

          <div className="">
            <label for="category" className="form-label">
              Danh mục sản phẩm
            </label>
            <select
              id="category"
              className="form-select rounded-sm "
              {...register("category")}
            >
              <option>Bàn ghế hiện đại loại 1</option>
              <option>Bàn ghế hiện đại loại 2</option>
              <option>Bàn ghế hiện đại loại 3</option>
            </select>
          </div>
          <div className="">
            <button className={`${styles.btnAdd} btn btn-danger mt-3  text-white-500`}>Thêm mới sản phẩm</button>
          </div>
        </div>
        <div className=''>
          <label for="image" className="form-label">
            Hình Ảnh
          </label>
          <div className="">
            <div className='file file--upload'>
              <label for='image'>
                <i className="fa-solid fa-cloud-arrow-up"> Upload</i>
              </label>
              <input id="image" type='file'
                multiple
                {...register("image")} />
            </div>
            {/* 
            <input
              type="file"
              className="form-control p-2 mx-1"
              id="image"
              multiple
              placeholder="1234 Main St"
              {...register("image")}
            /> */}
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
          <div className="">
            <label for="description" className="form-label">
              Mô tả sản phẩm
            </label>
            <textarea
              type="text"
              className="form-control"
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
