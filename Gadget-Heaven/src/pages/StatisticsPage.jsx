import Heading from "../components/Heading/Heading";
import PageTitle from "../components/PageTitle/PageTitle";
import React from 'react';
import {
    ComposedChart, Area, Bar, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { productName: "Dell XPS 13", price: 999, rating: 4.5 },
    { productName: "HP Pavilion 15", price: 749, rating: 4.2 },
    { productName: "MacBook Pro 16-inch", price: 1299, rating: 4.8 },
    { productName: "Lenovo ThinkPad", price: 499, rating: 4.0 },
    { productName: "Apple MacBook Air", price: 1399, rating: 4.7 },
    { productName: "Acer Swift 3", price: 849, rating: 4.3 },
    { productName: "iPhone 13 Pro", price: 699, rating: 4.6 },
    { productName: "Samsung Galaxy S21", price: 399, rating: 4.2 },
    { productName: "Bose QuietComfort 35", price: 99, rating: 4.4 },
    { productName: "Anker PowerCore 10000", price: 29, rating: 4.1 }
];



const StatisticsPage = () => {

    return (
        <div>
            <PageTitle title={'Statistics Page'}/>
            <div className="pb-12 pt-4 bg-[#9538E2]">
                <Heading title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}> </Heading>
            </div>
            <div className="w-[85%] mx-auto">
                <h1 className="text-xl font-semibold py-5">Statistics</h1>
                <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="productName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    
                    {/* Area for Price */}
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    
                    {/* Bar for Price */}
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    
                    {/* Scatter for Rating */}
                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatisticsPage;