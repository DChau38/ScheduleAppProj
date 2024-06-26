import { useEffect } from 'react';

//1. fetches classes after major is selected. We're gonna directly put this into the page for ClassFormByManual
const useFetchClassesUponMajorChange = (selectedMajor, setSelectedMajorClasses) => {
    useEffect(() => {
        if (selectedMajor) {
            async function fetchClasses() {
                try {
                    // Encode major
                    const encodedMajor = encodeURIComponent(selectedMajor);
                    // Fetch classes
                    const response = await fetch(`http://localhost:9000/major/${encodedMajor}`);
                    const data = await response.json();
                    console.log("yo:",data);
                    // Set classes
                    setSelectedMajorClasses(data);
                } catch (error) {
                    console.error('Error fetching classes:', error);
                }
            }

            // Call fetchClasses
            fetchClasses();
        }
    }, [selectedMajor]); // Dependency array includes selectedMajor and setClasses
};

export default useFetchClassesUponMajorChange;
