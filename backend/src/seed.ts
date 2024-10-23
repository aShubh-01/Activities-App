import { prisma } from './config.js';

interface Activity {
    name: string,
    price: number,
    location: string
}
const activities : Activity[] = [{
    name: 'Skydiving',
    price: 300,
    location: 'California, USA'
},{
    name: 'Bungee Jumping',
    price: 150,
    location: 'Queenstown, New Zealand'
},{
    name: 'Scuba Diving',
    price: 150,
    location: 'Great Barrier Reef, Australia'
},{
    name: 'White Water Rafting',
    price: 200,
    location: 'Colorado River, USA'
},{
    name: 'Mountain Biking',
    price: 80,
    location: 'Moab, Utah, USA'
},{
    name: 'Zip Lining',
    price: 50,
    location: 'Costa Rica'
}]

await prisma.activity.createMany({
    data: activities
})