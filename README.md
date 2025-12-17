# 🚀 React + Redux Toolkit + Express - Employee Management System

## 📋 Project Overview

This is a full-stack Employee Management System using React with Redux Toolkit on the frontend and Express on the backend.

---

## ⚠️ Current Issues & Required Fixes

### 🔴 Backend Issues (`backend/server.js`)

#### 1. **Missing CORS Configuration**

The CORS middleware is imported but not being used. You need to configure it properly to allow frontend-backend communication.

#### **Missing Employee Route**

The `/api/employees` route is not implemented. The route should return the employees data from the imported employees module.

**Current State:** Server has employee data available but no route to access it.

---

### 🔴 Frontend Issues

#### **Empty Redux Slice** (`frontend/src/store/employeesSlice.js`)

The file is completely empty. You need to create:

- ✅ Redux slice using `createSlice`
- ✅ Async thunk using `createAsyncThunk` to fetch employees from the backend API
- ✅ Handle loading states (pending, fulfilled, rejected)
- ✅ Initial state with employees array, loading status, and error handling
- ✅ Export the reducer and the async thunk action


**What needs to be added:**

- Fetch employees when component mounts using `useEffect`
- Display a loading indicator while fetching
- Map through employees and display their names
- Handle error states appropriately

---

## 🚀 How to Run (After Fixes)

### Backend

```bash
cd backend
npm install
npm start
# Server runs on http://localhost:9000
```

### Frontend

```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```

---

## ✅ Expected Result

After implementing all fixes:

- Backend API serves employee data at `/api/employees`
- Frontend fetches and displays a list of employee names
- Redux Toolkit manages state with loading/error handling
- CORS allows frontend-backend communication

