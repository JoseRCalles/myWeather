const SelectFilter = ({ title, dataSelect, filter, setFilter }) => {
    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <select aria-label={title}
            className="w-34 px-1 py-1 border-1 dark:border-gray-500 rounded-full dark:bg-[#141516] text-sm"
            onChange={handleChange}
            value={filter}
        >
            <option disabled value={'all'}>{title}</option>
            {dataSelect.map((element) => (
                <option key={element} value={element}>
                    {element}
                </option>
            ))}
        </select>
    );
};

export default SelectFilter