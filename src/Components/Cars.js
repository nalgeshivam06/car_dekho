import React, { useState } from 'react';
import Pagination from './Pagination';
import cardata from './SampleOutput.json';  
import Caritems from './Caritems';

function Cars() {
  const CarsData = cardata.Cars;  

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = CarsData.slice(startIndex, endIndex);

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
            totalItems={CarsData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    
  );
}

export default Cars;
