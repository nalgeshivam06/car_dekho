
import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import Pagination from './Pagination';
import cardata from './SampleOutput.json';
import Caritems from './Caritems';

function Cars({ search }) {
  const CarsData = cardata.Cars;
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search value
  useEffect(() => {
    if (search) {
      const filteredCars = CarsData.filter((car) =>
        car.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredCars);
      setCurrentPage(1); // Reset to the first page when the search changes
    } else {
      // If no search value, show all data
      setFilteredData(CarsData);
    }
  }, [search, CarsData]);

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          {currentData.map((car, index) => (
            <div className="col-md-4" key={index}>
              <Caritems title={car.title} imageURL={car.image} key={index} />
            </div>
          ))}
        </div>
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Cars;

