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

## 2. Daily Check-in System
- [ ] Record Daily Check-in
  ```
  POST /api/checkin
  Returns: { success, cards, streak }
  ```
- [ ] Get Check-in Status
  ```
  GET /api/checkin/status
  Returns: { lastCheckIn, currentStreak, nextReward }
  ```

## 3. Card Collection Management
- [ ] View Collection
  ```
  GET /api/collection
  Query: { page, limit, sort }
  ```
- [ ] Add Card to Collection
  ```
  POST /api/collection/add
  Body: { cardId, quantity }
  ```
- [ ] Remove Card from Collection
  ```
  DELETE /api/collection/remove
  Body: { cardId, quantity }
  ```
- [ ] Get Collection Statistics
  ```
  GET /api/collection/stats
  Returns: { totalCards, uniqueCards, completion }
  ```

## 4. Card Search & Filtering
- [x] Search Cards
  ```
  GET /api/cards
  Query: { name, types, rarity, baseSet, page, limit }
  ```
- [x] Get Card Details
  ```
  GET /api/cards/:cardId
  ```

## 5. Base Set Management
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

## 6. User Profile
- [x] Get Profile
  ```
  GET /api/profile
  Returns: User info and stats
  ```
- [ ] Update Profile
  ```
  PUT /api/profile
  Body: { username, email, preferences }
  ```
- [ ] View Collection Progress
  ```
  GET /api/profile/progress
  Returns: Completion % by base set
  ```

## 7. Database Setup
- [x] Base Set Schema Implementation
- [x] Card Schema Implementation
- [x] User Schema Implementation
- [ ] Database Indexing

## 8. Performance Features
- [ ] Redis Caching Implementation
- [ ] Pagination for List Endpoints
- [ ] Search Optimization
- [ ] Request Rate Limiting

## 9. Security Features
- [ ] JWT Authentication Implementation
- [ ] Input Validation
- [ ] Request Sanitization
- [ ] Error Handling System

## 10. Frontend Features
- [ ] Responsive Card Grid
- [ ] Card Detail Modal
- [ ] Collection Management UI
- [ ] Search & Filter Interface
- [ ] User Profile Dashboard
- [ ] Check-in Calendar