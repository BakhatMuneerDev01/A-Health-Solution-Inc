// client/src/utils/dummyData.js
export const dummyUsers = [
  {
    id: 'user1',
    username: 'adminuser',
    email: 'admin@example.com',
    password: 'password123', // For dummy purposes only, never in production!
    role: 'Administrator',
    phone: '0333-1234567',
    cardHolderName: 'Azusa Nakano',
    creditCard: '1111 2222 3333 4444',
    country: 'United Kingdom',
    avatar: '/assets/images/admin_avatar.png' // Path to a dummy avatar image
  },
  {
    id: 'user2',
    username: 'johndoe',
    email: 'john.doe@example.com',
    password: 'password123',
    role: 'Doctor',
    phone: '0333-9876543',
    cardHolderName: 'John Doe',
    creditCard: '5555 6666 7777 8888',
    country: 'United States',
    avatar: '/assets/images/john_avatar.png'
  }
];



// client/src/utils/dummyData.js (continued)
export const dummyPatients = [
  {
    id: 'patient1',
    fullName: 'John Doe',
    phone: '(123) 456-7890',
    address: '123 Main St, Anytown, USA',
    lastVisit: '2023-10-26',
    dateOfBirth: '1985-03-15',
    emergencyContact: {
      name: 'Jane Doe (Wife)',
      phone: '(555) 987-6543'
    }
  },
  {
    id: 'patient2',
    fullName: 'Jane Smith',
    phone: '(987) 654-3210',
    address: '456 Oak Ave, Villagetown, USA',
    lastVisit: '2023-09-15',
    dateOfBirth: '1990-07-22',
    emergencyContact: {
      name: 'Robert Smith (Brother)',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 'patient3',
    fullName: 'Robert Johnson',
    phone: '(555) 123-4567',
    address: '789 Pine Ln, Cityville, USA',
    lastVisit: '2023-11-01',
    dateOfBirth: '1978-01-01',
    emergencyContact: {
      name: 'Sarah Johnson (Daughter)',
      phone: '(555) 765-4321'
    }
  }
];


// client/src/utils/dummyData.js (continued)
export const dummyVisits = [
  {
    id: 'visit1',
    patientId: 'patient1',
    date: '2023-10-20',
    purpose: 'Annual Check-up',
    summary: 'Routine physical, all good.',
    visitType: 'Initial Consultation',
    gpsLocation: { lat: 34.0522, lon: -118.2437 },
    notes: {
      observations: 'Patient in good health.',
      treatmentNotes: 'Advised to continue current diet.',
      followUpInstructions: 'Schedule next annual check-up in 1 year.'
    }
  },
  {
    id: 'visit2',
    patientId: 'patient1',
    date: '2023-07-10',
    purpose: 'Flu Symptoms',
    summary: 'Prescribed antiviral, advised rest.',
    visitType: 'Routine Check-up',
    gpsLocation: { lat: 34.0522, lon: -118.2437 },
    notes: {
      observations: 'Patient presented with fever and cough.',
      treatmentNotes: 'Prescribed Tamiflu.',
      followUpInstructions: 'Rest for 3-5 days, return if symptoms worsen.'
    }
  },
  {
    id: 'visit3',
    patientId: 'patient2',
    date: '2023-03-01',
    purpose: 'Follow-up',
    summary: 'Blood pressure re-check, stable.',
    visitType: 'Initial Consultation',
    gpsLocation: { lat: 34.0522, lon: -118.2437 },
    notes: {
      observations: 'Blood pressure within normal range.',
      treatmentNotes: 'Continue medication as prescribed.',
      followUpInstructions: 'Next check-up in 6 months.'
    }
  }
];


// client/src/utils/dummyData.js (continued)
export const dummyMessages = [
  {
    id: 'msg1',
    conversationId: 'general',
    senderId: 'user1',
    senderName: 'Admin User',
    message: 'Good morning everyone! Hope you all have a productive day.',
    timestamp: '09:00 AM'
  },
  {
    id: 'msg2',
    conversationId: 'general',
    senderId: 'user2',
    senderName: 'Field Employee',
    message: 'Good morning! I\'m heading to the north region for visits today.',
    timestamp: '09:05 AM'
  },
  {
    id: 'msg3',
    conversationId: 'field_team',
    senderId: 'user1',
    senderName: 'Admin User',
    message: 'Field team, remember to submit your daily reports.',
    timestamp: '10:00 AM'
  }
];

export const dummyConversations = [
  {
    id: 'general',
    name: 'General',
    members: 6
  },
  {
    id: 'field_team',
    name: 'Field Team',
    members: 3
  },
  {
    id: 'management',
    name: 'Management',
    members: 3
  }
];