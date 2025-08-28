// import axios from 'axios';
// import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../../firebaseConfig';

// export const loading = () => {
//     return {
//         type: "LOADING"
//     }
// }


// export const addProductSUC = () => {
//     return {
//         type: "ADD_PRODUCT_SUC",
//     }
// }

// export const addProductRej = (err) => {
//     return {
//         type: "ADD_PRODUCT_REJ",
//         payload: err
//     }
// }



// export const getAllProducts = (data) => {
//     return {
//         type: "GET_ALL_PRODUCTS_SUC",
//         payload: data
//     }
// }
// export const getProductsRej = (err) => {
//     return {
//         type: "GET_ALL_PRODUCTS_REJ",
//          payload: err
//     }
// }


// export const getProduct = (data) => {
//     return {
//         type: "GET_PRODUCT",
//         payload: data
//     }
// }

// export const updateProduct = () => {
//     return {
//         type: "UPDATE_PRODUCT"
//     }
// }


// // async action
// // get all product
// export const getAllProductAsync = () => {
//     return async(dispatch) => {
//         dispatch(loading());
//         try { 
//             let result = [];
//             let resRef = await getDocs(collection(db, 'products'));
//             resRef.forEach((doc) => {
//                 result.push({...doc.data(), id: doc.id});
//             });

//             dispatch(getAllProducts(result));
//         } catch (error) {
//             console.log(error);
//             dispatch(getProductsRej(error.message))
//         }
        
//     }
// }

// // add new product
// export const addProductAsync = (data) => {
//     return async(dispatch) => {
//         dispatch(loading());
//         try {
//             // let res = await addDoc(collection(db, "products"), data);    // auto generate ID
//             let res = await setDoc(doc(db, "products", data.id), data);     // manually set ID
//             // console.log(res);
//             dispatch(addProductSUC());
//         } catch (error) {
//             console.log(error);
//             dispatch(addProductRej(error.message))
//         }
//     }
// }

// // delete product
// export const deleteProductAsync = (id) => {
//     return async(dispatch) => {
//         dispatch(loading());
//         try {
//             await deleteDoc(doc(db, "products", id));
//             dispatch(getAllProductAsync());
//         } catch (error) {
//             console.log(error);
//             dispatch(addProductRej(error.message))
//         }
//     }
// }

// // get single product
// export const getProductAsync = (id) => {
//     return async(dispatch) => {
//         dispatch(loading());
//         try {
//             let res = await getDoc(doc(db, "products", id));
//             console.log(res);
//             dispatch(getProduct({...res.data(), id: res.id}));
//         } catch (error) {
//             console.log(error);
//             dispatch(addProductRej(error.message))
//         }
//     }
// }

// // update prpduct
// export const updateProductAsync = (data) => {
//     return async(dispatch) => {
//         dispatch(loading());
//         try {
//             await updateDoc(doc(db, "products", data.id), data)
//             // console.log(res);
//             dispatch(updateProduct());
//         } catch (error) {
//             console.log(error);
//             dispatch(addProductRej(error.message))
//         }
//     }
// }
import axios from 'axios';

// Base API URL
const API_URL = 'https://your-api-endpoint.com/blogs';

// Action Types
export const loading = () => ({
    type: "LOADING"
});

export const addBlogSUC = () => ({
    type: "ADD_BLOG_SUC"
});

export const addBlogRej = (err) => ({
    type: "ADD_BLOG_REJ",
    payload: err
});

export const getAllBlogs = (data) => ({
    type: "GET_ALL_BLOGS_SUC",
    payload: data
});

export const getBlogsRej = (err) => ({
    type: "GET_ALL_BLOGS_REJ",
    payload: err
});

export const getBlog = (data) => ({
    type: "GET_BLOG",
    payload: data
});

export const updateBlog = () => ({
    type: "UPDATE_BLOG"
});

// ------------------- Async Actions -------------------

// ✅ Get all blogs
export const getAllBlogsAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await axios.get(API_URL);
            dispatch(getAllBlogs(response.data));
        } catch (error) {
            console.error(error);
            dispatch(getBlogsRej(error.message));
        }
    }
}

// ✅ Add new blog
export const addBlogAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await axios.post(API_URL, data);
            dispatch(addBlogSUC());
            dispatch(getAllBlogsAsync()); // refresh list
        } catch (error) {
            console.error(error);
            dispatch(addBlogRej(error.message));
        }
    }
}

// ✅ Delete blog
export const deleteBlogAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await axios.delete(`${API_URL}/${id}`);
            dispatch(getAllBlogsAsync());
        } catch (error) {
            console.error(error);
            dispatch(addBlogRej(error.message));
        }
    }
}

// ✅ Get single blog
export const getBlogAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            dispatch(getBlog(response.data));
        } catch (error) {
            console.error(error);
            dispatch(addBlogRej(error.message));
        }
    }
}

// ✅ Update blog
export const updateBlogAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await axios.put(`${API_URL}/${data.id}`, data);
            dispatch(updateBlog());
            dispatch(getAllBlogsAsync()); // refresh list
        } catch (error) {
            console.error(error);
            dispatch(addBlogRej(error.message));
        }
    }
}
