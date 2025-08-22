// assets/assets.js - Dummy data for the healthcare management system

export const DUMMY_PATIENTS = [
  {
    id: 1,
    fullName: "John Doe",
    phoneNumber: "(123) 456-7890",
    address: "123 Main St, Anytown, CA",
    lastVisit: "2023-10-26",
    dateOfBirth: "1985-03-15",
    emergencyContact: "John Doe (Husband) - (555) 987-6543",
    visits: [
      {
        id: 1,
        date: "2023-10-20",
        purpose: "Annual Check-up",
        summary: "Routine physical, all good.",
        visitType: "Routine Check-up",
        notes: "Patient reported feeling well. Vital signs normal. Recommended annual follow-up.",
        gpsLocation: "Lat: 34.0522, Lon: -118.2437"
      },
      {
        id: 2,
        date: "2023-07-10",
        purpose: "Flu Symptoms",
        summary: "Prescribed antiviral, advised rest.",
        visitType: "Follow-up",
        notes: "Patient presented with flu-like symptoms. Temperature 101°F. Prescribed Tamiflu.",
        gpsLocation: "Lat: 34.0522, Lon: -118.2437"
      },
      {
        id: 3,
        date: "2023-03-01",
        purpose: "Follow-up",
        summary: "Blood pressure re-check, stable.",
        visitType: "Follow-up",
        notes: "Blood pressure monitoring showed improvement. Continue current medication.",
        gpsLocation: "Lat: 34.0522, Lon: -118.2437"
      }
    ]
  },
  {
    id: 2,
    fullName: "Jane Smith",
    phoneNumber: "(987) 654-3210",
    address: "456 Oak Ave, Villagetown, TX",
    lastVisit: "2023-09-15",
    dateOfBirth: "1990-07-22",
    emergencyContact: "Mike Smith (Brother) - (555) 123-4567",
    visits: [
      {
        id: 4,
        date: "2023-09-15",
        purpose: "Consultation",
        summary: "Discussed treatment options for chronic condition.",
        visitType: "Initial Consultation",
        notes: "New patient consultation. Discussed medical history and current symptoms.",
        gpsLocation: "Lat: 32.7767, Lon: -96.7970"
      },
      {
        id: 5,
        date: "2023-06-20",
        purpose: "Emergency",
        summary: "Treated for severe allergic reaction.",
        visitType: "Emergency",
        notes: "Patient experienced anaphylaxis. Administered epinephrine. Full recovery.",
        gpsLocation: "Lat: 32.7767, Lon: -96.7970"
      }
    ]
  },
  {
    id: 3,
    fullName: "Robert Johnson",
    phoneNumber: "(555) 123-4567",
    address: "789 Pine Ln, Cityville, TX",
    lastVisit: "2023-11-01",
    dateOfBirth: "1978-12-10",
    emergencyContact: "Sarah Johnson (Wife) - (555) 987-1234",
    visits: [
      {
        id: 6,
        date: "2023-11-01",
        purpose: "Regular Check-up",
        summary: "Routine examination, prescribed vitamins.",
        visitType: "Routine Check-up",
        notes: "Annual physical examination. All vitals normal. Recommended vitamin D supplement.",
        gpsLocation: "Lat: 32.7767, Lon: -96.7970"
      }
    ]
  }
];

export const DUMMY_USER = {
  id: 1,
  username: "Admin User",
  email: "admin@healthsolutions.com",
  role: "Administrator",
  phoneNumber: "0333-12345678",
  profileImage: "/api/placeholder/40/40",
  paymentInfo: {
    cardHolderName: "Azusa Nakano",
    cardNumber: "1111 2222 3333 4444",
    country: "United Kingdom",
    autoPayoutEnabled: true,
    paymentNotificationsEnabled: true
  }
};

export const MESSAGING_DATA = {
  conversations: [
    {
      id: 1,
      name: "General",
      memberCount: 6,
      avatar: "/api/placeholder/40/40",
      lastMessage: "Good morning everyone! Hope you all have a productive day.",
      lastMessageTime: "09:00 AM",
      isActive: true
    },
    {
      id: 2,
      name: "Field Team",
      memberCount: 3,
      avatar: "/api/placeholder/40/40",
      lastMessage: "I'm heading to the north region for visits today.",
      lastMessageTime: "09:05 AM",
      isActive: false
    },
    {
      id: 3,
      name: "Management",
      memberCount: 3,
      avatar: "/api/placeholder/40/40",
      lastMessage: "Monthly report due by Friday",
      lastMessageTime: "Yesterday",
      isActive: false
    }
  ],
  messages: [
    {
      id: 1,
      conversationId: 1,
      sender: "Admin User",
      message: "Good morning everyone! Hope you all have a productive day.",
      timestamp: "09:00 AM",
      isCurrentUser: true
    },
    {
      id: 2,
      conversationId: 1,
      sender: "Field Employee",
      message: "Good morning! I'm heading to the north region for visits today.",
      timestamp: "09:05 AM",
      isCurrentUser: false,
      avatar: "F"
    }
  ]
};

export const VISIT_TYPES = [
  { value: "initial-consultation", label: "Initial Consultation" },
  { value: "follow-up", label: "Follow-up" },
  { value: "emergency", label: "Emergency" },
  { value: "routine-checkup", label: "Routine Check-up" }
];

export const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "IN", name: "India", flag: "🇮🇳" }
];

// Navigation menu items
export const NAVIGATION_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
    isActive: false
  },
  {
    id: 2,
    name: "My Patients",
    path: "/patients",
    icon: "patients",
    isActive: true
  },
  {
    id: 3,
    name: "Messaging",
    path: "/messaging",
    icon: "messaging",
    isActive: false
  }
];

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid phone number",
  PASSWORD_TOO_SHORT: "Password must be at least 6 characters",
  PASSWORDS_DONT_MATCH: "Passwords do not match",
  INVALID_DATE: "Please enter a valid date"
};

// App constants
export const APP_CONFIG = {
  APP_NAME: "A Health Solutions Inc",
  VERSION: "1.0.0",
  API_BASE_URL: "http://localhost:5000/api",
  ITEMS_PER_PAGE: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_FORMATS: ["jpg", "jpeg", "png", "gif"],
  DATE_FORMAT: "YYYY-MM-DD",
  TIME_FORMAT: "HH:mm A"
};

// Theme colors (matching the UI design)
export const THEME = {
  colors: {
    primary: "#1e40af", // Blue
    primaryHover: "#1e3a8a",
    secondary: "#6b7280", // Gray
    success: "#10b981", // Green
    danger: "#ef4444", // Red
    warning: "#f59e0b", // Yellow
    light: "#f8fafc",
    dark: "#1f2937",
    white: "#ffffff",
    border: "#e5e7eb"
  },
  fonts: {
    primary: "Inter, system-ui, sans-serif",
    mono: "Monaco, monospace"
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    full: "9999px"
  }
};

export default {
  DUMMY_PATIENTS,
  DUMMY_USER,
  MESSAGING_DATA,
  VISIT_TYPES,
  COUNTRIES,
  NAVIGATION_ITEMS,
  VALIDATION_MESSAGES,
  APP_CONFIG,
  THEME
};