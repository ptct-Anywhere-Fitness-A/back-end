exports.seed = function(knex) {
        return knex('classes').insert([
            {
                class_name:'Hiking',
                class_type:'cardio',
                intensity_level:'intermediate',
                duration:'1 hour',
                start_time:'9:00 am',
                location: 'Radnor Lake',
                number_of_attendees: 9,
                max_class_size: 15
            },
            {
                class_name:'Zumba',
                class_type:'cardio',
                intensity_level:'beginner',
                duration:'1 hour',
                start_time:'5:00 pm',
                location: 'Miss Fit Academy',
                number_of_attendees: 20,
                max_class_size: 20
            },
            {
                class_name:'CrossFit',
                class_type:'full body strength training',
                intensity_level:'difficult',
                duration:'1 hour',
                start_time:'2:00 pm',
                location: 'Greenway Fitness',
                number_of_attendees: 28,
                max_class_size: 30
            },
            {
                class_name:'Running',
                class_type:'cardio',
                intensity_level:'moderate',
                duration:'1 hour',
                start_time:'7:00 am',
                location: 'Greenway Fitness Trail',
                number_of_attendees: 16,
                max_class_size: 25
            }

        ])
}