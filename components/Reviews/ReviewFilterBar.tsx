import React from "react";
import Dropdown from "../Common/Dropdown";
import SearchBar from "../Common/SearchBar";

interface ReviewFilterBarProps {
  onSearchChange: (newCriteria: any) => void;
}

const ReviewFilterBar: React.FC<ReviewFilterBarProps> = ({ onSearchChange }) => {

  const sortByOptions = [
    { label: 'Most Recent Stay', value: 'mostRecent' },
    { label: 'Oldest Stay', value: 'oldest' },
  ];

  const starOptions = [
    { label: '1 Star', value: '1' },
    { label: '2 Stars', value: '2' },
    { label: '3 Stars', value: '3' },
    { label: '4 Stars', value: '4' },
    { label: '5 Stars', value: '5' },
  ];

  const handleSortByChange = (value) => {
    onSearchChange({ sortBy: value });
  };

  const handleStarChange = (value) => {
    onSearchChange({ rating: value });
  };

  const handleSearchInput = (value) => {
    onSearchChange({ keyword: value });
  };

  return (
    <div className="bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 max-md:mt-[50px] mt-[83px] xl:max-h-[166px] h-full max-xl:h-max mb-[50px]">
      <div className="grid items-end grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-1">
        <div>
          <h6 className="mb-2 font-medium">Sort by</h6>
          <Dropdown
            filterText="Recent Stay"
            filterIconHidden="hidden"
            filterTextStyle="pr-0"
            dropDownWidth="w-full"
            options={sortByOptions}
            onSelect={handleSortByChange}
          />
        </div>
        <div className="font-medium md:col-span-1">
          <h6 className="mb-2 font-medium">Filter by</h6>
          <div className="flex gap-4 max-md:flex-col max-md:gap-5">
            <Dropdown
              filterText="Stars"
              filterIconHidden="hidden"
              filterTextStyle="pr-0"
              dropDownWidth="w-full"
              options={starOptions}
              onSelect={handleStarChange}
            />
            {/* <Dropdown
              filterText="All Properties"
              filterIconHidden="hidden"
              filterTextStyle="pr-0"
              dropDownWidth="w-full"
            /> */}
          </div>
        </div>

        <div className="xl:col-span-3 md:col-span-3">
        <SearchBar searchBarProperty="w-full" handleSearchChange={onSearchChange} />

        </div>
      </div>
    </div>
  );
};

export default ReviewFilterBar;
