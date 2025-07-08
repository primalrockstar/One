# ProMedix EMS - API Documentation for Mobile Migration

## 🌐 API Architecture Overview

**Base URL:** `https://api.promedixems.com` (future mobile API)
**Current:** Express.js server with in-memory storage
**Migration Target:** REST API with SQLite backend

## 📋 API Endpoints Summary

### Authentication Endpoints
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/me
```

### Protocol Management
```
GET    /api/protocols
GET    /api/protocols/:id
GET    /api/protocols/category/:category
POST   /api/protocols
PUT    /api/protocols/:id
DELETE /api/protocols/:id
```

### Medication Database
```
GET    /api/medications
GET    /api/medications/:id
GET    /api/medications/search?q={query}
GET    /api/medications/category/:category
POST   /api/medications
PUT    /api/medications/:id
```

### Patient Medications
```
GET    /api/patient-medications
GET    /api/patient-medications/search?q={query}
GET    /api/patient-medications/herbal
GET    /api/patient-medications/category/:category
```

### Training Simulations
```
GET    /api/simulations
GET    /api/simulations/:id
GET    /api/simulations/difficulty/:level
POST   /api/simulations/:id/complete
GET    /api/simulations/user/:userId/progress
```

### User Progress
```
GET    /api/progress/user/:userId
GET    /api/progress/user/:userId/category/:category
POST   /api/progress
PUT    /api/progress/:id
```

### Assessments
```
GET    /api/assessments/user/:userId
POST   /api/assessments
PUT    /api/assessments/:id
```

## 🔐 Authentication System

### Login Request
```javascript
POST /api/auth/login
Content-Type: application/json

{
  "username": "emt_user",
  "password": "secure_password"
}

// Response
{
  "success": true,
  "user": {
    "id": 1,
    "username": "emt_user",
    "email": "user@example.com",
    "certification_level": "EMT"
  },
  "token": "jwt_token_here"
}
```

### Registration Request
```javascript
POST /api/auth/register
Content-Type: application/json

{
  "username": "new_emt",
  "email": "newemt@example.com",
  "password": "secure_password",
  "certification_level": "EMT"
}
```

## 📚 Protocol Endpoints

### Get All Protocols
```javascript
GET /api/protocols
Authorization: Bearer {token}

// Response
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Chest Pain Assessment",
      "category": "cardiac",
      "content": "Comprehensive chest pain evaluation...",
      "steps": [
        "Scene safety and BSI",
        "Primary assessment (ABCDE)",
        "Obtain vital signs",
        "Perform 12-lead ECG if available"
      ],
      "certification_level": "EMT",
      "created_at": "2025-01-01T00:00:00Z",
      "updated_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

### Get Protocol by Category
```javascript
GET /api/protocols/category/cardiac
Authorization: Bearer {token}

// Filters protocols by category (cardiac, respiratory, trauma, etc.)
```

## 💊 Medication Endpoints

### Search Medications
```javascript
GET /api/medications/search?q=epinephrine&level=EMT
Authorization: Bearer {token}

// Response
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Epinephrine Auto-injector",
      "generic_name": "Adrenaline",
      "category": "Emergency",
      "indication": "Anaphylaxis, severe allergic reactions",
      "contraindications": ["No absolute contraindications in anaphylaxis"],
      "dosage_adult": "0.3mg IM",
      "dosage_pediatric": "0.15mg IM",
      "route": "Intramuscular",
      "onset": "5-10 minutes",
      "duration": "10-20 minutes",
      "warnings": [
        "Monitor vital signs",
        "May repeat in 5-15 minutes"
      ],
      "certification_level": "EMT"
    }
  ]
}
```

### Get Medication Details
```javascript
GET /api/medications/1
Authorization: Bearer {token}

// Returns complete medication profile with:
// - Detailed pharmacology
// - Administration techniques
// - Contraindications and warnings
// - Dosage calculations
// - Pediatric considerations
```

## 🎯 Training Simulation Endpoints

### Complete Simulation
```javascript
POST /api/simulations/1/complete
Authorization: Bearer {token}
Content-Type: application/json

{
  "user_id": 1,
  "score": 85,
  "time_taken": 300,
  "correct_answers": 8,
  "total_questions": 10,
  "critical_actions_missed": ["iv_access"],
  "certification_level": "EMT"
}

// Response
{
  "success": true,
  "result": {
    "passed": true,
    "score": 85,
    "feedback": "Excellent performance on primary assessment...",
    "areas_for_improvement": ["IV access technique"],
    "next_recommended": "Advanced Airway Management"
  }
}
```

### Get User Simulation Progress
```javascript
GET /api/simulations/user/1/progress
Authorization: Bearer {token}

// Response
{
  "success": true,
  "data": {
    "completed_simulations": 15,
    "total_simulations": 20,
    "average_score": 82.5,
    "certification_progress": {
      "EMT": {
        "completed": 10,
        "total": 12,
        "percentage": 83.3
      }
    },
    "recent_completions": [...]
  }
}
```

## 📊 Progress Tracking Endpoints

### Get User Progress
```javascript
GET /api/progress/user/1
Authorization: Bearer {token}

// Response
{
  "success": true,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "category": "Cardiovascular System",
      "completed_items": 45,
      "total_items": 50,
      "score": 89.2,
      "last_updated": "2025-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "user_id": 1,
      "category": "Respiratory System",
      "completed_items": 38,
      "total_items": 50,
      "score": 84.7,
      "last_updated": "2025-01-14T15:20:00Z"
    }
  ]
}
```

### Update Progress
```javascript
POST /api/progress
Authorization: Bearer {token}
Content-Type: application/json

{
  "user_id": 1,
  "category": "Medical Emergencies",
  "completed_items": 42,
  "total_items": 50,
  "score": 86.5
}
```

## 🧠 AI Recommendation Endpoints

### Get Medication Recommendations
```javascript
POST /api/ai/medication-recommendations
Authorization: Bearer {token}
Content-Type: application/json

{
  "patient": {
    "age": 65,
    "weight": 80,
    "gender": "male",
    "chief_complaint": "chest pain",
    "vitals": {
      "bp": "140/90",
      "hr": "110",
      "rr": "20",
      "spo2": "94%"
    },
    "allergies": ["penicillin"],
    "current_medications": ["metformin", "lisinopril"]
  },
  "certification_level": "EMT"
}

// Response
{
  "success": true,
  "recommendations": [
    {
      "medication": "Aspirin",
      "dosage": "324mg chewed",
      "rationale": "Acute coronary syndrome suspected based on presentation",
      "contraindications_check": "No contraindications identified",
      "confidence": 0.95
    },
    {
      "medication": "Oxygen",
      "dosage": "15L via NRB",
      "rationale": "SpO2 below 95% indicates hypoxemia",
      "contraindications_check": "Safe to administer",
      "confidence": 0.98
    }
  ],
  "warnings": [],
  "next_steps": ["Obtain 12-lead ECG", "Establish IV access", "Transport to ED"]
}
```

## 📱 Mobile-Specific Endpoints

### Sync Data for Offline Use
```javascript
POST /api/mobile/sync
Authorization: Bearer {token}
Content-Type: application/json

{
  "last_sync": "2025-01-15T10:00:00Z",
  "device_id": "android_device_123"
}

// Response
{
  "success": true,
  "data": {
    "protocols": [...], // Updated protocols since last sync
    "medications": [...], // New/updated medications
    "flashcards": [...], // Updated flashcard content
    "user_progress": {...}, // Current progress state
    "app_version": "1.0.0",
    "content_version": "2025.01.15"
  },
  "cache_duration": 86400 // 24 hours
}
```

### Upload Progress Data
```javascript
POST /api/mobile/upload-progress
Authorization: Bearer {token}
Content-Type: application/json

{
  "device_id": "android_device_123",
  "progress_data": [
    {
      "category": "Cardiovascular System",
      "completed_items": 48,
      "score": 91.2,
      "timestamp": "2025-01-15T14:30:00Z"
    }
  ],
  "assessments": [
    {
      "title": "EMT Cardiac Assessment",
      "score": 87,
      "completed_at": "2025-01-15T14:45:00Z"
    }
  ]
}
```

## 🔊 Voice Control API

### Process Voice Command
```javascript
POST /api/voice/command
Authorization: Bearer {token}
Content-Type: application/json

{
  "command": "show me epinephrine dosage",
  "context": "medication_reference",
  "certification_level": "EMT"
}

// Response
{
  "success": true,
  "action": "show_medication",
  "data": {
    "medication_id": 1,
    "name": "Epinephrine",
    "dosage": "0.3mg IM for adults, 0.15mg IM for pediatric"
  },
  "speech_response": "Epinephrine dosage for EMT level is 0.3 milligrams intramuscular for adults"
}
```

## ⚡ Real-time Features

### WebSocket Connections (Future Enhancement)
```javascript
// Connect to real-time updates
const socket = new WebSocket('wss://api.promedixems.com/ws');

// Listen for protocol updates
socket.on('protocol_update', (data) => {
  // Update local cache with new protocol information
});

// Listen for emergency alerts
socket.on('emergency_alert', (data) => {
  // Display critical safety updates
});
```

## 🛡️ Error Handling

### Standard Error Response
```javascript
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Username or password is incorrect",
    "details": "Authentication failed for user: emt_user"
  },
  "timestamp": "2025-01-15T12:00:00Z"
}
```

### Common Error Codes
- `AUTH_REQUIRED` - Authentication token required
- `INVALID_TOKEN` - Token expired or invalid
- `INSUFFICIENT_PERMISSIONS` - User lacks required certification level
- `RESOURCE_NOT_FOUND` - Requested resource does not exist
- `VALIDATION_ERROR` - Request data validation failed
- `RATE_LIMIT_EXCEEDED` - Too many requests

## 📈 Rate Limiting

### Request Limits
- Authentication: 10 requests per minute
- General API: 100 requests per minute
- File uploads: 5 requests per minute
- AI recommendations: 20 requests per hour

### Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642694400
```

## 🔧 Development Tools

### Postman Collection
```json
{
  "info": {
    "name": "ProMedix EMS API",
    "version": "1.0.0"
  },
  "auth": {
    "type": "bearer"
  },
  "item": [
    {
      "name": "Authentication",
      "item": [...]
    },
    {
      "name": "Protocols",
      "item": [...]
    }
  ]
}
```

### API Testing
```javascript
// Example API test
describe('Medication API', () => {
  test('should return epinephrine details', async () => {
    const response = await api.get('/medications/search?q=epinephrine');
    expect(response.status).toBe(200);
    expect(response.data.success).toBe(true);
    expect(response.data.data[0].name).toBe('Epinephrine Auto-injector');
  });
});
```

---

*This API documentation provides complete endpoint specifications for migrating ProMedix EMS to a mobile application with full offline capabilities and real-time synchronization.*