const data = [
    {
        "class_name": "Hiking",
        "class_type": "cardio",
        "intensity_level": "beginner",
        "duration": "1 hour",
        "start_time": "8:00 am",
        "location": "Main Gym",
        "number_of_attendees": 22,
        "max_class_size": 25
    },
    {
        "class_name": "Running",
        "class_type": "cardio",
        "intensity_level": "intermediate",
        "duration": "1 hour",
        "start_time": "10:00 am",
        "location": "Main Gym",
        "number_of_attendees": 18,
        "max_class_size": 25
    }
]

const getAllClasses = () => {
  return data
}

module.exports = {
    getAllClasses
}
