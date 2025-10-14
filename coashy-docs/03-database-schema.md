# Database Schema

## 🧠 Entities
### User
- id (PK)
- name
- email (unique)
- password (hashed)
- role (enum: coach, client)
- created_at

### CoachProfile
- id (PK)
- user_id (FK -> User)
- bio
- specialization
- price
- location

### ClientProfile
- id (PK)
- user_id (FK -> User)
- weight_history (json or separate table)
- goals

### Program
- id (PK)
- coach_id (FK -> CoachProfile)
- title
- type (workout | nutrition)
- content (json or structured)
- created_at

### Assignment
- id (PK)
- program_id (FK)
- client_id (FK -> ClientProfile)
- start_date
- end_date

### ProgressLog
- id (PK)
- client_id (FK)
- date
- weight
- notes

### Message
- id (PK)
- sender_id (FK -> User)
- receiver_id (FK -> User)
- content
- timestamp

---

## 🧭 Relationships
- A **User** can be a **Coach** or a **Client** (1:1 CoachProfile/ClientProfile).
- A **Coach** can create many **Programs**.
- A **Program** can be assigned to many **Clients**.
- A **Client** can have multiple **ProgressLogs**.
