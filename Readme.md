# Pokemon TCG Collection Game - Feature Checklist

## 1. Authentication
- [ ] User Registration
  ```
  POST /api/auth/register
  Body: { username, email, password }
  ```
- [ ] User Login
  ```
  POST /api/auth/login
  Body: { email, password }
  ```
- [ ] Token Verification
  ```
  GET /api/auth/verify
  Header: Authorization: Bearer <token>
  ```


## 2. Card Search & Filtering
- [x] Search Cards
  ```
  GET /api/cards
  Query: { name, types, rarity, baseSet, page, limit }
  ```
- [x] Get Card Details
  ```
  GET /api/cards/:cardId
  ```

## 3. Base Set Management
- [x] List All Base Sets
  ```
  GET /api/base-sets
  Query: { page, limit, series }
  ```
- [x] Get Base Set Details
  ```
  GET /api/base-sets/:baseSetId
  Returns: Base set info with cards
  ```

## 4. User Profile

- [x] Get Profile
  ```
  GET /api/profile
  Returns: User info and stats
  ```
- [x] Update Profile
  ```
  PUT /api/profile
  Body: { username, email, preferences }
  ```

## 5. Database Setup
- [x] Base Set Schema Implementation
- [x] Card Schema Implementation
- [x] User Schema Implementation

## 6. Performance Features
- [ ] Redis Caching Implementation
- [ ] Pagination for List Endpoints
- [ ] Search Optimization
- [ ] Request Rate Limiting

## 7. Security Features
- [ ] JWT Authentication Implementation
- [ ] Input Validation
- [ ] Request Sanitization
- [ ] Error Handling System

## 8. Frontend Features
- [ ] Responsive Card Grid
- [ ] Card Detail Modal
- [ ] Collection Management UI
- [ ] Search & Filter Interface
- [ ] User Profile Dashboard
- [ ] Check-in Calendar

## Extra features:
- [ ] /leaderboard for 5 players.
- [ ] /collection for random 5 cards with updates to userModel details.
