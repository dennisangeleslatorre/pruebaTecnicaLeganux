import axios from 'axios';

const consumer = async (url, method, body) => {
    const attributes  = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(body) attributes.data = body;
    let status;
    return axios(attributes)
    .then(res => {
        status = res.status;
        return res.data;
    })
    .then(data => {
        return { body: data, status: status }
    })
    .catch((error) => {
        const response = error.response;
        return {status: response.status, message: response.data.message};
    });
}

//Classroom
export const listClassrooms = async () => {
    console.log('---API--- : listClassrooms');
    const url = `/classRoom/`;
    const response = await consumer(url, 'get');
    return response;
};
export const registerClassroom = async (body) => {
    console.log('---API--- : registerClassroom');
    const url = `/classRoom/`;
    const response = await consumer(url, 'post', body);
    return response;
};
export const listStudents = async () => {
    console.log('---API--- : listStudents');
    const url = `/student/`;
    const response = await consumer(url, 'get');
    return response;
};
export const registerStudent = async (body) => {
    console.log('---API--- : registerStudent');
    const url = `/student/`;
    const response = await consumer(url, 'post', body);
    return response;
};