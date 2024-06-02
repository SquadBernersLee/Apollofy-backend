import {v2 as cloudinary}  from 'cloudinary';
import config from  '../../config/config';

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
})

export default cloudinary;