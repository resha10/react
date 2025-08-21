import axios from "axios";


export const uploadImage = async (data) => {
    let formData = new FormData();

    formData.append('file', data);
    formData.append('upload_preset', "blinkit_clone");
    formData.append('cloud_name', 'djx0sepfi');

    let res = await axios.post(`https://api.cloudinary.com/v1_1/djx0sepfi/image/upload`, formData)
    return res.data.secure_url;
}