
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config({path : '../.env'})

export const prisma = new PrismaClient();

export const port = process.env.PORT || 3000;