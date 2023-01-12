import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./CheckoutProducts.module.css";
function ProductCart({img,name,content,price}) {
    return (
            <div className={styles.contentMain}>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.name}>
                        <h4 className={styles.nameProducts}>{name}</h4>
                        <p className={styles.contentProducts}>{content}</p>
                    </div>
                </div>
                <div className={styles.detail}>
                    <div className={styles.quantity}>
                        <p>Quantity</p>
                    </div>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.icon}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
    )
}

export default ProductCart