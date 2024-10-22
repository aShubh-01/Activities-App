import zod from 'zod';

export const bookingSchema = zod.object({
    activityId: zod.number({ message: 'activityId must be an number' }),
    name: zod.string({ message: 'Name must be an string' }),
    email: zod.string({ message: 'Email must be an string' }),
    date: zod.string({ message: 'Date must be an string' })
})