import { useState } from "react";

const FilterBar = ({ handleFilter }) => {
    
    return (
        <div className="md:w-1/4 border shadow-md md:">
            <form onSubmit={handleFilter} className="my-4 p-4">
                <h3 className="text-center text-2xl mb-2">Filters</h3>

                <div className="space-y-2">
                    <div>
                        <label className="flex items-center gap-2 input input-bordered">
                            <input name="searchTxt" type="text" className="grow" placeholder="Search by name" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"></path></svg>
                        </label>
                    </div>
                    <div>
                        <label>Brand:</label>
                        <select
                            name="brand"
                            className="w-full px-4 py-2 border rounded-md border-gray-400"
                        >
                            <option value="">Choose Brand…</option>
                            <option value="A4Tech">A4Tech</option>
                            <option value="Logitech">Logitech</option>
                            <option value="Baseus">Baseus</option>
                            <option value="Rapoo">Rapoo</option>
                            <option value="RODE">RODE</option>
                            <option value="Edifier">Edifier</option>
                            <option value="Oraimo">Oraimo</option>
                            <option value="Optoma">Optoma</option>
                            <option value="Microlab">Microlab</option>
                            <option value="Havit">Havit</option>
                            <option value="Magpie">Magpie</option>
                            <option value="Jabra">Jabra</option>
                            <option value="Vention">Vention</option>
                            <option value="Thunderobot">Thunderobot</option>
                        </select>
                    </div>
                    <div>
                        <label>Category:</label>
                        <select
                            name="category"
                            className="w-full px-4 py-2 border rounded-md border-gray-400"
                        >
                            <option value="">Choose Category...</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Webcam">Webcam</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Combo">Combo</option>
                            <option value="Cable">Cable</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Station">Station</option>
                            <option value="Mouse">Mouse</option>
                        </select>
                    </div>
                    <div>
                        <label>Price range:</label>
                        <br />
                        <input type="number" placeholder="min"
                        name="minPrice" className="input input-bordered w-1/2 max-w-xs"/>
                        <input type="number" placeholder="max"
                        name="maxPrice"
                        className="input input-bordered w-1/2 max-w-xs" />
                    </div>

                    <button className="SSBtn my-2 w-full font-semibold text-lg">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default FilterBar;