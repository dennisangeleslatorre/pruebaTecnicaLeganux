import express from 'express';

//Routes
import classRoomRoutes from './classRoom.routes.js';
import studentRoutes from './student.routes.js';

const app = express();

//Define routes
app.use('/classRoom', classRoomRoutes);
app.use('/student', studentRoutes);

export default app;