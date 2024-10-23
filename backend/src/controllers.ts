import { prisma } from './config.js';
import { bookingSchema } from './validators.js';

export const getActivities = async (req: any, res: any) => {
    try {
        const activities = await prisma.activity.findMany();
        return res.status(200).json({
            message: 'Activities fetched successfully',
            activities
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Unable to get activities'
        });
    }
}

export const bookActivity = async (req: any, res: any) => {
    let payload = req.body;
    payload.activityId = parseInt(req.params.id)

    const parsingResponse = bookingSchema.safeParse(payload);
    if(!parsingResponse.success) {
        const issues = parsingResponse.error.issues.map((issue) => {
            return issue.message
        });

        return res.status(400).json({
            message: 'Input Validation failed',
            issues
        })
    }

    try {
        const { id } = await prisma.booking.create({
            data: payload,
            select: { id: true }
        })

        return res.status(200).json({
            message: `Activity booked successfully, booking id: ${id}`
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Unable to book activity'
        });
    }
}
