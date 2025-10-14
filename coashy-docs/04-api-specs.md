# API Specification

Base URL: `/api`

## Auth
### POST `/auth/register`
Registers a new user (coach or client)

### POST `/auth/login`
Authenticates a user, returns JWT

---

## Coach
### GET `/coach/me`
Get coach profile

### POST `/coach/programs`
Create a new workout/nutrition program

---

## Client
### GET `/client/me`
Get client profile

### GET `/client/assignments`
Get assigned programs

### POST `/client/progress`
Log weight or progress

---

## Programs
### GET `/programs/:id`
Get a specific program

### PATCH `/programs/:id`
Update program

---

## Messaging
### GET `/messages/:userId`
Get chat history with user

### POST `/messages`
Send message
