import React, { Fragment, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MdMyLocation } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { geocode } from 'opencage-api-client'; // Geocoding API

// Component to update the map's center
const UpdateMapCenter = ({ coordinates }) => {
    const map = useMap();
    map.setView(coordinates, 13); // Update map's view to the new coordinates with zoom level 13
    return null;
};

const Model = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState([30.3753, 69.3451]); // Default location: Pakistan
    const [find, setFind] = useState(true);
    const [gotit, setGotIt] = useState(false);

    // Handle location search
    const handleLocationSearch = () => {
        if (location.trim() !== '') {
            geocode({
                key: 'YOUR_API_KEY',
                q: location,
            }).then(response => {
                if (response.results.length > 0) {
                    const { lat, lng } = response.results[0].geometry;
                    setCoordinates([lat, lng]);
                }
            }).catch(error => {
                console.error('Error fetching geocoding data:', error);
            });
        }
    };

    return (
        <Fragment>
            {find && (
                <Fragment>
                    {/* Modal Overlay */}
                    <div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>

                    {/* Modal Content */}
                    <div className='bg-white p-3 absolute rounded shadow-2xl top-20 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[70%] md:w-[60%] sm:w-[95%] h-[75vh] z-50'>
                        <div className='flex justify-between items-center p-3'>
                            <div className='flex gap-2 items-center'>
                                <HiOutlineLocationMarker className='text-lg' />
                                <p className='font-semibold'>What's your exact location?</p>
                            </div>
                            <div className='hover:bg-gray-300 p-2 rounded-full duration-500 cursor-pointer'>
                                <AiOutlineClose onClick={() => setFind(false)} />
                            </div>
                        </div>
                        <div className='p-4'>
                            <p>Providing your location enables more accurate search and delivery ETA, seamless order tracking, and personalized recommendations.</p>
                        </div>
                        <div className='h-[30vh] mt-3 overflow-y-scroll'>
                            <div className='flex justify-evenly items-center gap-2'>
                                <MdError className='text-3xl' />
                                <p className='text-center'>
                                    We're having trouble finding you. <br />
                                    Check your connection and location access.
                                </p>
                                <button 
                                    onClick={() => setGotIt(!gotit)} 
                                    className='bg-white hover:bg-pink-100 rounded p-2 font-semibold hover:text-gray-950 text-[rgb(226,27,112)] border-gray-400 border-[1px]'
                                >
                                    See how to enable Location access
                                </button>
                            </div>
                            <div className='relative w-full bg-white border-gray-700 flex justify-between items-center border-[1px] p-1 rounded'>
                                <label
                                    className={`absolute left-3 px-1 bg-white transition-all duration-300 ${isFocused ? '-top-3 text-[rgb(226,27,112)] hover:text-[rgb(85,14,45)] text-sm' : 'top-3 text-gray-500 text-base'}`}
                                >
                                    {isFocused ? 'Enter your postal code and street no' : 'Search '}
                                </label>
                                <input
                                    type="search"
                                    className='w-full p-3 pt-6 pb-1 outline-none'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={(e) => setIsFocused(e.target.value !== '')}
                                />
                                <div className='absolute right-3 top-3'>
                                    <h1 className='flex items-center gap-1 cursor-pointer hover:text-[rgb(226,27,112)]'>
                                        <MdMyLocation className='text-[rgb(226,27,112)] text-2xl font-semibold' /> Locate me
                                    </h1>
                                </div>
                            </div>

                            {/* Leaflet Map */}
                            <MapContainer 
                                center={coordinates} 
                                zoom={10} 
                                scrollWheelZoom={false} 
                                className='w-full h-[30vh] my-3 z-0'
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={coordinates}>
                                    <Popup>
                                        Location: {location || 'bahawalpur'}
                                    </Popup>
                                </Marker>
                                <UpdateMapCenter coordinates={coordinates} /> 
                            </MapContainer>

                        </div>
                        <div className='flex justify-end h-20 items-end bg-white'>
                            <button
                                className={`rounded p-3 text-white ${location.trim() === '' ? 'bg-gray-300 cursor-not-allowed' : 'bg-[rgb(226,27,112)] hover:bg-[rgb(226,27,112)]'}`}
                                onClick={handleLocationSearch}
                                disabled={location.trim() === ''}  // Disable button if input is empty
                            >
                                Find Restaurant
                            </button>
                        </div>

                        {/* Second Modal for 'Got it' */}
                        {gotit && (
                            <Fragment>
                                <div className='fixed inset-0 bg-black bg-opacity-50 z-60'></div>
                                
                                <div className='bg-white shadow-xl w-[90%] lg:w-[60%] md:w-[50%] sm:w-[90%] absolute top-20 left-1/2 transform -translate-x-1/2 h-[45vh] z-70'>
                                    <div className='flex justify-evenly items-center mt-8'>
                                        <p className='w-[70%] font-bold text-xl'>How to enable location access on your browser</p>
                                        <h1 className='hover:bg-gray-300 p-3 rounded-full'>
                                            <AiOutlineClose onClick={() => setGotIt(false)} />
                                        </h1>
                                    </div>
                                    <div className='p-4'>
                                        <h1>On your Chrome browser</h1>
                                        <p>
                                            1. To the left of the address bar, click the Padlock icon Site Settings <br />
                                            2. Under Permissions, find Location and change it to Allow
                                        </p>
                                    </div>
                                    <div className='flex justify-end items-end p-3'>
                                        <button onClick={() => setGotIt(false)} className='bg-[rgb(226,27,112)] px-2 py-1 rounded'>
                                            Got it
                                        </button>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Model;
